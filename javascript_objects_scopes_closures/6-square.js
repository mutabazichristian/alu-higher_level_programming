#!/usr/bin/node
const A = require('./5-square')
class Square extends A {
  constructor(size) {
    super(size);
  }

  charPrint(c) {
    if (c == undefined) {
      c = 'X';
    }
    for(let i = 0; i <this.height; i++){
      console.log(c.repeat(this.width));
    }
  }
}

module.exports = Square;
