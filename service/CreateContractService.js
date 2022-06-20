'use strict';


/**
 * Returns the dealID and dealInfo for checking the status
 * Returns a map of status codes to quantities
 *
 * requestID String Please enter your requestID to know the status of the deal
 * returns Deal
 **/
exports.getInventory = function(requestID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "App" : "App",
  "Category" : 1,
  "Block Number" : 6,
  "dealID" : "dealID",
  "TxHash" : "TxHash",
  "Block Timestamp" : "Block Timestamp",
  "Dataset" : "Dataset",
  "workerpool cost" : "workerpool cost",
  "Params" : {
    "req2" : "req2",
    "req1" : "req1"
  },
  "Workerpool" : "Workerpool",
  "Start Time" : "Start Time",
  "Trust" : 5,
  "Final Time" : "Final Time",
  "app cost" : "app cost",
  "Requester" : "Requester",
  "Callback" : "Callback",
  "dataset cost" : "dataset cost",
  "Volume" : 0,
  "First task idx" : "First task idx",
  "Tag" : "Tag",
  "Beneficiary" : "Beneficiary"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * request for creation the contract
 *
 * body CreateContract request for initiation of the deal
 * returns responseForContractCreation
 **/
exports.placeOrder = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Requester" : "Requester",
  "requestID" : "requestID",
  "status" : "status"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

