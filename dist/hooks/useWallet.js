"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useWallet = useWallet;
const react_1 = require("react");
const wallet_1 = require("../core/wallet");
function useWallet() {
    const [wallet, setWallet] = (0, react_1.useState)(null);
    const [loading, setLoading] = (0, react_1.useState)(false);
    const [error, setError] = (0, react_1.useState)(null);
    const createWallet = (0, react_1.useCallback)(async () => {
        try {
            setLoading(true);
            const newWallet = await wallet_1.WalletManager.createRandomWallet();
            setWallet(newWallet);
            setError(null);
        }
        catch (err) {
            setError(err instanceof Error ? err.message : '创建钱包失败');
        }
        finally {
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
