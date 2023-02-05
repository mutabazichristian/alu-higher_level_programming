#!/usr/bin/node
const argv = process.argv.slice();
const firstInteger = +argv[2];
const secondInteger = +argv[3];

function add (a, b) {
  return a + b;
}

const sum = add(firstInteger, secondInteger);
console.log(sum);
