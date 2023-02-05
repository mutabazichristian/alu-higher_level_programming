#!/usr/bin/node
const string = 'C is fun';
const argv = process.argv.slice();
const x = argv[2];

if (isNaN(+x)) {
  console.log('Missing number of occurences');
} else {
  for (let i = 0; i < +x; i++) {
    console.log(string);
  }
}
