const express = require('express');
const server = express();
const request = require('request');

server.set('view engine', 'ejs');

server.get('/', (req, res) =>
  Promise.all([
    getContents('http://localhost:9091'),
    getContents('http://localhost:9092'),
    getContents('http://localhost:9093'),
    getContents('http://localhost:9094'),
  ]).then(responses => {
    let [header, footer, firstApp, secondApp] = responses;
    // console.log('header::', header);
    
    res.render('index', { header, footer, firstApp, secondApp });
  }).catch(error =>
    res.send(error.message)
  )
);

const getContents = (url) => new Promise((resolve, reject) => {
  request.get(url, (error, response, body) => {
    if (error) return resolve("Error loading " + url + ": " + error.message);

    return resolve(body);
  });
});

const port = process.env.PORT || 9090;
server.listen(port, () => {
  console.log(`Homepage listening on port ${port}`);
});