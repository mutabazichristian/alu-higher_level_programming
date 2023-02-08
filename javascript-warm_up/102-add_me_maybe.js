#!/usr/bin/node
function addMeMaybe(nb, fun) {
  nb++;
  fun((nb));
}
exports.addMeMaybe = addMeMaybe;
