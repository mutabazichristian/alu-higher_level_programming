#!/usr/bin/node
module.exports.esrever = function (list) {
  const reverseList = list;
  let count = 0;
  for (let i = (list.length - 1); i >= 0; i--) {
    reverseList[count] = list[i];
    count++;
  }
  return reverseList;
};
