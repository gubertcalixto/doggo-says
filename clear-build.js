const fs = require('fs');
const distFolder = 'dist';
if (fs.existsSync(distFolder)) {
    fs.rmSync(distFolder, { recursive: true, force: true });
}