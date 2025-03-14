"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTransaction = useTransaction;
const react_1 = require("react");
const transaction_1 = require("../core/transaction");
function useTransaction(providerUrl) {
    const [loading, setLoading] = (0, react_1.useState)(false);
    const [error, setError] = (0, react_1.useState)(null);
    const [txResponse, setTxResponse] = (0, react_1.useState)(null);
    const transactionManager = new transaction_1.TransactionManager(providerUrl);
    const sendTransaction = (0, react_1.useCallback)(async (request) => {
        try {
            setLoading(true);
            const response = await transactionManager.sendTransaction(request);
            setTxResponse(response);
            setError(null);
            return response;
        }
        catch (err) {
            setError(err instanceof Error ? err.message : '交易失败');
            throw err;
        }
        finally {
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
