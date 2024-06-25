const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

const swaggerDefinition = {
    openapi: "3.0.0",
    info: {
        title: "Currency Exchange API",
        version: "1.0.0",
        description: "API documentation for the Currency Exchange application"
    },
    servers: [{
            url: "http://localhost:3000",
            description: "Development server"
    }]
};

const options = {
    swaggerDefinition,
    apis: ["./routes/*.js"]
};

const swaggerSpec = swaggerJsdoc(options);

const setupSwagger = (app) => {
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

module.exports = setupSwagger;
