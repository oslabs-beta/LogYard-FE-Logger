const config = require('config');
const uploadLog = require('./uploadLog');

const logConfig = config.get('LogYard');

const createLog = async (logString, options = { severity: 0, context: {} }) => {
  
  const defaults = Object.assign({
    severity: 0,
    context: {},
  }, options);
  
  
  const data = {
    logString,
    context: { ...logConfig.globalContext, ...defaults.context },
    severity: defaults.severity,
    time: new Date(),
    serverPassword: logConfig.serverPassword,
  }
  
  uploadLog(data);
};

module.exports = { createLog };