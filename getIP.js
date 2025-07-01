const os = require('os');
const https = require('https');

// Function to get Private IP
const getPrivateIP = () => {
  const networkInterfaces = os.networkInterfaces();
  for (const interfaceName in networkInterfaces) {
    for (const net of networkInterfaces[interfaceName]) {
      if (net.family === 'IPv4' && !net.internal) {
        return net.address;
      }
    }
  }
  return 'Private IP not found';
};

console.log('Private IP Address:', getPrivateIP());

// Get Public IP
https.get('https://api.ipify.org?format=json', (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    const ip = JSON.parse(data).ip;
    console.log('Public IP Address:', ip);
  });

}).on('error', (err) => {
  console.log('Error fetching public IP:', err.message);
});
