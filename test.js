const expect = require("chai").expect;
const split = require(".");

describe("split", () => {
    const imagesPromise = split(2, 2, "./res/image.gif");

    it("returns the right length", done => {
        imagesPromise.then(images => {
            expect(images.length).to.equal(4);

            done();
        }).catch(done);
    });

    it("returns buffers", done => {
        imagesPromise.then(images => {
            images.forEach(image => {
                expect(image).is.instanceof(Buffer);
            });

            done();
        }).catch(done);
    });

    it("returns the expected images", done => {
        imagesPromise.then(images => {
            const base64Images = images.map(image => image.toString("base64"));

            expect(base64Images[0]).is.equal("iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAklEQVR4AewaftIAAAA7SURBVKXBAQnAMBDAwCzMUf1LeE2dgkJZ7p7N3vw0DBLJwTDckEgiiSSSSCKJJJKDxeKGRBJJ9A5D8QHk9ghTKwiKQgAAAABJRU5ErkJggg==");
            expect(base64Images[1]).is.equal("iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAklEQVR4AewaftIAAABgSURBVKXB0QnCMAAFwDNko7f/CG+mSj8ECVWquXscjsOfqqYPqt5FXJkuVJ0iXqoiVtOiKuKuYRHxi2HTcENVxJXpi6pTxCfTompVdYpYTYuIXwybhk3DpmHTsGlW7XgCcOYWxVfVQZkAAAAASUVORK5CYII=");
            expect(base64Images[2]).is.equal("iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAklEQVR4AewaftIAAABoSURBVKXBwW3DMAAEMFbQRrf/CDeTmz4MGIEcFxH5czgOX6oaNk0fVJ0iVoaFqqqIiD9VK8ONiFPEnWEh4l1E1bth0/Sg6qoq4jQ9iLiqupr+oerO9FL1JGJleon41rBp2DRsmlU7fgGyFxrFW9D5YgAAAABJRU5ErkJggg==");
            expect(base64Images[3]).is.equal("iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAklEQVR4AewaftIAAABUSURBVKXBwQ3DMBADwTVxHV3/JbAmBX7oI9gSHM5cgzH4kzEiJEIiJBbGfCFC4sCYHRESoeKFMZMxt6ZZFQ+MmZpmp1g0zWTMidhomhMREqEyJvEDBosRjZ4XWqwAAAAASUVORK5CYII=");

            done();
        }).catch(done);
    });
});
