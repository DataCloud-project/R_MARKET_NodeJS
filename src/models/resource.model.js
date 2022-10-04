module.exports = {
  pipelineID: String,
  requirements: {
    appmaxprice: Number,
    app: String,
    datase: String,
    datasetmaxpric: Number,
    workerpoolmaxprice: Number,
    executionRequirements: {
      mininstant: Number,
      maxinstant: Number
    },
    quantativeParameters: {
      minncpu: Number,
      maxncpu: Number,
      minrammb: Number,
      maxrammb: Number,
      minstoragemb: Number,
      maxstoragemb: Number,
      mincores: Number,
      maxcores: Number
    },
    ResourceProvider: {
      providername: String,
      instancetype: String,
      location: String
    },
    osRequirement: {
      ostype: String,
      is64: Number
    },
    cpuarchitecture: String,
    gpuarchitecture: String,
    gpuavailability: true,
    tee: true,
    maestroAgentID: String,
    environmentParameters: {
      req1: String,
      req2: String
    },
    requesterInfo: String
}
}