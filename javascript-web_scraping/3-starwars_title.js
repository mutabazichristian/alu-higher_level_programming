#!/usr/bin/node
const ask = require('request');
const episodeId = process.argv[2];
const urlFilms = `https://swapi-api.alx-tools.com/api/films/${episodeId}`;

ask.get(urlFilms, (err, res) => {
  if (err) console.log(err);
  else {
    const content = JSON.parse(res.body);
    console.log(content.title);
  }
});
