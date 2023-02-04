#!/usr/bin/node
const arg = process.argv.slice ;

if (arg == 0){
    console.log('No')
}
else if (arg == 1){
    console.log('Argument found');
} else {
    console.log('Arguments found')
}