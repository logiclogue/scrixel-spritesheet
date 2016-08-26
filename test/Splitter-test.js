var assert = require('chai').assert;
var Splitter = require('../src/Splitter');
var SpriteSheet = require('../src/SpriteSheet');
var Loader = require('../src/Loader');


var loader = new Loader();
var spriteSheet;

loader.loadImage(__dirname + '/res/image.gif', function (image) {
    spirteSheet = new SpriteSheet(image);

    describe('Splitter', splitterTests);
});

function splitterTests() {
    var splitter;

    describe('#constructor(SpriteSheet)', function () {
        it('shouldn\'t throw an error', function () {
            assert.doesNotThrow(function () {
                splitter = new Splitter();
            }, Error);
        });

        it('should set #rows, #columns, #cellWidth, and #cellHeight to \
        undefined', function () {
            assert.isUndefined(splitter.rows);
            assert.isUndefined(splitter.columns);
            assert.isUndefined(splitter.cellWidth);
            assert.isUndefined(splitter.cellHeight);
        });

        it('should set #sprites to Object', function () {
            assert.deepEqual(splitter.sprites, {});
        });
    });

    describe('#split()', function () {
        it('should return error if #rows and #columns or #cellWidth and \
        #cellHeight are not numbers', function (done) {
            splitter.cellWidth = undefined;
            splitter.cellHeight = 10;
            splitter.rows = undefined;
            splitter.columns = 10;

            assert.throws(splitter.split, TypeError);
        });

        it('shouldn\'t return error if #rows and #columns or #cellWidth and \
        #cellHeight are numbers', function (done) {
            splitter.cellWidth = 16;
            splitter.cellHeight = 16;
            splitter.rows = undefined;
            splitter.columns = undefined;

            assert.throws(splitter.split, TypeError);
        });
    });
};
