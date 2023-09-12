import postLog from './postLog';

 const logger = async (level, message, Context = {}) => {
  
  // const defaults = Object.assign({
  //   severity: 0,
  //   context: {},
  // }, options);
  
  const params = {
    level,
    message,
      meta : {
        Context
      }
  }
  
  // const data = {
  //   logString,
  //   context: { ...logConfig.globalContext, ...defaults.context },
  //   severity: defaults.severity,
  //   time: new Date(),
  //   serverPassword: logConfig.serverPassword,
  // }

  postLog(params);
};

export default logger;