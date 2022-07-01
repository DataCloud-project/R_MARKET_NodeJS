'use strict';

var utils = require('../utils/writer.js');
var WalletCreation = require('../service/WalletCreationService');

module.exports.createWallet = function createWallet (req, res, next, body) {
  WalletCreation.createWallet(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
