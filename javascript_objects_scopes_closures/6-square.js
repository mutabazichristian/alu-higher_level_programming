#!/usr/bin/node
const A = require('./5-square');
class Square extends A {
  charPrint (c) {
    if (c === undefined) {
      c = 'X';
    }
    for (let i = 0; i < this.height; i++) {
      console.log(String(c).repeat(this.width));
    }
  }
}

module.exports = Square;
