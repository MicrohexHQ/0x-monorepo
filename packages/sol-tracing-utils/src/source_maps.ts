import * as _ from 'lodash';

import { getPcToInstructionIndexMapping } from './instructions';
import { OffsetToLocation, SourceCodes, SourceRange, Sources } from './types';

const RADIX = 10;

export interface SourceLocation {
    offset: number;
    length: number;
    fileIndex: number;
}

/**
 * Receives a string with newlines and returns a map of byte offset to LineColumn
 * @param str A string to process
 */
export function getOffsetToLocation(str: string): OffsetToLocation {
    const offsetToLocation: OffsetToLocation = { 0: { line: 1, column: 0 } };
    let currentOffset = 0;
    for (const char of str.split('')) {
        const location = offsetToLocation[currentOffset];
        const isNewline = char === '\n';
        offsetToLocation[currentOffset + 1] = {
            line: location.line + (isNewline ? 1 : 0),
            column: isNewline ? 0 : location.column + 1,
        };
        currentOffset++;
    }
    return offsetToLocation;
}

/**
 * Parses a sourcemap string.
 * The solidity sourcemap format is documented here: https://github.com/ethereum/solidity/blob/develop/docs/miscellaneous.rst#source-mappings
 * @param indexToSourceCode index to source code
 * @param srcMap source map string
 * @param bytecodeHex contract bytecode
 * @param indexToSource index to source file path
 */
export function parseSourceMap(
    sourceCodes: SourceCodes,
    srcMap: string,
    bytecodeHex: string,
    sources: Sources,
): { [programCounter: number]: SourceRange } {
    const bytecode = Uint8Array.from(Buffer.from(bytecodeHex, 'hex'));
    const pcToInstructionIndex: { [programCounter: number]: number } = getPcToInstructionIndexMapping(bytecode);
    const fileIndexToOffsetToLocation: { [fileIndex: number]: OffsetToLocation } = {};
    _.map(sourceCodes, (sourceCode: string, fileIndex: number) => {
        fileIndexToOffsetToLocation[fileIndex] = _.isUndefined(sourceCode) ? {} : getOffsetToLocation(sourceCode);
    });
    const entries = srcMap.split(';');
    let lastParsedEntry: SourceLocation = {} as any;
    const instructionIndexToSourceRange: { [instructionIndex: number]: SourceRange } = {};
    let lastSourceRange: SourceRange;
    _.each(entries, (entry: string, i: number) => {
        // tslint:disable-next-line:no-unused-variable
        const [instructionIndexStrIfExists, lengthStrIfExists, fileIndexStrIfExists, jumpTypeStrIfExists] = entry.split(
            ':',
        );
        const instructionIndexIfExists = parseInt(instructionIndexStrIfExists, RADIX);
        const lengthIfExists = parseInt(lengthStrIfExists, RADIX);
        const fileIndexIfExists = parseInt(fileIndexStrIfExists, RADIX);
        const offset = _.isNaN(instructionIndexIfExists) ? lastParsedEntry.offset : instructionIndexIfExists;
        const length = _.isNaN(lengthIfExists) ? lastParsedEntry.length : lengthIfExists;
        const fileIndex = _.isNaN(fileIndexIfExists) ? lastParsedEntry.fileIndex : fileIndexIfExists;
        const parsedEntry = {
            offset,
            length,
            fileIndex,
        };
        if (parsedEntry.fileIndex !== -1 && !_.isUndefined(fileIndexToOffsetToLocation[parsedEntry.fileIndex])) {
            const offsetToLocation = fileIndexToOffsetToLocation[parsedEntry.fileIndex];
            const sourceRange = {
                location: {
                    start: offsetToLocation[parsedEntry.offset],
                    end: offsetToLocation[parsedEntry.offset + parsedEntry.length],
                },
                fileName: sources[parsedEntry.fileIndex],
            };
            if (sourceRange.location.start === undefined || sourceRange.location.end === undefined) {
                throw new Error(`Error while processing sourcemap: location out of range in ${sourceRange.fileName}`);
            }
            instructionIndexToSourceRange[i] = sourceRange;
            lastSourceRange = sourceRange;
        } else {
            // Some assembly code generated by Solidity can't be mapped back to a line of source code.
            // Source: https://github.com/ethereum/solidity/issues/3629
            instructionIndexToSourceRange[i] = lastSourceRange;
        }
        lastParsedEntry = parsedEntry;
    });
    const pcsToSourceRange: { [programCounter: number]: SourceRange } = {};
    for (const programCounterKey of _.keys(pcToInstructionIndex)) {
        const pc = parseInt(programCounterKey, RADIX);
        const instructionIndex: number = pcToInstructionIndex[pc];
        pcsToSourceRange[pc] = instructionIndexToSourceRange[instructionIndex];
    }
    return pcsToSourceRange;
}
