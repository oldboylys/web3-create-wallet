import { TransactionRequest, TransactionResponse } from '../types';
export declare function useTransaction(providerUrl: string): {
    loading: boolean;
    error: string | null;
    txResponse: TransactionResponse | null;
    sendTransaction: (request: TransactionRequest) => Promise<TransactionResponse>;
};
