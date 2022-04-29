const prompts = require('prompts');

async function getPromptMessageFn() {
    const result = await prompts({
        type: 'text',
        name: 'message',
        message: 'What doggo should say?'
    });
    const { message } = result;
    return message;
}

module.exports = {
    getPromptMessage: getPromptMessageFn,
};

export { };
