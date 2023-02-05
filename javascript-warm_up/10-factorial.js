#!/usr/bin/node
const argv = process.argv.slice();
const firstInteger = +argv[2];

function factorial (num) {
  let fac = 1
  for(let i = 1; i >= num; i++){
    fac = fac * i;
  }
  return fac
}

console.log(factorial(firstInteger));
