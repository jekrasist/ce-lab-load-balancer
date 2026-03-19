const http = require('http');
const os = require('os');
const INSTANCE_ID = process.env.INSTANCE_ID || 'unknown';
const AZ = process.env.AZ || 'unknown';

const server = http.createServer((req, res) => {
  if (req.url === '/health') {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify({ status: 'healthy', instance: INSTANCE_ID, az: AZ, uptime: process.uptime() }));
    return;
  }
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(`<h1>🚀 Cloud Engineering Bootcamp</h1><p>Instance: ${INSTANCE_ID}</p><p>AZ: ${AZ}</p>`);
});
server.listen(80, () => { console.log('Server running on port 80'); });
