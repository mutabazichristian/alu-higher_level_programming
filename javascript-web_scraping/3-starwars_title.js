#!/usr/bin/node
const ask = require('request');
const movieId = process.argv[2];
const urlFilms = 'https://swapi-api.alx-tools.com/api/films';

ask.get(url, (err, res) => {
  if (err) console.log(err);
  else {
    content = JSON.parse(res.body).title;
  }
});
