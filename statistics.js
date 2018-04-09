const separator = ' ';
const tools = {
    connect: array => array.sort().join(separator),
    getProp: propName => obj => obj[propName]
};

tools.arrayEqual = (arr1, arr2) => tools.connect(arr1) === tools.connect(arr2);

const png = require('png-metadata');
const readMetadata = path => png.splitChunk(png.readFileSync(path)).map(tools.getProp('type'))

let matches = metadataNames => ele => tools.arrayEqual(ele.metadataNames, metadataNames);

module.exports = filePaths => filePaths.reduce((acc, filePath, currIdx, arr) => {
    let metadataNames = readMetadata(filePath);
    let idx = acc.findIndex(matches(metadataNames));
    if (idx > -1) {
        acc[idx].filePaths.push(filePath);
        acc[idx].number++;
    } else {
        acc.push({
            number: 1,
            metadataNames: metadataNames,
            filePaths: [filePath]
        });
    }
    return acc;
}, []).sort((a, b) => a.number - b.number);