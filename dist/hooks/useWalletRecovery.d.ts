import { Wallet } from '../types';
export declare function useWalletRecovery(): {
    wallet: Wallet | null;
    loading: boolean;
    error: string | null;
    recoverFromPrivateKey: (privateKey: string) => Promise<Wallet>;
    recoverFromMnemonic: (mnemonic: string) => Promise<Wallet>;
};
