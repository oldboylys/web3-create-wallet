import { WalletManager } from '../core/wallet';
import { WalletRecovery } from '../core/recovery';
import { TransactionManager } from '../core/transaction';

describe('Web3 Wallet Tests', () => {
  describe('WalletManager', () => {
    it('should create a random wallet', async () => {
      const wallet = await WalletManager.createRandomWallet();
      console.log(wallet)
      
      expect(wallet.address).toBeTruthy();
      expect(wallet.privateKey).toBeTruthy();
      expect(wallet.mnemonic).toBeTruthy();
    });
  });

  describe('WalletRecovery', () => {
    it('should recover wallet from private key', async () => {
      // 首先创建一个钱包获取私钥
      const originalWallet = await WalletManager.createRandomWallet();
      const recoveredWallet = await WalletRecovery.recoverFromPrivateKey(originalWallet.privateKey);
      
      expect(recoveredWallet.address).toBe(originalWallet.address);
      expect(recoveredWallet.privateKey).toBe(originalWallet.privateKey);
    });

    it('should recover wallet from mnemonic', async () => {
      const originalWallet = await WalletManager.createRandomWallet();
      if (!originalWallet.mnemonic) throw new Error('No mnemonic generated');
      
      const recoveredWallet = await WalletRecovery.recoverFromMnemonic(originalWallet.mnemonic);
      
      expect(recoveredWallet.address).toBe(originalWallet.address);
      expect(recoveredWallet.privateKey).toBe(originalWallet.privateKey);
    });
  });

  describe('TransactionManager', () => {
    it('should create transaction manager instance', () => {
      const providerUrl = 'https://mainnet.infura.io/v3/YOUR-PROJECT-ID';
      const txManager = new TransactionManager(providerUrl);
      expect(txManager).toBeTruthy();
    });

    // 注意：实际的交易测试需要在测试网络上进行
    // 这里只是示例，实际使用时需要配置测试网络和测试账户
  });
}); 