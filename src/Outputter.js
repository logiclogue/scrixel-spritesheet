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

}(Outputter.prototype));

module.exports = Outputter;
