const awsServerlessExpress = require('aws-serverless-express');
const app = require('../server');
const server = awsServerlessExpress.createServer(app)


module.exports.JorgeMaldonado = (event, context) => awsServerlessExpress.proxy(server, event, context);

// exports.JorgeMaldonado = server.createHandler({
//   cors: {
//     origin: '*',
//     credentials: true,
//   },
// });