#!/usr/bin/node
const ask = require('fs');
const filePath = process.argv[2];
const forWriting = process.argv[3];

ask.writeFile(filePath, forWriting, () => {});
