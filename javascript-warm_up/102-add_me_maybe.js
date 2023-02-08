#!/usr/bin/node
function addMeMaybe(nb, fun) {
  fun(+nb++);
}
exports.addMeMaybe = addMeMaybe;
