'use strict';

var utils = require('../utils/writer.js');
var CreateContract = require('../service/CreateContractService');

module.exports.getInventory = function getInventory (req, res, next, requestID) {
  CreateContract.getInventory(requestID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.placeOrder = function placeOrder (req, res, next, body) {
  CreateContract.placeOrder(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
