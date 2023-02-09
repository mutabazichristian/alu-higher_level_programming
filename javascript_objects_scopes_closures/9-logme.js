#!/usr/bin/node
let Array = [];
module.exports.logMe = function (item) {
  console.log(Array.length + ': ' + item);
  Array.push(item);
};
