var assert = require('chai').assert;
var SpriteSheet = require('../src/SpriteSheet');
var Loader = require('../src/Loader');


describe('SpriteSheet', function () {
    var spriteSheet;
    var loader = new Loader();

    describe('#constructor(image)', function () {
        it('should not output an error', function () {
            assert.doesNotThrow(function () {
                new SpriteSheet();
            }, Error);
        });

        it('should not set #width and #height if no SpriteSheet', function () {
            spriteSheet = new SpriteSheet();

            assert.isUndefined(spriteSheet.width);
            assert.isUndefined(spriteSheet.height);
        });
    });

    describe('#addImage(image)', function () {
        it('should set correct #width and #height', function (done) {
            var src = __dirname + '/res/image.gif';

            loader.loadImage(src, function (image) {
                spriteSheet.addImage(image);

                assert.equal(spriteSheet.width, 32);
                assert.equal(spriteSheet.height, 32);
                assert.deepEqual(spriteSheet.image, image);

                done();
            });
        });
    });
});
