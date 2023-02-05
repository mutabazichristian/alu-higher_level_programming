#!/usr/bin/node
const argv = process.argv.slice();
const firstInteger = +argv[2];
factorial = 1

function factorial (num) {
  for(let i = 1; i >= num; i++){
    factorial = factorial * i;
  }
}

console.log(factorial(firstInteger));
