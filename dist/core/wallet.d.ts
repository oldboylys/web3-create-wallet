import { Wallet } from '../types';
export declare class WalletManager {
    /**
     * 创建随机钱包
     */
    static createRandomWallet(): Promise<Wallet>;
}
