const { DOGGO_PARTS } = require('./doggo-parts');

const args = process.argv.slice(2);
let [message] = args;
const prompts = require('prompts');


(async () => {
    if (!message) {
        message = await getPromptMessage();
    }
    console.log('\n');
    printMessageBox(message);
    printDoggo(message);
})();

async function getPromptMessage() {
    const result = await prompts({
        type: 'text',
        name: 'message',
        message: 'What doggo should say?'
    });
    const { message } = result;
    return message;
}

function getMessageBoxWidth(message: string) {
    return Math.ceil(message.length * 2);
}

function printMessageBox(message: string) {
    const boxBorder = new Array(getMessageBoxWidth(message)).join('-');
    const messageStartPosition = Math.floor(getMessageBoxWidth(message) / 10 * 9);
    const messageStartTxt = new Array(messageStartPosition).join(' ') + '\\/';
    const spaceBeforeMessage = new Array(Math.floor((boxBorder.length - message.length) / 2)).join(' ');
    console.log(boxBorder);
    console.log('\n' + spaceBeforeMessage + message + '\n');
    console.log(boxBorder);
    console.log(messageStartTxt);
}

function printDoggo(message: string) {
    const paddingPosition = Math.floor(getMessageBoxWidth(message) / 10 * 9)
    const padding = new Array(paddingPosition).join(' ');
    for (const doggoLine of DOGGO_PARTS) {
        console.log(padding + doggoLine);
    }
}
