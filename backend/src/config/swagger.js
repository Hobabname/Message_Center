const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Message Center API',
      version: '1.0.0',
      description: 'API Documentation for Message Center Backend'
    },
    servers: [
      {
        url: 'http://localhost:3000/api',
        description: 'Local server'
      }
    ]
  },
  //apis: ['./src/routes/*.js']
  apis: ['./src/routes/**/*.js']

};

module.exports = swaggerJsdoc(options);
