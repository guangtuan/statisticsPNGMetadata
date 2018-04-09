const targetDir = process.argv[2];
if (typeof targetDir === 'undefined') {
    throw new Error('usage: node index.js projectResourceFolder');
}
const extractPNGFiles = require('./extractPNGFiles');
const statistics = require('./statistics');
const prettyJSON = object => JSON.stringify(object, null, 4);
extractPNGFiles(targetDir).then(statistics).then(prettyJSON).then(console.log);