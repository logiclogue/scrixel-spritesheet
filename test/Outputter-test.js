var assert = require('chai').assert;
var Outputter = require('../src/Outputter');
var Loader = require('../src/Loader');
var Splitter = require('../src/Splitter');
var SpriteSheet = require('../src/SpriteSheet');


var sprites = [];
var spriteSheet;
var splitter;
var loader = new Loader();

loader.loadImage(__dirname + '/res/image.gif', function (image) {
    spriteSheet = new SpriteSheet(image);

    var splitter = new Splitter(spriteSheet);

    splitter.split(16, 16, function (spritesLocal) {
        sprites = spritesLocal;

        describe('#Outputter', outputterTests);
    });
});

function outputterTests() {
    var outputter;

    describe('#constructor()', function () {
        it('should throw an error if sprites aren\'t passed', function () {
            assert.throws(function () {
                outputter = new Outputter();
            }, TypeError);
        });

        it('shouldn\'t throw an error if sprites are passed', function () {
            assert.doesNotThrow(function () {
                outputter = new Outputter(sprites);
            });
        });

        it('should set #path and #spriteSheetName to undefined', function () {
            assert.isUndefined(outputter.path, outputter.spriteSheetName);
        });
    });

    describe('#output', function (done) {
        it('should write to file correct base64 string', function () {

        });

        it('should throw error if path isn\'t a string', function () {

        });

        it('should throw error if spriteSheetName isn\'t a string',
        function () {

        });
    });
};
