function Splitter(spriteSheet) {
    this.spriteSheet = spriteSheet;
    this.sprites = {};
}

(function (proto_) {

    /*
     * Splits the sprite sheet into the given height and width.
     */
    proto_.split = function (cellWidth, cellHeight, callback) {
        isCellWidthNumber = typeof cellWidth === 'number';
        isCellHeightNumber = typeof cellHeight === 'number';

        if (!isCellWidthNumber || !isCellHeightNumber) {
            throw new TypeError('cellWidth or cellHeight isn\'t a number');
        }
    };

}(Splitter.prototype));

module.exports = Splitter;
