const authRoute = require("./auth")
const generalRoute = require("./general")
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require("../configs/swagger")

const routes = (app) => {
    app.use("/auth", authRoute)
    app.use('/documentations', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
    app.use("/", generalRoute)
}

module.exports = routes