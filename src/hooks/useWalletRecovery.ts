import { useState, useCallback } from 'react';
import { WalletRecovery } from '../core/recovery';
import { Wallet } from '../types';

export function useWalletRecovery() {
  const [wallet, setWallet] = useState<Wallet | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const recoverFromPrivateKey = useCallback(async (privateKey: string) => {
    try {
      setLoading(true);
      const recoveredWallet = await WalletRecovery.recoverFromPrivateKey(privateKey);
      setWallet(recoveredWallet);
      setError(null);
      return recoveredWallet;
    } catch (err) {
      setError(err instanceof Error ? err.message : '通过私钥恢复钱包失败');
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const recoverFromMnemonic = useCallback(async (mnemonic: string) => {
    try {
      setLoading(true);
      const recoveredWallet = await WalletRecovery.recoverFromMnemonic(mnemonic);
      setWallet(recoveredWallet);
      setError(null);
      return recoveredWallet;
    } catch (err) {
      setError(err instanceof Error ? err.message : '通过助记词恢复钱包失败');
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    wallet,
    loading,
    error,
    recoverFromPrivateKey,
    recoverFromMnemonic
  };
} 