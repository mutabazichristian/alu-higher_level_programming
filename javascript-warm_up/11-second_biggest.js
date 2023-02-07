#!/usr/bin/node
const argv = +process.argv.slice(2);

function findSecondLargest(argv) {
   argv.sort((a, b) => {
    if (a < b) return 1;
    if (a > b) return -1;
    return 0;
  })
  return argv;
}

if (argv.length === 1) {
  console.log(0);
} else if (argv.length === 0) {
  console.log(0);
} else {
  console.log(findSecondLargest(argv));
}