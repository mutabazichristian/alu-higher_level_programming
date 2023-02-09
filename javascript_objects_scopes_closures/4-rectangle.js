#!/usr/bin/node
class Rectangle {
  constructor (w, h) {
    if (w > 0 && h > 0) {
      this.width = w;
      this.height = h;
    }
  }

  print () {
    for (let i = 0; i < this.height; i++) {
      console.log('X'.repeat(this.width));
    }
  }

  rotate () {
    //exchanging height and width values without a third variable
    this.height = this.height + this.width;
    this.width = this.height - this.width;
    this.height = this.height - this.width;
  }

  double () {
    //doubling the value of height and width
    this.height = this.height * 2;
    this.width = this.width * 2;
  }
}

module.exports = Rectangle;
