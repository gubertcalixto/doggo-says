const { getMessageBoxWidth } = require('./message-box');
const DOGGO_LOGO = [
    '        __',
    '     __/o \\_',
    '     \\____  \\',
    '         /   \\',
    '   __   //\\   \\',
    '__/o \\-//--\\   \\_/',
    '\\____  ___  \\  |',
    '     ||   \\ |\\ |',
    '    _||   _||_||',
    '-----------------'
];
module.exports = {
    printDoggo: (message: string) => {
        const paddingPosition = Math.floor(getMessageBoxWidth(message) / 10 * 9);
        const padding = new Array(paddingPosition).join(' ');
        for (const doggoLine of DOGGO_LOGO) {
            console.log(padding + doggoLine);
        }
    }
};

export { };
