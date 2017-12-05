# scrixel-spritesheet

Sprite sheet preprocessor for the Scrixel game engine.

## Installation

`npm install --save scrixel-spritesheet`

## Examples

```
const scrixelSpriteSheet = require("scrixel-spritesheet");

scrixelSpriteSheet(16, 16, "./res/minecraft.png").then(sprites => {
    const base64Sprites = sprites.map(sprite => sprite.toString("base64"));

    base64Sprites.forEach(sprite => console.log(sprite));
});
```

## Tests

In the `scrixel-spritesheet` root directory, run:

```
npm install
npm test
```

## Author

Jordan Lord

## License 

GPLv3. See [LICENSE.txt](LICENSE.txt).
