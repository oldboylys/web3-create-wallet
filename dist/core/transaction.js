"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionManager = void 0;
const ethers_1 = require("ethers");
class TransactionManager {
    constructor(providerUrl) {
        this.provider = new ethers_1.ethers.JsonRpcProvider(providerUrl);
    }
    async sendTransaction(request) {
        const wallet = new ethers_1.ethers.Wallet(request.privateKey, this.provider);
        const tx = await wallet.sendTransaction({
            to: request.to,
            value: ethers_1.ethers.parseEther(request.value.toString()),
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
exports.TransactionManager = TransactionManager;
