import { ethers } from 'ethers';
import { TransactionRequest, TransactionResponse } from '../types';

export class TransactionManager {
  private provider: ethers.Provider;
  
  constructor(providerUrl: string) {
    this.provider = new ethers.JsonRpcProvider(providerUrl);
  }

  async sendTransaction(request: TransactionRequest): Promise<TransactionResponse> {
    const wallet = new ethers.Wallet(request.privateKey, this.provider);
    const tx = await wallet.sendTransaction({
      to: request.to,
      value: ethers.parseEther(request.value.toString()),
      data: request.data || '0x'
    });
    
    return {
      hash: tx.hash,
      from: tx.from,
      to: tx.to || '',
      value: tx.value.toString()
    };
  }
} 