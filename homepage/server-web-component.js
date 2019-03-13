const express = require('express');
const server = express();
const request = require('request');
const proxy = require('http-proxy-middleware');

server.set('view engine', 'ejs');

const createProxy = (path, target) => {
  server.use(path, proxy({ target, changeOrigin: true, ignorePath: true }));
}

createProxy('/first', 'http://localhost:10181');
createProxy('/second', 'http://localhost:10182');


server.get('/', (req, res) => {
  res.render('index');
})

const port = process.env.PORT || 9090;
server.listen(port, () => {
  console.log(`Homepage listening on port ${port}`);
});