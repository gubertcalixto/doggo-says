const getMessageBoxWidthFn = (message: string) => Math.ceil(message.length * 2);
const printMessageBoxFn = (message: string) => {
    const boxBorder = new Array(getMessageBoxWidthFn(message)).join('-');
    const messageStartPosition = Math.floor(getMessageBoxWidthFn(message) / 10 * 9);
    const messageStartTxt = new Array(messageStartPosition).join(' ') + '\\/';
    const spaceBeforeMessage = new Array(Math.floor((boxBorder.length - message.length) / 2)).join(' ');
    console.log(boxBorder);
    console.log('\n' + spaceBeforeMessage + message + '\n');
    console.log(boxBorder);
    console.log(messageStartTxt);
}

module.exports = {
    getMessageBoxWidth: getMessageBoxWidthFn,
    printMessageBox: printMessageBoxFn,
};

export { };
