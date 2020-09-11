const express = require('express');
import routes from "./routes";
const sequelize = require('sequelize');
const app = express();
app.use(routes);


const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require("./swagger.json");

const port = process.env.port || 2000;

// Extended: https://swagger.io.specification/#infoObject

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.listen(port, () =>{
    console.log('Server listening on port');
});