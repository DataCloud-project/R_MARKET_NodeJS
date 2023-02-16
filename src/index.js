const express = require ('express');
const routes = require('./routes/route');
const swaggerDocs = require('./swagger.js');
const cors = require('cors');
// const swaggerUi = require('swagger-ui-express'),
// swaggerDocument = require('./swagger.json');

//var corsOptions = {
//	origin: '*'
//};
const port = 5000;
const app = express();
app.use(cors(
//	corsOptions
));
// const keycloak = require('./configs/keycloak-config.js').initKeycloak();
// app.use(keycloak.middleware());

//app.use(function (req,res,next) {
//res.header("Access-Control-Allow-Origin", "*");
//res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//next();
//});

app.use(express.json());
app.use('/', routes);
//app.listen(5000);

var fs = require('fs');
var https = require('https');
var privateKey  = fs.readFileSync('privkey.pem');
var certificate = fs.readFileSync('certificate.pem');

var credentials = {key: privateKey, cert: certificate};

// your express configuration here

var httpsServer = https.createServer(credentials, app);

httpsServer.listen(port, () => {
    console.log(`Example app listening at http://127.0.0.1:${port}`)
    swaggerDocs(app, port)
  })
// app.use(
//     '/data-cloud',
//     swaggerUi.serve, 
//     swaggerUi.setup(swaggerDocument)
//   );

  

// const main= async ()=>{
//     let data = await dbConnect();
//     data = await data.find().toArray();
//     console.log(data)
// }

// main()
