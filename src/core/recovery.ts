import { ethers } from 'ethers';
import { Wallet } from '../types';

export class WalletRecovery {
  /**
   * 通过私钥恢复钱包
   */
  static async recoverFromPrivateKey(privateKey: string): Promise<Wallet> {
    const wallet = new ethers.Wallet(privateKey);
    return {
      address: wallet.address,
      privateKey: wallet.privateKey,
      mnemonic: '',
    };
  }

  /**
   * 通过助记词恢复钱包
   */
  static async recoverFromMnemonic(mnemonic: string): Promise<Wallet> {
    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    return {
      address: wallet.address,
      privateKey: wallet.privateKey,
      mnemonic: mnemonic,
    };
  }
} 