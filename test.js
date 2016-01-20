#!/usr/bin/env node

var argv = require('minimist')(process.argv.slice(2));
var ansi = require('ansi-rainbow')
var chalk = require('chalk')

var ini = argv._.join(' ')

while (ini.length % 160 !== 0) {
  ini += ' '
}

var l = ini.length

var spaces = ''
var i = 0
for (; i < l; i++) {
  spaces += ' ';
}

ansi //options
  .add('black', 'white') 
  .reset() //we do not want black and white anymore - note it does not reset options only colors
  .skip(ansi._backgrounds) //skips backgrounds
  .add('bgBlue bgMagenta bgCyan') //this will keep order when rainbowified
  .options({
    color_space: true,
    gap: 1
  }) //this will force color spaces and change color every 3 characters

console.log(ansi.bg(spaces))
console.log(chalk.black(ansi.bg(ini)))

var count = 0;
for (var tempIn = 0; tempIn < 37; tempIn++) {
  console.log(ansi.bg(spaces))
  count += 1
}
