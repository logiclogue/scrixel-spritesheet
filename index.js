const Jimp = require("jimp");
const _ = require("lodash");

// Int -> Int -> String -> Promise [String]
Jimp.read("./test/res/image.gif").then(image => {
    const width = image.bitmap.width;
    const height = image.bitmap.height;

    let promise = new Promise((resolve, reject) => image.getBase64(Jimp.MIME_PNG, (x, y) => resolve(y)));

    promise.then(console.log);

    let values = columns(2, image).map(image => new Promise((resolve, reject) => image.getBase64(Jimp.MIME_PNG, (x, y) => resolve(y))));

    Promise.all(values).then(console.log);
}).catch(err => console.error(err));

function columns(cols, image) {
    const width = image.bitmap.width;
    const height = image.bitmap.height;
    const columnWidth = width / cols;

    return _
        .range(cols)
        .map(i => i * columnWidth)
        .map(x => image.clone().crop(x, 0, columnWidth, height));
}
