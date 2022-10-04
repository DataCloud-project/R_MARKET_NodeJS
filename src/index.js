const dbConnect= require('./collections/contracts');
const express = require ('express');
const routes = require('./routes/route');
const swaggerDocs = require('./swagger.js');
// const swaggerUi = require('swagger-ui-express'),
// swaggerDocument = require('./swagger.json');

dbConnect().then((resp)=> {
    resp.find().toArray().then((data)=>{
        console.log('Database connected!')
    })
})
const port = 5000;
const app = express();
app.use(express.json());
app.use('/', routes);
//app.listen(5000);
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
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