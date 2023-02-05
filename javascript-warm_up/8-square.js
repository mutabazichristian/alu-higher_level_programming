#!/usr/bin/node
const argv = process.argv.slice();
const x = argv[2];

if (isNaN(x)) {
  console.log('Missing size');
} else {
  for (let i = 0; i < x; i++) {
    console.log('x'.repeat(x))
  }
}
