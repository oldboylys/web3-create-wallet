# web3-create-wallet

一个完整的 Web3 钱包管理工具包，提供钱包创建、交易处理和恢复功能。

## 安装
- npm install web3-create-wallet

## 功能特点

- 创建随机钱包
- 交易管理
- 通过私钥或助记词恢复钱包
- React Hooks 支持

## 使用方法
- import { WalletManager } from 'web3-create-wallet';
- const wallet = await WalletManager.createRandomWallet();
- console.log(wallet.address);
### 创建钱包
- import { useWallet } from 'web3-create-wallet';
- function App() {
- const { wallet, loading, error, createWallet } = useWallet();
- return (
- <button onClick={createWallet}>
- 创建钱包
- </button>
- );
- }
## API 文档
- useWallet
- useTransaction
- useWalletRecovery
...

## License

MIT
MIT License

Copyright (c) [year] [fullname]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

...