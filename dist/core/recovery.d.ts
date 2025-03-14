import { Wallet } from '../types';
export declare class WalletRecovery {
    /**
     * 通过私钥恢复钱包
     */
    static recoverFromPrivateKey(privateKey: string): Promise<Wallet>;
    /**
     * 通过助记词恢复钱包
     */
    static recoverFromMnemonic(mnemonic: string): Promise<Wallet>;
}
