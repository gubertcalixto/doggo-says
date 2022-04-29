const fs = require('fs');
const distFolder = 'dist';
if (fs.existsSync(distFolder)) {
    fs.copyFile('package.json', `${distFolder}/package.json`, (err) => {
        if (err) console.error(`Could not copy package.json to dist folder`);
    });
}