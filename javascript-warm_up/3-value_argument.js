#!/usr/bin/node
const argv = process.argv.slice();

if (argv[2]) {
  console.log(argv[2]);
} else {
  console.log('No argument');
}
