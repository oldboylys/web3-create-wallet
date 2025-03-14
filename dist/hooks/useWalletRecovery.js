"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useWalletRecovery = useWalletRecovery;
const react_1 = require("react");
const recovery_1 = require("../core/recovery");
function useWalletRecovery() {
    const [wallet, setWallet] = (0, react_1.useState)(null);
    const [loading, setLoading] = (0, react_1.useState)(false);
    const [error, setError] = (0, react_1.useState)(null);
    const recoverFromPrivateKey = (0, react_1.useCallback)(async (privateKey) => {
        try {
            setLoading(true);
            const recoveredWallet = await recovery_1.WalletRecovery.recoverFromPrivateKey(privateKey);
            setWallet(recoveredWallet);
            setError(null);
            return recoveredWallet;
        }
        catch (err) {
            setError(err instanceof Error ? err.message : '通过私钥恢复钱包失败');
            throw err;
        }
        finally {
            setLoading(false);
        }
    }, []);
    const recoverFromMnemonic = (0, react_1.useCallback)(async (mnemonic) => {
        try {
            setLoading(true);
            const recoveredWallet = await recovery_1.WalletRecovery.recoverFromMnemonic(mnemonic);
            setWallet(recoveredWallet);
            setError(null);
            return recoveredWallet;
        }
        catch (err) {
            setError(err instanceof Error ? err.message : '通过助记词恢复钱包失败');
            throw err;
        }
        finally {
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
