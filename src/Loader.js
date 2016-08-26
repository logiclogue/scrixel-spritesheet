var lwip = require('lwip');


function Loader() {
    this.lastImage;
}

(function (proto_) {

    /*
     * Loads an image from the given url.
     */
    proto_.loadImage = function (src, callback) {
        lwip.open(src, function (err, image) {
            if (err) {
                throw new Error('not an image');
            }

            this.lastImage = image;

            callback(image);
        }.bind(this));
    };

    /*
     * Clones the last image loaded.
     */
    proto_.cloneLast = function (callback) {
        this.lastImage.clone(function (err, clone) {
            if (err) {
                throw new Error('no such image');
            }

            callback(clone);
        });
    };

}(Loader.prototype));

module.exports = Loader;
