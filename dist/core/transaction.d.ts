import { TransactionRequest, TransactionResponse } from '../types';
export declare class TransactionManager {
    private provider;
    constructor(providerUrl: string);
    sendTransaction(request: TransactionRequest): Promise<TransactionResponse>;
}
