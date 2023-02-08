#!/usr/bin/node
function runner (x, theFunction){
  for(let i = 0; i < x; i++){
    theFunction();
  }
}
