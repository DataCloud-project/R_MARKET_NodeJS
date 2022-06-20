'use strict';

var utils = require('../utils/writer.js');
var GetResourcesForPipeline = require('../service/GetResourcesForPipelineService');

module.exports.getResourcesForPipeline = function getResourcesForPipeline (req, res, next, dealID) {
  GetResourcesForPipeline.getResourcesForPipeline(dealID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
