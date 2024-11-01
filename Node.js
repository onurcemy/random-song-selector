const fetch = require('node-fetch');

async function getAccessToken(c0eb7edda15746078bdc9fac0669a2fb, 4e3841cce0bd46b58f162bc6314c280a) {
  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + Buffer.from(c0eb7edda15746078bdc9fac0669a2fb + ':' + 4e3841cce0bd46b58f162bc6314c280a).toString('base64')
    },
    body: 'grant_type=client_credentials'
  });

  const data = await response.json();
  return data.access_token;
}

const c0eb7edda15746078bdc9fac0669a2fb = 'YOUR_CLIENT_ID';
const 4e3841cce0bd46b58f162bc6314c280a = 'YOUR_CLIENT_SECRET';

getAccessToken(c0eb7edda15746078bdc9fac0669a2fb, 4e3841cce0bd46b58f162bc6314c280a).then(token => {
  console.log('Access Token:', token);
}).catch(error => {
  console.error('Error fetching access token:', error);
});
