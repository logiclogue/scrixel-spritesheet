var assert = require('chai').assert;
var lwip = require('lwip');
var Splitter = require('../src/Splitter');
var SpriteSheet = require('../src/SpriteSheet');
var Loader = require('../src/Loader');


var loader = new Loader();
var spriteSheet;

loader.loadImage(__dirname + '/res/image.gif', function (image) {
    spriteSheet = new SpriteSheet(image);

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

        it('should set #sprites to Array', function () {
            assert.isArray(splitter.sprites);
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

            assert.doesNotThrow(function () {
                splitter.split(width, height);
            }, TypeError);
        });

        it('should split correctly', function (done) {
            splitter.split(16, 16, function (sprites) {
                lwip.open(__dirname + '/res/output.gif', function (err, image) {
                    sprites[1][1].toBuffer('gif', function (err, spriteBuffer) {
                        image.toBuffer('gif', function (err, imageBuffer) {
                            // Welcome to callback HELL!
                            assert.deepEqual(spriteBuffer, imageBuffer);

                            done();
                        });
                    });
                });
            });
        });
    });
};
