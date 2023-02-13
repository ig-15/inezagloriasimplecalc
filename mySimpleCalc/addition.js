
const http = require('http');

const server = http.createServer((req, res) => {
  const url = new URL(req.url `http://${req.headers.host}`);
  const numbers = url.searchParams.get('numbers');
 const numbersArray = numbers.split(',').map(Number);
  
  const result = numbersArray.reduce((sum, num) => sum + num, 0);
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ result }));
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
