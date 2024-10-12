// lambda.js
const serverlessExpress = require("@codegenie/serverless-express");
const app = require("./app");

// Create and export the handler for AWS Lambda
exports.handler = serverlessExpress({ app });
