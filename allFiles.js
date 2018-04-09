const walk = require('walk');
const path = require('path');

module.exports = root => new Promise((resolve, reject) => {
    const walker = walk.walk(root, { followLinks: false });
    let files = [];
    walker.on('file', (root, stat, next) => {
        files.push(path.join(root, stat.name));
        next();
    });
    walker.on('end', () => {
        let imageFeature = fileName => fileName.match(/.(png)$/i);
        resolve(files.filter(imageFeature));
    });
});