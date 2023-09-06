const { MongoClient, ServerApiVersion } = require("mongodb");
const config = require('config');

const logConfig = config.get('LogYard');

const client = new MongoClient(logConfig.uri,  {
  serverApi: {
      version: ServerApiVersion.v1, //Should be 6?
      strict: true,
      deprecationErrors: true,
    }
  }
);

module.exports = client;