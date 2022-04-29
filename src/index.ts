#! /usr/bin/env node
const { printDoggo } = require('./doggo');
const { isEasterEgg, printEasterEgg } = require('./easter-egg');
const { printMessageBox } = require('./message-box');
const { getPromptMessage } = require('./prompts');

const args = process.argv.slice(2);
let [message] = args;

(async () => {
    if (!message) {
        message = await getPromptMessage();
    }
    if (message) {
        printMessageBox(message);
        if (isEasterEgg(message)) {
            printEasterEgg(message);
        } else {
            printDoggo(message);
        }
    }
})();
