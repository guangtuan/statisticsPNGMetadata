const testFolder = process.argv[2];
if (typeof testFolder === 'undefined') {
    throw new Error('usage: node index.js projectResourceFolder');
}
const allFiles = require('./allFiles');
const statistics = require('./statistics');
const prettyJSON = object => JSON.stringify(object, null, 4);
allFiles(testFolder).then(statistics).then(prettyJSON).then(console.log);