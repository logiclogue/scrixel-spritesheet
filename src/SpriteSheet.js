function SpriteSheet(image) {
    this.image;
    this.width;
    this.height;

    this.addImage(image);
}

(function (proto_) {

    /*
     * Adds the image.
     */
    proto_.addImage = function (image) {
        if (typeof image === 'undefined') {
            return;
        }

        this.image = image;
        this.width = image.width();
        this.height = image.height();
    };

}(SpriteSheet.prototype));

module.exports = SpriteSheet;
