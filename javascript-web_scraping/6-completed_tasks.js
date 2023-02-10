#!/usr/bin/node
// script that computes the numer of tasks completed by user id

const ask = require('request');
const url = process.argv[2];
const completedArray = [];

ask.get(url, (err, res) => {
  if (err) console.log(err);
  const data = JSON.parse(res.body);
  data.forEach(obj => {
    obj.forEach(Element => {
      if (Element.includes(false)) {
        obj.push(completedArray);
      }
    });
  });
  console.log(completedArray.length);
});
