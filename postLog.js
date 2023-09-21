// import loggerConfig from '/logger.config.js'

// const api = loggerConfig.api;
import config from 'config';
const api = config.get(api);

const postLog = async (params) => {
  try {
    await fetch (api, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    })
  }
  finally {
    console.log('done post')
  }
}
export default postLog;