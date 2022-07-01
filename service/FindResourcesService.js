'use strict';


/**
 * Find resources by DSL
 * Muliple tags can be provided with comma separated strings. Use         tag1, tag2, tag3 for testing.
 *
 * body PipelineRequirements Tags to filter by DSL model
 * returns List
 **/
exports.findResourcesByDSL = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "apporder" : {
    "app" : "app",
    "volume" : 0,
    "appprice" : "appprice",
    "datasetrestrict" : "datasetrestrict",
    "workerpoolrestrict" : "workerpoolrestrict",
    "requesterrestrict" : "requesterrestrict",
    "tag" : "tag"
  },
  "workerpoolsorder" : [ {
    "datasetrestrict" : "datasetrestrict",
    "arch-type" : [ {
      "cpu-architecture" : "cpu-architecture",
      "gpu-architecture" : "gpu-architecture"
    }, {
      "cpu-architecture" : "cpu-architecture",
      "gpu-architecture" : "gpu-architecture"
    } ],
    "requesterrestrict" : "requesterrestrict",
    "tee" : true,
    "OSdetails" : [ {
      "os-type" : "os-type",
      "is-64" : 5
    }, {
      "os-type" : "os-type",
      "is-64" : 5
    } ],
    "apprestrict" : "apprestrict",
    "noofInstances" : 1,
    "gpu-availability" : true,
    "workerpoolprice" : "workerpoolprice",
    "quantativeParameters" : {
      "min-ncpu" : 5,
      "min-cores" : 4,
      "max-storage-mb" : 2,
      "max-ram-mb" : 9,
      "max-cores" : 7,
      "max-ncpu" : 2,
      "min-storage-mb" : 3,
      "min-ram-mb" : 7
    },
    "workerpool" : "workerpool"
  }, {
    "datasetrestrict" : "datasetrestrict",
    "arch-type" : [ {
      "cpu-architecture" : "cpu-architecture",
      "gpu-architecture" : "gpu-architecture"
    }, {
      "cpu-architecture" : "cpu-architecture",
      "gpu-architecture" : "gpu-architecture"
    } ],
    "requesterrestrict" : "requesterrestrict",
    "tee" : true,
    "OSdetails" : [ {
      "os-type" : "os-type",
      "is-64" : 5
    }, {
      "os-type" : "os-type",
      "is-64" : 5
    } ],
    "apprestrict" : "apprestrict",
    "noofInstances" : 1,
    "gpu-availability" : true,
    "workerpoolprice" : "workerpoolprice",
    "quantativeParameters" : {
      "min-ncpu" : 5,
      "min-cores" : 4,
      "max-storage-mb" : 2,
      "max-ram-mb" : 9,
      "max-cores" : 7,
      "max-ncpu" : 2,
      "min-storage-mb" : 3,
      "min-ram-mb" : 7
    },
    "workerpool" : "workerpool"
  } ],
  "datasetorder" : {
    "volume" : 6,
    "datasetprice" : "datasetprice",
    "datasetrestrict" : "datasetrestrict",
    "workerpoolrestrict" : "workerpoolrestrict",
    "requesterrestrict" : "requesterrestrict",
    "tag" : "tag",
    "dataset" : "dataset"
  }
}, {
  "apporder" : {
    "app" : "app",
    "volume" : 0,
    "appprice" : "appprice",
    "datasetrestrict" : "datasetrestrict",
    "workerpoolrestrict" : "workerpoolrestrict",
    "requesterrestrict" : "requesterrestrict",
    "tag" : "tag"
  },
  "workerpoolsorder" : [ {
    "datasetrestrict" : "datasetrestrict",
    "arch-type" : [ {
      "cpu-architecture" : "cpu-architecture",
      "gpu-architecture" : "gpu-architecture"
    }, {
      "cpu-architecture" : "cpu-architecture",
      "gpu-architecture" : "gpu-architecture"
    } ],
    "requesterrestrict" : "requesterrestrict",
    "tee" : true,
    "OSdetails" : [ {
      "os-type" : "os-type",
      "is-64" : 5
    }, {
      "os-type" : "os-type",
      "is-64" : 5
    } ],
    "apprestrict" : "apprestrict",
    "noofInstances" : 1,
    "gpu-availability" : true,
    "workerpoolprice" : "workerpoolprice",
    "quantativeParameters" : {
      "min-ncpu" : 5,
      "min-cores" : 4,
      "max-storage-mb" : 2,
      "max-ram-mb" : 9,
      "max-cores" : 7,
      "max-ncpu" : 2,
      "min-storage-mb" : 3,
      "min-ram-mb" : 7
    },
    "workerpool" : "workerpool"
  }, {
    "datasetrestrict" : "datasetrestrict",
    "arch-type" : [ {
      "cpu-architecture" : "cpu-architecture",
      "gpu-architecture" : "gpu-architecture"
    }, {
      "cpu-architecture" : "cpu-architecture",
      "gpu-architecture" : "gpu-architecture"
    } ],
    "requesterrestrict" : "requesterrestrict",
    "tee" : true,
    "OSdetails" : [ {
      "os-type" : "os-type",
      "is-64" : 5
    }, {
      "os-type" : "os-type",
      "is-64" : 5
    } ],
    "apprestrict" : "apprestrict",
    "noofInstances" : 1,
    "gpu-availability" : true,
    "workerpoolprice" : "workerpoolprice",
    "quantativeParameters" : {
      "min-ncpu" : 5,
      "min-cores" : 4,
      "max-storage-mb" : 2,
      "max-ram-mb" : 9,
      "max-cores" : 7,
      "max-ncpu" : 2,
      "min-storage-mb" : 3,
      "min-ram-mb" : 7
    },
    "workerpool" : "workerpool"
  } ],
  "datasetorder" : {
    "volume" : 6,
    "datasetprice" : "datasetprice",
    "datasetrestrict" : "datasetrestrict",
    "workerpoolrestrict" : "workerpoolrestrict",
    "requesterrestrict" : "requesterrestrict",
    "tag" : "tag",
    "dataset" : "dataset"
  }
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

