import http from 'http';

const server = http.createServer((_req, res) => {
  res.end('hello world');
})

const PORT = process.env['PORT'] || 3000;

server.listen(PORT, () => console.log(`listening on ${PORT}`))
