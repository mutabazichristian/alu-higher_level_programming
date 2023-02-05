#!/usr/bin/node
const argv = process.argv.slice();

if (argv) {
  console.log(argv);
} else {
  console.log("No argument");
}
