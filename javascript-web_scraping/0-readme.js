#!/usr/bin/node
const ask = require('fs');

const filePath = process.argv[2];

ask.readFile(filePath, (err, data) => {
  if (err) console.log(err);
  const content = data;
  console.log(content);
});
