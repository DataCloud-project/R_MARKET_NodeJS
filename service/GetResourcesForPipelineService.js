'use strict';


/**
 * Returns the IP of provisioned resource
 * Returns a map of status codes to quantities
 *
 * dealID String Provide the dealID for collecting the Reserved resources' IP
 * returns responseforGetResource
 **/
exports.getResourcesForPipeline = function(dealID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "dealID" : "dealID",
  "workerpoolInfo" : [ {
    "workerpoolAddress" : "workerpoolAddress",
    "price" : "price"
  }, {
    "workerpoolAddress" : "workerpoolAddress",
    "price" : "price"
  } ],
  "IPAddress" : [ "IPAddress", "IPAddress" ],
  "pipelineID" : "pipelineID"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

