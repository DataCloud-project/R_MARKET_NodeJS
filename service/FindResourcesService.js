'use strict';


/**
 * Find resources by DSL
 * Muliple tags can be provided with comma separated strings. Use         tag1, tag2, tag3 for testing.
 *
 * body ResourceDSL Tags to filter by DSL model
 * returns List
 **/
exports.findResourcesByDSL = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "workerpoolsdetail" : [ {
    "workerpoolAddress" : "workerpoolAddress",
    "price" : "price"
  }, {
    "workerpoolAddress" : "workerpoolAddress",
    "price" : "price"
  } ]
}, {
  "workerpoolsdetail" : [ {
    "workerpoolAddress" : "workerpoolAddress",
    "price" : "price"
  }, {
    "workerpoolAddress" : "workerpoolAddress",
    "price" : "price"
  } ]
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

