#!/usr/bin/node
// script that gets content of a webpage and stores it in a file

const fs = require('fs');
const ask = require('request');
const url = process.argv[2];
const filePath = process.argv[3];

ask.get(url, (err, res) => {
  if (err) console.log(err);
  const data = res.body;
  fs.writeFile(filePath, data, (err) => { });
});
