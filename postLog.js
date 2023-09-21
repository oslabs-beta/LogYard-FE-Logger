const api = 'http://localhost:8080/api/logs';

const postLog = async (params) => {
    await fetch (api, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    })
}
export default postLog;