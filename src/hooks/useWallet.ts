import { useState, useCallback } from 'react';
import { WalletManager } from '../core/wallet';
import { Wallet } from '../types';

export function useWallet() {
  const [wallet, setWallet] = useState<Wallet | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createWallet = useCallback(async () => {
    try {
      setLoading(true);
      const newWallet = await WalletManager.createRandomWallet();
      setWallet(newWallet);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : '创建钱包失败');
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    wallet,
    loading,
    error,
    createWallet
  };
} 
