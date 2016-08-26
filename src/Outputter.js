/*
 * Outputs sprites to JSON file as base64 GIF string.
 */
function Outputter(sprites) {
    if (!Array.isArray(sprites)) {
        throw new TypeError('sprites aren\'t type Array');
    }

    this.path;
    this.spriteSheetName;

    this._sprites = sprites;
    this._exportObject = {};
}

(function (proto_) {

    /*
     * Outputs sprites as base64 GIF string to JSON file.
     */
    proto_.output = function (callback) {
        this._checkTypes();
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

}(Outputter.prototype));

module.exports = Outputter;
