const { getMessageBoxWidth } = require('./message-box');

// Thanks to https://www.asciiart.eu/animals/rabbits for this ASCII ART
const BUNNY_IMG = [
    '         ,',
    '        /|      __',
    '       / |   ,-~ /',
    '      Y :|  //  /',
    '      | jj /( .^',
    '      >-"~"-v"',
    '     /       Y',
    '    jo  o    |',
    '   ( ~T~     j',
    '    >._-\' _./',
    '   /   "~"  |',
    '  Y     _,  |',
    ' /| ;-"~ _  l',
    '/ l/ ,-"~    \\',
    '\\//\\/      .- \\',
    ' Y        /    Y    -Row',
    ' l       I     !',
    ' ]\\      _\\    /"\\',
    '(" ~----( ~   Y.  )',
];

const isEasterEggFn = (message: string) => message.includes('egg') && message.includes('easter');
const printEasterEggFn = (message: string) => {
    const paddingPosition = Math.floor(getMessageBoxWidth(message) / 10 * 9);
    const padding = new Array(paddingPosition).join(' ');
    for (const easterEggLine of BUNNY_IMG) {
        console.log(padding + easterEggLine);
    }
};
module.exports = {
    isEasterEgg: isEasterEggFn,
    printEasterEgg: printEasterEggFn
};

export { };
