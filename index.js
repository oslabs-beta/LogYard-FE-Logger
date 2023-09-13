import postLog from './postLog';


const logger = async (level, message, Context = {}) => {
  
  const params = {
    level,
    message,
      meta : {
        Context
      }
  }
  
  postLog(params);
};

export default logger;