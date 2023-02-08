#!/usr/bin/node
function callMeMoby (x, fun) {
  for (let i = 0; i < x; i++) {
    fun();
  }
}

exports.callMeMoby = callMeMoby;
