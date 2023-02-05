#!/usr/bin/node
const argv = process.argv.slice(0);

if (argv) {
  console.log(argv);
} else {
  console.log("No argument");
}
