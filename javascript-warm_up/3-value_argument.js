#!/usr/bin/node
const argv = process.argv.slice(1);

if (argv) {
  console.log(argv);
} else {
  console.log("No argument");
}
