import postLog from './postLog.js';


const createLog = async (level, message, Context = {}) => {
  
  const levels = ['error', 'warn', 'http', 'debug', 'verbose', 'info', 'silly'];
  if (!levels.includes(level)) {
    return console.log('Invalid Level');
  }

  for (const key in Context) {
    if (typeof Context[key] === 'object') {
      Context[key] = 'INVALID CONTEXT';
    }
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