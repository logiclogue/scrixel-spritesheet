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
                splitter = new Splitter(spriteSheet);
            }, Error);
        });

        it('should set #spriteSheet to passed in sprite sheet object',
        function () {
            assert.deepEqual(splitter.spriteSheet, spriteSheet);
        });

        it('should set #sprites to Object', function () {
            assert.deepEqual(splitter.sprites, {});
        });
    });

    describe('#split()', function () {
        it('should throw error if cellWidth and cellHeight are not numbers',
        function () {
            var width = 16;
            var height = '16';
            var split = splitter.split.bind(undefined, width, height);

            assert.throws(split, TypeError);
        });

        it('shouldn\'t return error if width and height are numbers',
        function () {
            var width = 16;
            var height = 16;
            var split = splitter.split.bind(undefined, width, height);

            assert.doesNotThrow(split, TypeError);
        });
    });
};
