#!/usr/bin/node
//program prints number of movies in which a certain character is present
const ask = require('request');
const url = process.argv[2];
const characterId = 18;

ask.get(url, (err, res) => {
  if (err) console.log(err);
  else{
    const content = JSON.parse(res.body);
    console.log(content);
  }
})