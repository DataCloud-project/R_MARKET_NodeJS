var express = require("express"),
  bodyParser = require("body-parser"),
  swaggerJsdoc = require("swagger-jsdoc"),
  swaggerUi = require("swagger-ui-express");

  const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "R-MARKET API",
        version: "1.0.0",
        description:
          "Entry point of the R-MARKET tool",
        license: {
          name: "Apache 2.0",
          url: "http://www.apache.org/licenses/LICENSE-2.0.html",
        },
        contact: {
          name: "iExec BlockchainTech",
          url: "https://iex.ec/",
          email: "support@iex.ec",
        },
      },
      servers: [
        {
          url: "https://datacloud-r-market.westeurope.cloudapp.azure.com:5000/",
        },
      ],
    },
    apis: ["./routes/*.js"],
  };
  const swaggerSpec = swaggerJsdoc(options)

function swaggerDocs(app, port) {
  // Swagger Page
  app.use('/datacloud/R-MARKET', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

  // Documentation in JSON format
  app.get('/docs.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    res.send(swaggerSpec)
  })
}

module.exports =  swaggerDocs;
