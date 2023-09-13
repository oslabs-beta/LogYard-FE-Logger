const client = require('./establishConnection');
// const config = require('config');

// const logConfig = config.get('LogYard');

const uploadLog = async (logData)=>{
  try {
    await client.connect();

    const logDB = client.db(logConfig.databaseName);
    const logColl = logDB.collection(logConfig.collectionName);

    await logColl.insertOne(logData);
  }
  finally {
    await client.close();
  }
}

module.exports = uploadLog;