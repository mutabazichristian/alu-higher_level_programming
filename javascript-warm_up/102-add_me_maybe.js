#!/usr/bin/node
function addMeMaybe(nb, fun) {
  fun();
  +nb++;
  return nb;
}
exports.addMeMaybe = addMeMaybe;
