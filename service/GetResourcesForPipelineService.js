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
    "workerpool" : "workerpool",
    "workerIP" : "workerIP"
  }, {
    "workerpool" : "workerpool",
    "workerIP" : "workerIP"
  } ],
  "pipelineID" : "pipelineID"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

