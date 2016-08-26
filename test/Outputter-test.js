var assert = require('chai').assert;
var Outputter = require('../src/Outputter');


var sprites = [];

describe('#Outputter', function () {
    var outputter;

    describe('#constructor()', function () {
        it('should throw an error if sprites aren\'t passed', function () {
            assert.throws(function () {
                outputter = new Outputter();
            }, TypeError);
        });

        it('shouldn\'t throw an error if sprites are passed', function (), {
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
});
