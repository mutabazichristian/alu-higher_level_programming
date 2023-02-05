#!/usr/bin/node
const argv = process.argv.slice(0);

if (argv) {
  console.log(argv[0]);
} else {
  console.log("No argument");
}
