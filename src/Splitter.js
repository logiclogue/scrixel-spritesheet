function Splitter(spriteSheet) {
    this.spriteSheet = spriteSheet;
    this.sprites = [];

    this._columns;
    this._rows;
    this._cellWidth;
    this._cellHeight;
    this._completed = 0;
    this._totalSprites;
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

        this._columns = this.spriteSheet.width / cellWidth;
        this._rows = this.spriteSheet.height / cellHeight;
        this._totalSprites = this._columns * this._rows;
        this._cellWidth = cellWidth;
        this._cellHeight = cellHeight;
        var x;
        var y;

        for (x = 0; x < this._columns; x += 1) {
            this.sprites[x] = [];

            for (y = 0; y < this._rows; y += 1) {
                this._splitSprite(x, y);
            }
        }
        
        this._checkCompleted(callback);
    };


    /*
     * For each sprite cell, crop it and attach the sprite's image object to
     * the #sprites array. #sprites is a multidemensional array, indexed like
     * so: #sprites[x][y].
     */
    proto_._splitSprite = function (x, y) {
        var minX = x * this._cellWidth;
        var maxX = ((x + 1) * this._cellWidth) - 1;
        var minY = y * this._cellHeight;
        var maxY = ((y + 1) * this._cellHeight) - 1;

        this.spriteSheet.image.clone(function (err, spriteSheet) {
            spriteSheet.crop(minX, minY, maxX, maxY, function (err, sprite) {
                this.sprites[x][y] = sprite;
                this._completed += 1;
            }.bind(this));
        }.bind(this));
    };

    /*
     * Recursive loop to keep checking and then calls back when all sprites are
     * loaded.
     */
    proto_._checkCompleted = function (callback) {
        if (this._completed === this._totalSprites) {
            callback(this.sprites);
        }
        else {
            setTimeout(this._checkCompleted.bind(this, callback), 10);
        }
    };

}(Splitter.prototype));

module.exports = Splitter;
