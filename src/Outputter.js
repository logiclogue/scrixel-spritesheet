var fs = require('fs');


/*
 * Outputs sprites to JSON file as base64 GIF string.
 */
function Outputter(sprites) {
    if (!Array.isArray(sprites)) {
        throw new TypeError('sprites aren\'t type Array');
    }

    this.path;
    this.spriteSheetName;
    this.imageFormat = 'gif';

    this._sprites = sprites;
    this._exportObject = {};
    this._converted = 0;
    this._totalSprites;
    this._base64IntroString = 'data:image/' + this.imageFormat + ';base64,';
}

(function (proto_) {

    /*
     * Outputs sprites as base64 GIF string to JSON file.
     */
    proto_.output = function (callback) {
        this._checkTypes();

        var x;
        var y;
        var maxX = this._sprites.length;
        var maxY = this._sprites[0].length;
        this._totalSprites = maxX * maxY;

        for (x = 0; x < maxX; x += 1) {
            for (y = 0; y < maxY; y += 1)  {
                this._convert(x, y);
            }
        }

        this._checkConverted(callback);
    };


    /*
     * Converts each sprite from image object to base64 GIF string, putting it
     * into #_exportObject.
     */
    proto_._convert = function (x, y) {
        this._sprites[x][y].toBuffer(this.imageFormat, function (err, buffer) {
            var exporter = this._getSpriteExport(x, y);

            exporter[y] = this._base64IntroString + buffer.toString('base64');
            this._converted += 1;
        }.bind(this));
    };

    /*
     * Gets x place in where sprite will be exported to.
     */
    proto_._getSpriteExport = function (x, y) {
        var spriteObject;

        if (typeof this._exportObject[this.spriteSheetName] === 'undefined') {
            this._exportObject[this.spriteSheetName] = [];
        }

        spriteObject = this._exportObject[this.spriteSheetName];

        if (typeof spriteObject[x] === 'undefined') {
            spriteObject[x] = [];
        }

        return this._exportObject[this.spriteSheetName][x];
    };

    /*
     * Exports to JSON.
     */
    proto_._export = function (callback) {
        var encodedJSON = JSON.stringify(this._exportObject);

        fs.writeFile(this.path, encodedJSON, function (err) {
            if (err) {
                throw new Error('error writing JSON to file');
            }

            callback();
        }.bind(this));
    };

    /*
     * Checks whether #path and #spriteSheetname are strings.
     */
    proto_._checkTypes = function () {
        if (typeof this.path !== 'string') {
            throw new TypeError('#path is not a string');
        }

        if (typeof this.spriteSheetName !== 'string') {
           throw new TypeError('#spriteSheetName is not a string');
        }
    };

    /*
     * Checks to see whether all of the sprites have been converted.
     */
    proto_._checkConverted = function (callback) {
        if (this._converted === this._totalSprites) {
            this._export(callback);
        }
        else {
            setTimeout(this._checkConverted.bind(this, callback), 10);
        }
    };

}(Outputter.prototype));

module.exports = Outputter;
