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

export type DummyERC20TokenEventArgs =
    | DummyERC20TokenTransferEventArgs
    | DummyERC20TokenApprovalEventArgs;

export enum DummyERC20TokenEvents {
    Transfer = 'Transfer',
    Approval = 'Approval',
}

export interface DummyERC20TokenTransferEventArgs extends DecodedLogArgs {
    _from: string;
    _to: string;
    _value: BigNumber;
}

export interface DummyERC20TokenApprovalEventArgs extends DecodedLogArgs {
    _owner: string;
    _spender: string;
    _value: BigNumber;
}


/* istanbul ignore next */
// tslint:disable:no-parameter-reassignment
// tslint:disable-next-line:class-name
export class DummyERC20TokenContract extends BaseContract {
    public name = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as DummyERC20TokenContract;
            const encodedData = self._strictEncodeArguments('name()', []);
            const rawCallResult = await self._callAsync(self.address, encodedData, callData, defaultBlock);
            const abiEncoder = self._lookupAbiEncoder('name()');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<string
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
    };
    public approve = {
        async sendTransactionAsync(
            _spender: string,
            _value: BigNumber,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as DummyERC20TokenContract;
            const encodedData = self._strictEncodeArguments('approve(address,uint256)', [_spender,
    _value
    ]);
            const gasEstimateFunction = self.approve.estimateGasAsync.bind(self, _spender,
    _value
    );
            const txHash = await self._sendTransactionAsync(self.address, encodedData, txData, gasEstimateFunction);
            return txHash;
        },
        async estimateGasAsync(
            _spender: string,
            _value: BigNumber,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as DummyERC20TokenContract;
            const encodedData = self._strictEncodeArguments('approve(address,uint256)', [_spender,
    _value
    ]);
            const gas = await self._estimateGasAsync(self.address, encodedData, txData);
            return gas;
        },
        getABIEncodedTransactionData(
            _spender: string,
            _value: BigNumber,
        ): string {
            const self = this as any as DummyERC20TokenContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('approve(address,uint256)', [_spender,
    _value
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _spender: string,
            _value: BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<boolean
        > {
            const self = this as any as DummyERC20TokenContract;
            const encodedData = self._strictEncodeArguments('approve(address,uint256)', [_spender,
        _value
        ]);
            const rawCallResult = await self._callAsync(self.address, encodedData, callData, defaultBlock);
            const abiEncoder = self._lookupAbiEncoder('approve(address,uint256)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<boolean
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
    };
    public totalSupply = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as DummyERC20TokenContract;
            const encodedData = self._strictEncodeArguments('totalSupply()', []);
            const rawCallResult = await self._callAsync(self.address, encodedData, callData, defaultBlock);
            const abiEncoder = self._lookupAbiEncoder('totalSupply()');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<BigNumber
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
    };
    public transferFrom = {
        async sendTransactionAsync(
            _from: string,
            _to: string,
            _value: BigNumber,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as DummyERC20TokenContract;
            const encodedData = self._strictEncodeArguments('transferFrom(address,address,uint256)', [_from,
    _to,
    _value
    ]);
            const gasEstimateFunction = self.transferFrom.estimateGasAsync.bind(self, _from,
    _to,
    _value
    );
            const txHash = await self._sendTransactionAsync(self.address, encodedData, txData, gasEstimateFunction);
            return txHash;
        },
        async estimateGasAsync(
            _from: string,
            _to: string,
            _value: BigNumber,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as DummyERC20TokenContract;
            const encodedData = self._strictEncodeArguments('transferFrom(address,address,uint256)', [_from,
    _to,
    _value
    ]);
            const gas = await self._estimateGasAsync(self.address, encodedData, txData);
            return gas;
        },
        getABIEncodedTransactionData(
            _from: string,
            _to: string,
            _value: BigNumber,
        ): string {
            const self = this as any as DummyERC20TokenContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('transferFrom(address,address,uint256)', [_from,
    _to,
    _value
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _from: string,
            _to: string,
            _value: BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<boolean
        > {
            const self = this as any as DummyERC20TokenContract;
            const encodedData = self._strictEncodeArguments('transferFrom(address,address,uint256)', [_from,
        _to,
        _value
        ]);
            const rawCallResult = await self._callAsync(self.address, encodedData, callData, defaultBlock);
            const abiEncoder = self._lookupAbiEncoder('transferFrom(address,address,uint256)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<boolean
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
    };
    public decimals = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as DummyERC20TokenContract;
            const encodedData = self._strictEncodeArguments('decimals()', []);
            const rawCallResult = await self._callAsync(self.address, encodedData, callData, defaultBlock);
            const abiEncoder = self._lookupAbiEncoder('decimals()');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<BigNumber
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
    };
    public balanceOf = {
        async callAsync(
            _owner: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as DummyERC20TokenContract;
            const encodedData = self._strictEncodeArguments('balanceOf(address)', [_owner
        ]);
            const rawCallResult = await self._callAsync(self.address, encodedData, callData, defaultBlock);
            const abiEncoder = self._lookupAbiEncoder('balanceOf(address)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<BigNumber
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
            const self = this as any as DummyERC20TokenContract;
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
    public symbol = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as DummyERC20TokenContract;
            const encodedData = self._strictEncodeArguments('symbol()', []);
            const rawCallResult = await self._callAsync(self.address, encodedData, callData, defaultBlock);
            const abiEncoder = self._lookupAbiEncoder('symbol()');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<string
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
    };
    public mint = {
        async sendTransactionAsync(
            _value: BigNumber,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as DummyERC20TokenContract;
            const encodedData = self._strictEncodeArguments('mint(uint256)', [_value
    ]);
            const gasEstimateFunction = self.mint.estimateGasAsync.bind(self, _value
    );
            const txHash = await self._sendTransactionAsync(self.address, encodedData, txData, gasEstimateFunction);
            return txHash;
        },
        async estimateGasAsync(
            _value: BigNumber,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as DummyERC20TokenContract;
            const encodedData = self._strictEncodeArguments('mint(uint256)', [_value
    ]);
            const gas = await self._estimateGasAsync(self.address, encodedData, txData);
            return gas;
        },
        getABIEncodedTransactionData(
            _value: BigNumber,
        ): string {
            const self = this as any as DummyERC20TokenContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('mint(uint256)', [_value
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _value: BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as DummyERC20TokenContract;
            const encodedData = self._strictEncodeArguments('mint(uint256)', [_value
        ]);
            const rawCallResult = await self._callAsync(self.address, encodedData, callData, defaultBlock);
            const abiEncoder = self._lookupAbiEncoder('mint(uint256)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<void
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
    };
    public transfer = {
        async sendTransactionAsync(
            _to: string,
            _value: BigNumber,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as DummyERC20TokenContract;
            const encodedData = self._strictEncodeArguments('transfer(address,uint256)', [_to,
    _value
    ]);
            const gasEstimateFunction = self.transfer.estimateGasAsync.bind(self, _to,
    _value
    );
            const txHash = await self._sendTransactionAsync(self.address, encodedData, txData, gasEstimateFunction);
            return txHash;
        },
        async estimateGasAsync(
            _to: string,
            _value: BigNumber,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as DummyERC20TokenContract;
            const encodedData = self._strictEncodeArguments('transfer(address,uint256)', [_to,
    _value
    ]);
            const gas = await self._estimateGasAsync(self.address, encodedData, txData);
            return gas;
        },
        getABIEncodedTransactionData(
            _to: string,
            _value: BigNumber,
        ): string {
            const self = this as any as DummyERC20TokenContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('transfer(address,uint256)', [_to,
    _value
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _to: string,
            _value: BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<boolean
        > {
            const self = this as any as DummyERC20TokenContract;
            const encodedData = self._strictEncodeArguments('transfer(address,uint256)', [_to,
        _value
        ]);
            const rawCallResult = await self._callAsync(self.address, encodedData, callData, defaultBlock);
            const abiEncoder = self._lookupAbiEncoder('transfer(address,uint256)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<boolean
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
    };
    public allowance = {
        async callAsync(
            _owner: string,
            _spender: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as DummyERC20TokenContract;
            const encodedData = self._strictEncodeArguments('allowance(address,address)', [_owner,
        _spender
        ]);
            const rawCallResult = await self._callAsync(self.address, encodedData, callData, defaultBlock);
            const abiEncoder = self._lookupAbiEncoder('allowance(address,address)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<BigNumber
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
    };
    public setBalance = {
        async sendTransactionAsync(
            _target: string,
            _value: BigNumber,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as DummyERC20TokenContract;
            const encodedData = self._strictEncodeArguments('setBalance(address,uint256)', [_target,
    _value
    ]);
            const gasEstimateFunction = self.setBalance.estimateGasAsync.bind(self, _target,
    _value
    );
            const txHash = await self._sendTransactionAsync(self.address, encodedData, txData, gasEstimateFunction);
            return txHash;
        },
        async estimateGasAsync(
            _target: string,
            _value: BigNumber,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as DummyERC20TokenContract;
            const encodedData = self._strictEncodeArguments('setBalance(address,uint256)', [_target,
    _value
    ]);
            const gas = await self._estimateGasAsync(self.address, encodedData, txData);
            return gas;
        },
        getABIEncodedTransactionData(
            _target: string,
            _value: BigNumber,
        ): string {
            const self = this as any as DummyERC20TokenContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('setBalance(address,uint256)', [_target,
    _value
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _target: string,
            _value: BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as DummyERC20TokenContract;
            const encodedData = self._strictEncodeArguments('setBalance(address,uint256)', [_target,
        _value
        ]);
            const rawCallResult = await self._callAsync(self.address, encodedData, callData, defaultBlock);
            const abiEncoder = self._lookupAbiEncoder('setBalance(address,uint256)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<void
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
            const self = this as any as DummyERC20TokenContract;
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
            const self = this as any as DummyERC20TokenContract;
            const encodedData = self._strictEncodeArguments('transferOwnership(address)', [newOwner
    ]);
            const gas = await self._estimateGasAsync(self.address, encodedData, txData);
            return gas;
        },
        getABIEncodedTransactionData(
            newOwner: string,
        ): string {
            const self = this as any as DummyERC20TokenContract;
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
            const self = this as any as DummyERC20TokenContract;
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
    public MAX_MINT_AMOUNT = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as DummyERC20TokenContract;
            const encodedData = self._strictEncodeArguments('MAX_MINT_AMOUNT()', []);
            const rawCallResult = await self._callAsync(self.address, encodedData, callData, defaultBlock);
            const abiEncoder = self._lookupAbiEncoder('MAX_MINT_AMOUNT()');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<BigNumber
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
    };
    public static async deployFrom0xArtifactAsync(
        artifact: ContractArtifact | SimpleContractArtifact,
        supportedProvider: SupportedProvider,
        txDefaults: Partial<TxData>,
            _name: string,
            _symbol: string,
            _decimals: BigNumber,
            _totalSupply: BigNumber,
    ): Promise<DummyERC20TokenContract> {
        if (isUndefined(artifact.compilerOutput)) {
            throw new Error('Compiler output not found in the artifact file');
        }
        const provider = providerUtils.standardizeOrThrow(supportedProvider);
        const bytecode = artifact.compilerOutput.evm.bytecode.object;
        const abi = artifact.compilerOutput.abi;
        return DummyERC20TokenContract.deployAsync(bytecode, abi, provider, txDefaults, _name,
_symbol,
_decimals,
_totalSupply
);
    }
    public static async deployAsync(
        bytecode: string,
        abi: ContractAbi,
        supportedProvider: SupportedProvider,
        txDefaults: Partial<TxData>,
            _name: string,
            _symbol: string,
            _decimals: BigNumber,
            _totalSupply: BigNumber,
    ): Promise<DummyERC20TokenContract> {
        const provider = providerUtils.standardizeOrThrow(supportedProvider);
        const constructorAbi = BaseContract._lookupConstructorAbi(abi);
        [_name,
_symbol,
_decimals,
_totalSupply
] = BaseContract._formatABIDataItemList(
            constructorAbi.inputs,
            [_name,
_symbol,
_decimals,
_totalSupply
],
            BaseContract._bigNumberToString,
        );
        const encoder = new AbiEncoder.Constructor(constructorAbi);
        const txData = encoder.encode(bytecode, [_name,
_symbol,
_decimals,
_totalSupply
]);
        const web3Wrapper = new Web3Wrapper(provider);
        const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {data: txData},
            txDefaults,
            web3Wrapper.estimateGasAsync.bind(web3Wrapper),
        );
        const txHash = await web3Wrapper.sendTransactionAsync(txDataWithDefaults);
        logUtils.log(`transactionHash: ${txHash}`);
        const txReceipt = await web3Wrapper.awaitTransactionSuccessAsync(txHash);
        logUtils.log(`DummyERC20Token successfully deployed at ${txReceipt.contractAddress}`);
        const contractInstance = new DummyERC20TokenContract(abi, txReceipt.contractAddress as string, provider, txDefaults);
        contractInstance.constructorArgs = [_name,
_symbol,
_decimals,
_totalSupply
];
        return contractInstance;
    }
    constructor(abi: ContractAbi, address: string, supportedProvider: SupportedProvider, txDefaults?: Partial<TxData>) {
        super('DummyERC20Token', abi, address, supportedProvider, txDefaults);
        classUtils.bindAll(this, ['_abiEncoderByFunctionSignature', 'address', 'abi', '_web3Wrapper']);
    }
} // tslint:disable:max-file-line-count
// tslint:enable:no-unbound-method
