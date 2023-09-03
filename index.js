const config = require('config');

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
  
  const result = await fetch(logConfig.sendAddress, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return result.ok;
};

module.exports = { createLog };