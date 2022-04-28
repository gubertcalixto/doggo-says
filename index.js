const prompts = require('prompts');

(async () => {
    const result = await prompts({
        type: 'text',
        name: 'message',
        message: 'What doggo should say?'
    });
    const { message } = result;
    console.log(message)
})();