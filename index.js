const Jimp = require("jimp");
const _ = require("lodash");

// Int -> Int -> String -> Promise [Buffer]
function split(rows, columns, filePath) {
    return new Promise((resolve, reject) => {
        Jimp.read(filePath).then(image => {
            const width = image.bitmap.width;
            const height = image.bitmap.height;

            let values = _.flatten(splitRows(rows, image)
                .map(column => splitColumns(columns, column)))
                .map(image =>
                    new Promise((resolve, reject) =>
                        image.getBuffer(Jimp.MIME_PNG, (x, y) =>
                            resolve(y))));

            Promise.all(values).then(resolve).catch(reject);
        }).catch(err => console.error(err));
    });
}

function splitColumns(n, image) {
    const width = image.bitmap.width;
    const height = image.bitmap.height;
    const columnWidth = width / n;

    return _
        .range(n)
        .map(i => i * columnWidth)
        .map(x => image.clone().crop(x, 0, columnWidth, height));
}

function splitRows(n, image) {
    const width = image.bitmap.width;
    const height = image.bitmap.height;
    const rowHeight = height / n;

    return _
        .range(n)
        .map(i => i * rowHeight)
        .map(y => image.clone().crop(0, y, width, rowHeight));
}

module.exports = split;
