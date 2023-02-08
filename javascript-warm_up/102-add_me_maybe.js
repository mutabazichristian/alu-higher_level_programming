#!/usr/bin/node
function addMeMaybe(nb, fun) {
  fun();
  return nb++;
}
exports.addMeMaybe = addMeMaybe;