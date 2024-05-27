const swaggerJSDoc = require('swagger-jsdoc');
const authSwagger = require("../swaggers/auth")
const package = require("../package.json")

const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: package.name,
        version: package.version,
        description: package.description,
      },
      servers: [
        {
          url: process.env.URL,
          description: process.env.EVIENVIRONMENT,
        },
      ],
      tags: ["Auth"],
      paths: {
        ...authSwagger,
      },
    },
    apis: ["./routes/*.js"],
  };
  
  module.exports = swaggerJSDoc(options);