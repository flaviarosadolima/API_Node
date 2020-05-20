const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

//carregando Rota
const productRoute = require('./routes/product-route');

const swaggerOptions = {
    swaggerDefinition: {
      info: {
        title: "Api de Filmes",
        description: "Documentação da API de Filmes",
        contact: {
          name: "Flávia Rosado",
        },
        servers: ["http://localhost:3000"],
      },
    },
    // ['.routes/*.js']
    apis: ["src/controllers/*.js"],
  };
  
  const swaggerDocs = swaggerJsDoc(swaggerOptions);
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


app.use(express.json);
app.use('/products', productRoute);

//último passo para exportação
module.exports = app;