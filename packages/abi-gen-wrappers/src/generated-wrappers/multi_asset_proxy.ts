// tslint:disable:no-consecutive-blank-lines ordered-imports align trailing-comma whitespace class-name
// tslint:disable:no-unused-variable
// tslint:disable:no-unbound-method
import { BaseContract } from '@0x/base-contract';
import { BlockParam, BlockParamLiteral, CallData, ContractAbi, ContractArtifact, DecodedLogArgs, MethodAbi, TxData, TxDataPayable, SupportedProvider } from 'ethereum-types';
import { AbiEncoder, BigNumber, classUtils, logUtils, providerUtils } from '@0x/utils';
import { SimpleContractArtifact } from '@0x/types';
import { Web3Wrapper } from '@0x/web3-wrapper';
import { isUndefined } from 'lodash';
// tslint:enable:no-unused-variable

export type MultiAssetProxyEventArgs =
    | MultiAssetProxyAuthorizedAddressAddedEventArgs
    | MultiAssetProxyAuthorizedAddressRemovedEventArgs
    | MultiAssetProxyAssetProxyRegisteredEventArgs;

export enum MultiAssetProxyEvents {
    AuthorizedAddressAdded = 'AuthorizedAddressAdded',
    AuthorizedAddressRemoved = 'AuthorizedAddressRemoved',
    AssetProxyRegistered = 'AssetProxyRegistered',
}

export interface MultiAssetProxyAuthorizedAddressAddedEventArgs extends DecodedLogArgs {
    target: string;
    caller: string;
}

export interface MultiAssetProxyAuthorizedAddressRemovedEventArgs extends DecodedLogArgs {
    target: string;
    caller: string;
}

export interface MultiAssetProxyAssetProxyRegisteredEventArgs extends DecodedLogArgs {
    id: string;
    assetProxy: string;
}


/* istanbul ignore next */
// tslint:disable:no-parameter-reassignment
// tslint:disable-next-line:class-name
export class MultiAssetProxyContract extends BaseContract {
    public assetProxies = {
        async callAsync(
            index_0: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as MultiAssetProxyContract;
            const encodedData = self._strictEncodeArguments('assetProxies(bytes4)', [index_0
        ]);
            const rawCallResult = await self._callAsync(self.address, encodedData, callData, defaultBlock);
            const abiEncoder = self._lookupAbiEncoder('assetProxies(bytes4)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<string
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
    };
    public addAuthorizedAddress = {
        async sendTransactionAsync(
            target: string,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as MultiAssetProxyContract;
            const encodedData = self._strictEncodeArguments('addAuthorizedAddress(address)', [target
    ]);
            const gasEstimateFunction = self.addAuthorizedAddress.estimateGasAsync.bind(self, target
    );
            const txHash = await self._sendTransactionAsync(self.address, encodedData, txData, gasEstimateFunction);
            return txHash;
        },
        async estimateGasAsync(
            target: string,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as MultiAssetProxyContract;
            const encodedData = self._strictEncodeArguments('addAuthorizedAddress(address)', [target
    ]);
            const gas = await self._estimateGasAsync(self.address, encodedData, txData);
            return gas;
        },
        getABIEncodedTransactionData(
            target: string,
        ): string {
            const self = this as any as MultiAssetProxyContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('addAuthorizedAddress(address)', [target
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            target: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as MultiAssetProxyContract;
            const encodedData = self._strictEncodeArguments('addAuthorizedAddress(address)', [target
        ]);
            const rawCallResult = await self._callAsync(self.address, encodedData, callData, defaultBlock);
            const abiEncoder = self._lookupAbiEncoder('addAuthorizedAddress(address)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<void
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
    };
    public authorities = {
        async callAsync(
            index_0: BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as MultiAssetProxyContract;
            const encodedData = self._strictEncodeArguments('authorities(uint256)', [index_0
        ]);
            const rawCallResult = await self._callAsync(self.address, encodedData, callData, defaultBlock);
            const abiEncoder = self._lookupAbiEncoder('authorities(uint256)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<string
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
    };
    public getAssetProxy = {
        async callAsync(
            assetProxyId: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as MultiAssetProxyContract;
            const encodedData = self._strictEncodeArguments('getAssetProxy(bytes4)', [assetProxyId
        ]);
            const rawCallResult = await self._callAsync(self.address, encodedData, callData, defaultBlock);
            const abiEncoder = self._lookupAbiEncoder('getAssetProxy(bytes4)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<string
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
    };
    public removeAuthorizedAddress = {
        async sendTransactionAsync(
            target: string,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as MultiAssetProxyContract;
            const encodedData = self._strictEncodeArguments('removeAuthorizedAddress(address)', [target
    ]);
            const gasEstimateFunction = self.removeAuthorizedAddress.estimateGasAsync.bind(self, target
    );
            const txHash = await self._sendTransactionAsync(self.address, encodedData, txData, gasEstimateFunction);
            return txHash;
        },
        async estimateGasAsync(
            target: string,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as MultiAssetProxyContract;
            const encodedData = self._strictEncodeArguments('removeAuthorizedAddress(address)', [target
    ]);
            const gas = await self._estimateGasAsync(self.address, encodedData, txData);
            return gas;
        },
        getABIEncodedTransactionData(
            target: string,
        ): string {
            const self = this as any as MultiAssetProxyContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('removeAuthorizedAddress(address)', [target
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            target: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as MultiAssetProxyContract;
            const encodedData = self._strictEncodeArguments('removeAuthorizedAddress(address)', [target
        ]);
            const rawCallResult = await self._callAsync(self.address, encodedData, callData, defaultBlock);
            const abiEncoder = self._lookupAbiEncoder('removeAuthorizedAddress(address)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<void
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
    };
    public owner = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as MultiAssetProxyContract;
            const encodedData = self._strictEncodeArguments('owner()', []);
            const rawCallResult = await self._callAsync(self.address, encodedData, callData, defaultBlock);
            const abiEncoder = self._lookupAbiEncoder('owner()');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<string
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
    };
    public removeAuthorizedAddressAtIndex = {
        async sendTransactionAsync(
            target: string,
            index: BigNumber,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as MultiAssetProxyContract;
            const encodedData = self._strictEncodeArguments('removeAuthorizedAddressAtIndex(address,uint256)', [target,
    index
    ]);
            const gasEstimateFunction = self.removeAuthorizedAddressAtIndex.estimateGasAsync.bind(self, target,
    index
    );
            const txHash = await self._sendTransactionAsync(self.address, encodedData, txData, gasEstimateFunction);
            return txHash;
        },
        async estimateGasAsync(
            target: string,
            index: BigNumber,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as MultiAssetProxyContract;
            const encodedData = self._strictEncodeArguments('removeAuthorizedAddressAtIndex(address,uint256)', [target,
    index
    ]);
            const gas = await self._estimateGasAsync(self.address, encodedData, txData);
            return gas;
        },
        getABIEncodedTransactionData(
            target: string,
            index: BigNumber,
        ): string {
            const self = this as any as MultiAssetProxyContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('removeAuthorizedAddressAtIndex(address,uint256)', [target,
    index
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            target: string,
            index: BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as MultiAssetProxyContract;
            const encodedData = self._strictEncodeArguments('removeAuthorizedAddressAtIndex(address,uint256)', [target,
        index
        ]);
            const rawCallResult = await self._callAsync(self.address, encodedData, callData, defaultBlock);
            const abiEncoder = self._lookupAbiEncoder('removeAuthorizedAddressAtIndex(address,uint256)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<void
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
    };
    public getProxyId = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as MultiAssetProxyContract;
            const encodedData = self._strictEncodeArguments('getProxyId()', []);
            const rawCallResult = await self._callAsync(self.address, encodedData, callData, defaultBlock);
            const abiEncoder = self._lookupAbiEncoder('getProxyId()');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<string
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
    };
    public authorized = {
        async callAsync(
            index_0: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<boolean
        > {
            const self = this as any as MultiAssetProxyContract;
            const encodedData = self._strictEncodeArguments('authorized(address)', [index_0
        ]);
            const rawCallResult = await self._callAsync(self.address, encodedData, callData, defaultBlock);
            const abiEncoder = self._lookupAbiEncoder('authorized(address)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<boolean
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
    };
    public registerAssetProxy = {
        async sendTransactionAsync(
            assetProxy: string,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as MultiAssetProxyContract;
            const encodedData = self._strictEncodeArguments('registerAssetProxy(address)', [assetProxy
    ]);
            const gasEstimateFunction = self.registerAssetProxy.estimateGasAsync.bind(self, assetProxy
    );
            const txHash = await self._sendTransactionAsync(self.address, encodedData, txData, gasEstimateFunction);
            return txHash;
        },
        async estimateGasAsync(
            assetProxy: string,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as MultiAssetProxyContract;
            const encodedData = self._strictEncodeArguments('registerAssetProxy(address)', [assetProxy
    ]);
            const gas = await self._estimateGasAsync(self.address, encodedData, txData);
            return gas;
        },
        getABIEncodedTransactionData(
            assetProxy: string,
        ): string {
            const self = this as any as MultiAssetProxyContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('registerAssetProxy(address)', [assetProxy
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            assetProxy: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as MultiAssetProxyContract;
            const encodedData = self._strictEncodeArguments('registerAssetProxy(address)', [assetProxy
        ]);
            const rawCallResult = await self._callAsync(self.address, encodedData, callData, defaultBlock);
            const abiEncoder = self._lookupAbiEncoder('registerAssetProxy(address)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<void
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
    };
    public getAuthorizedAddresses = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string[]
        > {
            const self = this as any as MultiAssetProxyContract;
            const encodedData = self._strictEncodeArguments('getAuthorizedAddresses()', []);
            const rawCallResult = await self._callAsync(self.address, encodedData, callData, defaultBlock);
            const abiEncoder = self._lookupAbiEncoder('getAuthorizedAddresses()');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<string[]
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
    };
    public transferOwnership = {
        async sendTransactionAsync(
            newOwner: string,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as MultiAssetProxyContract;
            const encodedData = self._strictEncodeArguments('transferOwnership(address)', [newOwner
    ]);
            const gasEstimateFunction = self.transferOwnership.estimateGasAsync.bind(self, newOwner
    );
            const txHash = await self._sendTransactionAsync(self.address, encodedData, txData, gasEstimateFunction);
            return txHash;
        },
        async estimateGasAsync(
            newOwner: string,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as MultiAssetProxyContract;
            const encodedData = self._strictEncodeArguments('transferOwnership(address)', [newOwner
    ]);
            const gas = await self._estimateGasAsync(self.address, encodedData, txData);
            return gas;
        },
        getABIEncodedTransactionData(
            newOwner: string,
        ): string {
            const self = this as any as MultiAssetProxyContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('transferOwnership(address)', [newOwner
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            newOwner: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as MultiAssetProxyContract;
            const encodedData = self._strictEncodeArguments('transferOwnership(address)', [newOwner
        ]);
            const rawCallResult = await self._callAsync(self.address, encodedData, callData, defaultBlock);
            const abiEncoder = self._lookupAbiEncoder('transferOwnership(address)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<void
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
    };
    public static async deployFrom0xArtifactAsync(
        artifact: ContractArtifact | SimpleContractArtifact,
        supportedProvider: SupportedProvider,
        txDefaults: Partial<TxData>,
    ): Promise<MultiAssetProxyContract> {
        if (isUndefined(artifact.compilerOutput)) {
            throw new Error('Compiler output not found in the artifact file');
        }
        const provider = providerUtils.standardizeOrThrow(supportedProvider);
        const bytecode = artifact.compilerOutput.evm.bytecode.object;
        const abi = artifact.compilerOutput.abi;
        return MultiAssetProxyContract.deployAsync(bytecode, abi, provider, txDefaults, );
    }
    public static async deployAsync(
        bytecode: string,
        abi: ContractAbi,
        supportedProvider: SupportedProvider,
        txDefaults: Partial<TxData>,
    ): Promise<MultiAssetProxyContract> {
        const provider = providerUtils.standardizeOrThrow(supportedProvider);
        const constructorAbi = BaseContract._lookupConstructorAbi(abi);
        [] = BaseContract._formatABIDataItemList(
            constructorAbi.inputs,
            [],
            BaseContract._bigNumberToString,
        );
        const encoder = new AbiEncoder.Constructor(constructorAbi);
        const txData = encoder.encode(bytecode, []);
        const web3Wrapper = new Web3Wrapper(provider);
        const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {data: txData},
            txDefaults,
            web3Wrapper.estimateGasAsync.bind(web3Wrapper),
        );
        const txHash = await web3Wrapper.sendTransactionAsync(txDataWithDefaults);
        logUtils.log(`transactionHash: ${txHash}`);
        const txReceipt = await web3Wrapper.awaitTransactionSuccessAsync(txHash);
        logUtils.log(`MultiAssetProxy successfully deployed at ${txReceipt.contractAddress}`);
        const contractInstance = new MultiAssetProxyContract(abi, txReceipt.contractAddress as string, provider, txDefaults);
        contractInstance.constructorArgs = [];
        return contractInstance;
    }
    constructor(abi: ContractAbi, address: string, supportedProvider: SupportedProvider, txDefaults?: Partial<TxData>) {
        super('MultiAssetProxy', abi, address, supportedProvider, txDefaults);
        classUtils.bindAll(this, ['_abiEncoderByFunctionSignature', 'address', 'abi', '_web3Wrapper']);
    }
} // tslint:disable:max-file-line-count
// tslint:enable:no-unbound-method
