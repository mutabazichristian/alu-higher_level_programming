#!/usr/bin/node
module.exports.nbOccurences = function (list, searchElement) {
  let count = 0;
  array.forEach((item) => {
    if (item === searchElement) {
      count++;
    }
  });
  return count;
};
