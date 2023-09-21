import postLog from './postLog.js';


const createLog = async (level, message, Context = {}) => {
  
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