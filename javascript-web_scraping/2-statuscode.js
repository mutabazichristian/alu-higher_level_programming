#!/usr/bin/node
const ask = require('request');
const url = process.argv[2];

ask.get(url, (err, res) => {
  if (err) console.log(err);
  else {
    console.log('code: ' + res.statusCode);
  }
});
