import { useState, useCallback } from 'react';
import { TransactionManager } from '../core/transaction';
import { TransactionRequest, TransactionResponse } from '../types';

export function useTransaction(providerUrl: string) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [txResponse, setTxResponse] = useState<TransactionResponse | null>(null);

  const transactionManager = new TransactionManager(providerUrl);

  const sendTransaction = useCallback(async (request: TransactionRequest) => {
    try {
      setLoading(true);
      const response = await transactionManager.sendTransaction(request);
      setTxResponse(response);
      setError(null);
      return response;
    } catch (err) {
      setError(err instanceof Error ? err.message : '交易失败');
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    loading,
    error,
    txResponse,
    sendTransaction
  };
} 