const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const { path, query } = url.parse(req.url, true);
  if (path === '/multiplication') {
    const numbers = query.numbers;
     
      const product = numbers.split(',').reduce((acc, num) => acc * Number(num), 1);
      res.end(`The product of ${numbers} is ${product}.`);
    
  }
  else{
    res.statusCode = 400;
    res.end('Bad request');
  }
});

server.listen(4000, () => {
  console.log('Server listening on port 4000.');
});
