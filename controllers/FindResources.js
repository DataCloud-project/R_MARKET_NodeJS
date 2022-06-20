'use strict';

var utils = require('../utils/writer.js');
var FindResources = require('../service/FindResourcesService');

module.exports.findResourcesByDSL = function findResourcesByDSL (req, res, next, body) {
  FindResources.findResourcesByDSL(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
