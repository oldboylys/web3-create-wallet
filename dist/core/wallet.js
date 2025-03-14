"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletManager = void 0;
const ethers_1 = require("ethers");
class WalletManager {
    /**
     * 创建随机钱包
     */
    static async createRandomWallet() {
        var _a;
        const wallet = ethers_1.ethers.Wallet.createRandom();
        return {
            address: wallet.address,
            privateKey: wallet.privateKey,
            mnemonic: ((_a = wallet.mnemonic) === null || _a === void 0 ? void 0 : _a.phrase) || '',
        };
    }
}
exports.WalletManager = WalletManager;
