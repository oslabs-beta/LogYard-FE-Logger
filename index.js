import postLog from './postLog';


const createLog = async (level, message, Context = {}) => {
  
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
  
  postLog(params);
};

export default createLog;