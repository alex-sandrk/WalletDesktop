"use strict";

const restart = require("../electron-restart");
const dbManager = require("../database");
const logger = require("../../../logger");
const storage = require("../storage");
const auth = require("../auth");
const wallet = require("../wallet");
const { setProxyRouterConfig, getProxyRouterConfig } = require("../settings");

const validatePassword = (data) => auth.isValidPassword(data);

function clearCache() {
  logger.verbose("Clearing database cache");
  return dbManager
    .getDb()
    .dropDatabase()
    .then(restart);
}

const persistState = (data) => storage.persistState(data).then(() => true);

function changePassword({ oldPassword, newPassword }) {
  return validatePassword(oldPassword).then(function(isValid) {
    if (!isValid) {
      return isValid;
    }
    return auth.setPassword(newPassword).then(function() {
      const seed = wallet.getSeed(oldPassword);
      wallet.setSeed(seed, newPassword);

      return true;
    });
  });
}

const saveProxyRouterSettings = (data) =>
  Promise.resolve(setProxyRouterConfig(data));

const getProxyRouterSettings = async () => {
  return getProxyRouterConfig();
};

const handleClientSideError = (data) => {
  logger.error(data.message, data.stack);
}

module.exports = {
  validatePassword,
  changePassword,
  persistState,
  clearCache,
  saveProxyRouterSettings,
  getProxyRouterSettings,
  handleClientSideError
};
