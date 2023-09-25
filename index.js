import postLog from './postLog.js';


const createLog = async (level, message, Context = {}) => {
  
  const levels = ['error', 'warn', 'http', 'debug', 'verbose', 'info', 'silly'];
  if (!levels.includes(level)) {
    return console.log('Invalid Level');
  }

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