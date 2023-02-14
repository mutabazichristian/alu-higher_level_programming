#!/usr/bin/node
//script that prints all characters of a star wars movie

const ask = require('request');
const movieId = process.argv[2];
const url = `https://swapi-api.alx-tools.com/api/films${movieId}`;

ask.get(url, (err, res) => {
  if (err) console.log(err);
  const data = JSON.parse(res.body).character;
  console.log(data);
})
