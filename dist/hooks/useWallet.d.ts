import { Wallet } from '../types';
export declare function useWallet(): {
    wallet: Wallet | null;
    loading: boolean;
    error: string | null;
    createWallet: () => Promise<void>;
};
