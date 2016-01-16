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

ansi
    .options({
        color_space: true,
        gap: l / 160
    })
    .skip(ansi._backgrounds)
    .skip(ansi._colors)
    .add('bgBlue bgWhite bgRed bgGreen bgBlack bgMagenta bgCyan bgYellow bgBlue bgWhite bgRed bgGreen bgBlack bgMagenta bgCyan bgYellow bgBlue bgWhite bgRed bgGreen bgBlack bgMagenta bgCyan bgYellow bgBlue bgWhite bgRed bgGreen bgBlack bgMagenta bgCyan bgYellow bgBlue bgWhite bgRed bgGreen bgBlack bgMagenta bgCyan bgYellow bgBlue bgWhite bgRed bgGreen bgBlack bgMagenta bgCyan bgYellow bgBlue bgWhite bgRed bgGreen bgBlack bgMagenta bgCyan bgYellow bgBlue bgWhite bgRed bgGreen bgBlack bgMagenta bgCyan bgYellow bgBlue bgWhite bgRed bgGreen bgBlack bgMagenta bgCyan bgYellow bgBlue bgWhite bgRed bgGreen bgBlack bgMagenta bgCyan bgYellow bgBlue bgWhite bgRed bgGreen bgBlack bgMagenta bgCyan bgYellow bgBlue bgWhite bgRed bgGreen bgBlack bgMagenta bgCyan bgYellow bgBlue bgWhite bgRed bgGreen bgBlack bgMagenta bgCyan bgYellow bgBlue bgWhite bgRed bgGreen bgBlack bgMagenta bgCyan bgYellow bgBlue bgWhite bgRed bgGreen bgBlack bgMagenta bgCyan bgYellow bgBlue bgWhite bgRed bgGreen bgBlack bgMagenta bgCyan bgYellow bgBlue bgWhite bgRed bgGreen bgBlack bgMagenta bgCyan bgYellow bgBlue bgWhite bgRed bgGreen bgBlack bgMagenta bgCyan bgYellow bgBlue bgWhite bgRed bgGreen bgBlack bgMagenta bgCyan bgYellow bgBlue bgWhite bgRed bgGreen bgBlack bgMagenta bgCyan bgYellow')

console.log(ansi.bg(spaces))
console.log(chalk.black(ansi.bg(ini)))

var count = 0
for (var tempIn = 0; tempIn < 37; tempIn++) {
	console.log(ansi.bg(spaces))
	count+=1
}