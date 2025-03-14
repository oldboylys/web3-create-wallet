import { ethers } from 'ethers';
import { Wallet } from '../types';

export class WalletManager {
  /**
   * 创建随机钱包
   */
  static async createRandomWallet(): Promise<Wallet> {
    const wallet = ethers.Wallet.createRandom();
    return {
      address: wallet.address,
      privateKey: wallet.privateKey,
      mnemonic: wallet.mnemonic?.phrase || '',
    };
  }
} 