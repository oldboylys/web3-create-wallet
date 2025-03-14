export interface Wallet {
  address: string;
  privateKey: string;
  mnemonic: string;
  // publicKey: string;
}

export interface TransactionRequest {
  to: string;
  value: number;
  privateKey: string;
  data?: string;
}

export interface TransactionResponse {
  hash: string;
  from: string;
  to: string;
  value: string;
} 