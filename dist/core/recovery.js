"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletRecovery = void 0;
const ethers_1 = require("ethers");
class WalletRecovery {
    /**
     * 通过私钥恢复钱包
     */
    static async recoverFromPrivateKey(privateKey) {
        const wallet = new ethers_1.ethers.Wallet(privateKey);
        return {
            address: wallet.address,
            privateKey: wallet.privateKey,
            mnemonic: '',
        };
    }
    /**
     * 通过助记词恢复钱包
     */
    static async recoverFromMnemonic(mnemonic) {
        const wallet = ethers_1.ethers.Wallet.fromPhrase(mnemonic);
        return {
            address: wallet.address,
            privateKey: wallet.privateKey,
            mnemonic: mnemonic,
        };
    }
}
exports.WalletRecovery = WalletRecovery;
