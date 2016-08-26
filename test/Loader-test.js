var assert = require('chai').assert;
var Loader = require('../src/Loader');


describe('Loader', function () {
    var loader;

    describe('#constructor()', function () {
        loader = new Loader();

        it('shouldn\'t throw and error', function () {
            assert.doesNotThrow(Loader, Error);
        });

        it('should be an object', function () {
            assert.isObject(loader);
        });

        it('should set #lastImage to undefined', function () {
            assert.isUndefined(this.lastImage);
        });
    });

    describe('#loadImage(src, callback)', function () {
        it('should callback with correct image', function (done) {
            loader.loadImage(__dirname + '/res/output.gif', function (image) {
                assert.deepEqual(loader.lastImage, image);
                done();
            });
        });
    });

    describe('#cloneLast(callback)', function () {
        it('should be an object', function (done) {
            loader.cloneLast(function (image) {
                assert.isObject(image);
                done();
            });
        });
    });
});
