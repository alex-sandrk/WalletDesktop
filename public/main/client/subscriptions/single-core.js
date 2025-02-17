const handlers = require("../handlers");
const utils = require("./utils");

const withCore = (core) => (fn) => (data) => fn(data, core);

const listeners = {
  "recover-from-mnemonic": handlers.recoverFromMnemonic,
  "onboarding-completed": handlers.onboardingCompleted,
  "login-submit": handlers.onLoginSubmit,
  // 'refresh-all-sockets': handlers.refreshAllSockets,
  "refresh-all-contracts": handlers.refreshAllContracts,
  "refresh-all-transactions": handlers.refreshAllTransactions,
  "refresh-transaction": handlers.refreshTransaction,
  "get-gas-limit": handlers.getGasLimit,
  "get-gas-price": handlers.getGasPrice,
  "get-past-transactions": handlers.getPastTransactions,
  "send-lmr": handlers.sendLmr,
  "send-eth": handlers.sendEth,
  "create-contract": handlers.createContract,
  "purchase-contract": handlers.purchaseContract,
  "edit-contract": handlers.editContract,
  "cancel-contract": handlers.cancelContract,
  "set-delete-contract-status": handlers.setContractDeleteStatus,
  "start-discovery": handlers.startDiscovery,
  "stop-discovery": handlers.stopDiscovery,
  "set-miner-pool": handlers.setMinerPool,
  "get-lmr-transfer-gas-limit": handlers.getLmrTransferGasLimit,
  "get-local-ip": handlers.getLocalIp,
  "restart-proxy-router": handlers.restartProxyRouter,
  "claim-faucet": handlers.claimFaucet,
  'get-private-key': handlers.getAddressAndPrivateKey
};

let coreListeners = {};

// Subscribe to messages where only one particular core has to react
function subscribeSingleCore(core) {
  coreListeners[core.chain] = {};
  Object.keys(listeners).forEach(function(key) {
    coreListeners[core.chain][key] = withCore(core)(listeners[key]);
  });

  utils.subscribeTo(coreListeners[core.chain], core.chain);
}

const unsubscribeSingleCore = (core) =>
  utils.unsubscribeTo(coreListeners[core.chain]);

module.exports = { subscribeSingleCore, unsubscribeSingleCore };
