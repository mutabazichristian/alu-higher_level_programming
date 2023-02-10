#!/usr/bin/node
// script that computes the numer of tasks completed by user id

const ask = require('request');
const url = process.argv[2];
const completedArray = [];

ask.get(url, (err, res) => {
  if (err) console.log(err);
  const data = JSON.parse(res.body);
  data.forEach(obj => {
    obj.forEach( element => {
      if(element.completed.includes(true)) {
        element.id.push(completedArray);
      }
    })
  });
  console.log(completedArray);
});
