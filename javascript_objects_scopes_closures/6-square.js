#!/usr/bin/node
const Square = require('./5-square')
class Square extends Square {
  constructor(size) {
    super(size);
  }

  charPrint(c) {
    if (c == undefined) {
      c = 'X';
    }
  }
}

module.exports = Square;
