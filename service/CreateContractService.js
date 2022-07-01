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
  "app" : "app",
  "datasetprice" : 2,
  "appprice" : 5,
  "Category" : 1,
  "requesterInfo" : "requesterInfo",
  "Block Number" : 6,
  "dealID" : "dealID",
  "TxHash" : "TxHash",
  "Block Timestamp" : "Block Timestamp",
  "Start Time" : "Start Time",
  "workerpoolprice" : [ 5, 5 ],
  "Final Time" : "Final Time",
  "environmentParameters" : {
    "req2" : "req2",
    "req1" : "req1"
  },
  "volume" : 0,
  "Callback" : "Callback",
  "maestroAgentID" : "maestroAgentID",
  "tee" : true,
  "First task idx" : "First task idx",
  "gpu-availability" : true,
  "dataset" : "dataset",
  "workerpool" : [ "workerpool", "workerpool" ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * request for creation of the contract
 *
 * body CreateContract request for initiation of the deal
 * returns responseForContractCreation
 **/
exports.placeOrder = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "requesterInfo" : "requesterInfo",
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

