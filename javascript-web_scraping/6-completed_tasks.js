#!/usr/bin/node
//script that computes the numer of tasks completed by user id
const fs = require('fs');
const ask = require('request');
const url = process.argv[2];
const filePath = process.argv[3];

ask.require(url, (err, res) => {
  if (err) console.log(err);
  const data = JSON.parse(res.body);
  fs.writeFile(filePath, data, (err) => {
    console.log(err);
  });
});