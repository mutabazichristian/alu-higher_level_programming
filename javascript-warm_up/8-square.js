#!/usr/bin/node
const argv = process.argv.slice();
const x = argv[2];

if (isNaN(x)) {
  console.log('Missing size');
} else {
  const X = x * x;
  console.log(X);
}
