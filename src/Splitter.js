function Splitter(spriteSheet) {
    this.spriteSheet = spriteSheet;
    this.sprites = [];
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

        var columns = this.spriteSheet.width / cellWidth;
        var rows = this.spriteSheet.height / cellHeight;
        var x = 0;
        var y = 0;

        for (; x < columns; x += 1) {
            this.sprites[x] = [];

            for (; y < rows; y += 1) {
                this.sprites[x][y];
            }
        }
    };

}(Splitter.prototype));

module.exports = Splitter;
