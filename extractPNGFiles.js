const walk = require('walk');
const path = require('path');

module.exports = root => new Promise((resolve, reject) => {
    const walker = walk.walk(root, { followLinks: false });
    let files = [];
    let imageFeature = fileName => fileName.match(/.(png)$/i);
    walker.on('file', (root, stat, next) => {
        if (imageFeature(stat.name)) {
            files.push(path.join(root, stat.name));
        }
        next();
    });
    walker.on('end', () => {
        resolve(files);
    });
});