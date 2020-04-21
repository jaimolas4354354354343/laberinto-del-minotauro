namespace SpriteKind {
    export const novia = SpriteKind.create()
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.darkGroundCenter, function (sprite, location) {
    mySprite.say("por fin")
    tiles.setTilemap(tiles.createTilemap(
            hex`1000100002020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020502020202020202020202020202020202020202020202020202020202020202020207020207020202020202020202020202020202020202020202020202020202020202020202020202020202020202020207020207020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020203020202020202020202020202020202`,
            img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,
            [myTiles.tile0,sprites.dungeon.purpleInnerSouthEast,sprites.dungeon.floorLight0,sprites.dungeon.stairSouth,sprites.builtin.forestTiles0,sprites.builtin.coral5,sprites.dungeon.floorLightMoss,sprites.dungeon.floorLight2],
            TileScale.Sixteen
        ))
    info.stopCountdown()
    tiles.placeOnRandomTile(mySprite, sprites.dungeon.stairNorth)
    mySprite2 = sprites.create(img`
. . . . . . 5 . 5 . . . . . . . 
. . . . . f 5 5 5 f f . . . . . 
. . . . f 1 5 2 5 1 6 f . . . . 
. . . f 1 6 6 6 6 6 1 6 f . . . 
. . . f 6 6 f f f f 6 1 f . . . 
. . . f 6 f f d d f f 6 f . . . 
. . f 6 f d f d d f d f 6 f . . 
. . f 6 f d 3 d d 3 d f 6 f . . 
. . f 6 6 f d d d d f 6 6 f . . 
. f 6 6 f 3 f f f f 3 f 6 6 f . 
. . f f d 3 5 3 3 5 3 d f f . . 
. . f d d f 3 5 5 3 f d d f . . 
. . . f f 3 3 3 3 3 3 f f . . . 
. . . f 3 3 5 3 3 5 3 3 f . . . 
. . . f f f f f f f f f f . . . 
. . . . . f f . . f f . . . . . 
`, SpriteKind.novia)
    mySprite.setPosition(75, 64)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorOpenEast, function (sprite, location) {
    info.changeScoreBy(4)
    tiles.setTilemap(tiles.createTilemap(
            hex`100010001c171c181818181818171d1d171818081c1c1c181818171717171d1d1718171717171718171717171d1d1d1d172218181818181817171d1d1d1717171717171d18171717171d1d17171717171717171d1818181c1c1c17171717171c21171d1d1717171c1717171c1c1c1c171c1c1c171717171c1c1c1c1c1c1c171717171c17171717171c1c17171c1c1c17171c1c17171717171717191c1c1718171c1c17171717171717191919171718181c171717171717171b1b17171717171717171717171818181b1717171a1a1a1a1a1a17171718171817171a1a1a171717191919171718171818181a17171717191917171717171717171717171717171919191915`,
            img`
. 2 . . . . . . . 2 . . 2 . . . 
. . . . . . 2 2 2 2 . . 2 . 2 2 
2 2 2 . 2 2 2 2 . . . . 2 . . . 
. . . . 2 2 . . . 2 2 2 2 2 2 . 
. 2 2 2 2 . . 2 2 2 2 2 2 2 2 . 
. . . . . . 2 2 2 2 2 . . 2 . . 
2 2 2 . 2 2 2 . . . . 2 . . . 2 
2 2 2 . . . . . . . 2 2 2 2 . 2 
2 2 2 2 . . 2 2 . . . 2 2 . . 2 
2 2 2 2 2 2 . . . 2 . 2 . . 2 2 
2 2 2 2 2 . . . 2 2 . . . 2 2 2 
2 2 2 2 . . 2 2 2 2 2 2 2 2 2 2 
2 . . . . 2 2 2 . . . . . . 2 2 
2 . 2 . 2 2 . . . 2 2 2 . . . 2 
2 . 2 . . . . 2 2 2 2 . . 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 . . . . . 
`,
            [myTiles.tile0,sprites.dungeon.buttonTealDepressed,sprites.dungeon.hazardHole,sprites.dungeon.buttonPink,sprites.dungeon.buttonOrangeDepressed,sprites.dungeon.buttonTeal,sprites.builtin.field1,sprites.dungeon.hazardSpike,sprites.dungeon.stairLadder,sprites.dungeon.doorOpenSouth,sprites.dungeon.doorClosedNorth,sprites.dungeon.doorOpenNorth,sprites.dungeon.floorLight0,sprites.dungeon.floorLightMoss,sprites.dungeon.floorLight4,sprites.dungeon.floorLight5,sprites.dungeon.floorLight3,sprites.dungeon.floorLight2,sprites.dungeon.doorLockedEast,sprites.dungeon.doorLockedNorth,sprites.dungeon.floorLight1,sprites.dungeon.stairLarge,sprites.dungeon.chestClosed,sprites.builtin.forestTiles0,sprites.castle.tileDarkGrass2,sprites.castle.tileDarkGrass3,sprites.castle.tileDarkGrass1,sprites.castle.tileGrass1,sprites.castle.tileGrass3,sprites.castle.tileGrass2,sprites.castle.tilePath9,sprites.dungeon.purpleSwitchUp,sprites.dungeon.purpleOuterNorth2,sprites.dungeon.purpleSwitchDown,sprites.dungeon.collectibleInsignia],
            TileScale.Sixteen
        ))
    tiles.placeOnRandomTile(mySprite, sprites.dungeon.stairLarge)
    info.startCountdown(20)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairLadder, function (sprite, location) {
    tiles.setTilemap(tiles.createTilemap(
            hex`1000100001010101010202070101010102020101010101010202020202020101010202010101010101020202020102020101020101010101010102020102020101020201010102010102020101010201010202020102010202010101010102020102020101020101020201010101020201010201010201010102020202020201010202010102010101010101010101010201010101020102020202020201010101020201020202010101010102010101010102020202010101010101020101010101010201010101020201010201010101010102010101010202020202010202020102020101010101020202010102020202020101010101010201010402020202020201`,
            img`
2 2 2 2 2 2 2 . . . . . 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 . . . 2 2 2 
2 2 2 2 2 2 2 2 2 . 2 2 . . 2 2 
2 2 2 2 2 2 2 2 . 2 2 . . 2 2 2 
2 2 2 2 2 2 2 . . . 2 . . 2 2 2 
2 2 . 2 2 . . . . . 2 2 . 2 2 2 
2 2 . . 2 2 . . . . 2 2 . . 2 2 
2 2 . . . 2 2 2 2 2 2 . . 2 2 2 
2 2 . . . . . . . . . . 2 2 2 2 
2 2 . 2 2 2 2 2 2 . . . . 2 2 2 
2 2 2 2 2 2 2 2 2 . . . . . 2 2 
2 2 2 2 2 2 2 2 2 . . . . . . 2 
2 2 2 2 2 2 2 2 2 . . . . . . 2 
2 2 2 2 2 2 2 2 2 . 2 2 2 . 2 2 
2 2 2 2 2 2 2 2 . . 2 2 2 2 2 2 
2 2 2 2 2 2 . . . 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.dungeon.hazardWater,sprites.dungeon.hazardLava0,sprites.dungeon.stairLarge,sprites.dungeon.stairLadder,sprites.dungeon.collectibleInsignia,sprites.dungeon.buttonTeal,sprites.dungeon.hazardSpike],
            TileScale.Sixteen
        ))
    info.startCountdown(15)
    tiles.placeOnRandomTile(mySprite, sprites.dungeon.stairLadder)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenSwitchUp, function (sprite, location) {
    effects.confetti.startScreenEffect()
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.purpleSwitchDown, function (sprite, location) {
    info.changeScoreBy(4)
    tiles.setTilemap(tiles.createTilemap(
            hex`100010001717171717171717171717171717171717171601010101010101010107171717171715190f0f0f0f0f0f0c0b06171717171703050505050505070d0e06171717171717171717171717020c0b06171717171717171717171717020d0e06171717171717171717171717020c0b06171717171712010101010101040d0e06171717171710180f0f0f0f0f0f0f0f0617171717171105050505050505050504171717171717171717171717171717171717171717171717171717171717171717171717171717171717171717171717171717171717171717171717171717171717171717171717171717171717171717171717171717171717171717171717171717`,
            img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 . . . . . . . . . 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 . . 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 . . 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 . . 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 . . 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 . . 2 2 2 2 
2 2 2 . . . . . . . . . 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.dungeon.purpleOuterNorth2,sprites.dungeon.purpleOuterWest2,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.purpleOuterSouth2,sprites.dungeon.purpleOuterEast2,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.stairLarge,sprites.dungeon.purpleSwitchDown,sprites.dungeon.purpleSwitchUp,sprites.dungeon.purpleInnerNorthEast,sprites.dungeon.purpleInnerNorthWest,sprites.dungeon.purpleInnerSouthWest,sprites.dungeon.purpleInnerSouthEast,sprites.dungeon.floorDark0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.stairLadder,sprites.dungeon.purpleOuterWest1,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.floorLight2,sprites.dungeon.stairEast,sprites.dungeon.stairWest],
            TileScale.Sixteen
        ))
    tiles.placeOnRandomTile(mySprite, sprites.dungeon.stairEast)
    info.startCountdown(15)
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.coral5, function (sprite, location) {
    animation.runImageAnimation(
    mySprite,
    [img`
. . . . . f f f f f f . . . . . 
. . . f f e e e e f 2 f . . . . 
. . f f e e e e f 2 2 2 f . . . 
. . f e e e f f e e e e f . . . 
. . f f f f e e 2 2 2 2 e f . . 
. . f e 2 2 2 f f f f e 2 f . . 
. f f f f f f f e e e f f f . . 
. f f e 4 4 e b f 4 4 e e f . . 
. f e e 4 d 4 1 f d d e f f . . 
. . f e e e 4 d d d d f d d f . 
. . . f f e e 4 e e e f b b f . 
. . . . f 2 2 2 4 d d e b b f . 
. . . . e 2 2 2 e d d e b f . . 
. . . . f 4 4 4 f e e f f . . . 
. . . . . f f f f f f . . . . . 
. . . . . . f f f . . . . . . . 
`],
    500,
    false
    )
    animation.runImageAnimation(
    mySprite2,
    [img`
. . . . . . 5 . 5 . . . . . . . 
. . . . . f 5 5 5 f . . . . . . 
. . . . f 6 2 5 5 6 f . . . . . 
. . . f 6 6 6 6 1 6 6 f . . . . 
. . . f 6 6 6 6 6 1 6 f . . . . 
. . . f d f d 6 6 6 1 f . . . . 
. . . f d f d 6 6 6 6 f f . . . 
. . . f d 3 d d 6 6 6 f 6 f . . 
. . . . f d d d f f 6 f f . . . 
. . . . . f f 5 3 f 6 6 6 f . . 
. . . . f 5 3 3 f f f f f . . . 
. . . . f 3 3 f d f . . . . . . 
. . . . . f 3 f d f . . . . . . 
. . . . f 3 5 3 f d f . . . . . 
. . . . f f 3 3 f f . . . . . . 
. . . . . . f f f . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . 5 . 5 . . . . . . 
. . . . . . f 5 5 5 f . . . . . 
. 3 . 3 . f 6 2 5 5 6 f . . . . 
. . . . f 6 6 6 6 1 6 6 f . . . 
. . . . f 6 6 6 6 6 1 6 f . . . 
. . . . f d f d 6 6 6 1 f . . . 
. . . . f d f d 6 6 6 6 f f . . 
. . . . f d 3 d d 6 6 6 f 6 f . 
. . . . . f d d d f f 6 f f . . 
. . . . . . f f 3 3 f f 6 6 f . 
. . . . . f d d d d f f f f . . 
. . . . . f d d d f 3 f . . . . 
. . . . . . f f f d 5 3 f . . . 
. . . . . f f f 3 3 f f . . . . 
. . . . . f f f f f f f . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . 5 . 5 . . . . . . 
. 3 . 3 . . f 5 5 5 f . . . . . 
3 3 3 3 3 f 6 2 5 5 6 f . . . . 
. . . . f 6 6 6 6 1 6 6 f . . . 
. . . . f 6 6 6 6 6 1 6 f . . . 
. . . . f d f d 6 6 6 1 f . . . 
. . . . f d f d 6 6 6 6 f f . . 
. . . . f d 3 d d 6 6 6 f 6 f . 
. . . . . f d d d f f 6 f f . . 
. . . . . . f f 3 3 f f 6 6 f . 
. . . . . f d d d d f f f f . . 
. . . . . f d d d f 3 f . . . . 
. . . . . . f f f d 5 3 f . . . 
. . . . . f f f 3 3 f f . . . . 
. . . . . f f f f f f f . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. 3 . 3 . . . 5 . 5 . . . . . . 
3 3 3 3 3 . f 5 5 5 f . . . . . 
. 3 3 3 . f 6 2 5 5 6 f . . . . 
. . . . f 6 6 6 6 1 6 6 f . . . 
. . . . f 6 6 6 6 6 1 6 f . . . 
. . . . f d f d 6 6 6 1 f . . . 
. . . . f d f d 6 6 6 6 f f . . 
. . . . f d 3 d d 6 6 6 f 6 f . 
. . . . . f d d d f f 6 f f . . 
. . . . . . f f 3 3 f f 6 6 f . 
. . . . . f d d d d f f f f . . 
. . . . . f d d d f 3 f . . . . 
. . . . . . f f f d 5 3 f . . . 
. . . . . f f f 3 3 f f . . . . 
. . . . . f f f f f f f . . . . 
`,img`
. 3 . 3 . . . . . . . . . . . . 
3 3 3 3 3 . . 5 . 5 . . . . . . 
. 3 3 3 . . f 5 5 5 f . . . . . 
. . 3 . . f 6 2 5 5 6 f . . . . 
. . . . f 6 6 6 6 1 6 6 f . . . 
. . . . f 6 6 6 6 6 1 6 f . . . 
. . . . f d f d 6 6 6 1 f . . . 
. . . . f d f d 6 6 6 6 f f . . 
. . . . f d 3 d d 6 6 6 f 6 f . 
. . . . . f d d d f f 6 f f . . 
. . . . . . f f 3 3 f f 6 6 f . 
. . . . . f d d d d f f f f . . 
. . . . . f d d d f 3 f . . . . 
. . . . . . f f f d 5 3 f . . . 
. . . . . f f f 3 3 f f . . . . 
. . . . . f f f f f f f . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . 5 . 5 . . . . . . 
. . . . . . f 5 5 5 f . . . . . 
. . . . . f 6 2 5 5 6 f . . . . 
. . . . f 6 6 6 6 1 6 6 f . . . 
. . . . f 6 6 6 6 6 1 6 f . . . 
. . . . f d f d 6 6 6 1 f . . . 
. . . . f d f d 6 6 6 6 f f . . 
. . . . f d 3 d d 6 6 6 f 6 f . 
. . . . . f d d d f f 6 f f . . 
. . . . . . f f 3 3 f f 6 6 f . 
. . . . . f 5 3 3 d d f f f . . 
. . . . . f 3 3 3 f d d f . . . 
. . . . . . f 3 5 f f f . . . . 
. . . . . f 3 3 3 3 f . . . . . 
. . . . . . f f f f f . . . . . 
`],
    500,
    false
    )
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairWest, function (sprite, location) {
    info.changeScoreBy(4)
    tiles.setTilemap(tiles.createTilemap(
            hex`100010001c171c181818181818171d1d171818081c1c1c181818171717171d1d1718171717171718171717171d1d1d1d172218181818181817171d1d1d1717171717171d18171717171d1d17171717171717171d1818181c1c1c17171717171c21171d1d1717171c1717171c1c1c1c171c1c1c171717171c1c1c1c1c1c1c171717171c17171717171c1c17171c1c1c17171c1c17171717171717191c1c1718171c1c17171717171717191919171718181c171717171717171b1b17171717171717171717171818181b1717171a1a1a1a1a1a17171718171817171a1a1a171717191919171718171818181a17171717191917171717171717171717171717171919191915`,
            img`
. 2 . . . . . . . 2 . . 2 . . . 
. . . . . . 2 2 2 2 . . 2 . 2 2 
2 2 2 . 2 2 2 2 . . . . 2 . . . 
. . . . 2 2 . . . 2 2 2 2 2 2 . 
. 2 2 2 2 . . 2 2 2 2 2 2 2 2 . 
. . . . . . 2 2 2 2 2 . . 2 . . 
2 2 2 . 2 2 2 . . . . 2 . . . 2 
2 2 2 . . . . . . . 2 2 2 2 . 2 
2 2 2 2 . . 2 2 . . . 2 2 . . 2 
2 2 2 2 2 2 . . . 2 . 2 . . 2 2 
2 2 2 2 2 . . . 2 2 . . . 2 2 2 
2 2 2 2 . . 2 2 2 2 2 2 2 2 2 2 
2 . . . . 2 2 2 . . . . . . 2 2 
2 . 2 . 2 2 . . . 2 2 2 . . . 2 
2 . 2 . . . . 2 2 2 2 . . 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 . . . . . 
`,
            [myTiles.tile0,sprites.dungeon.buttonTealDepressed,sprites.dungeon.hazardHole,sprites.dungeon.buttonPink,sprites.dungeon.buttonOrangeDepressed,sprites.dungeon.buttonTeal,sprites.builtin.field1,sprites.dungeon.hazardSpike,sprites.dungeon.stairLadder,sprites.dungeon.doorOpenSouth,sprites.dungeon.doorClosedNorth,sprites.dungeon.doorOpenNorth,sprites.dungeon.floorLight0,sprites.dungeon.floorLightMoss,sprites.dungeon.floorLight4,sprites.dungeon.floorLight5,sprites.dungeon.floorLight3,sprites.dungeon.floorLight2,sprites.dungeon.doorLockedEast,sprites.dungeon.doorLockedNorth,sprites.dungeon.floorLight1,sprites.dungeon.stairLarge,sprites.dungeon.chestClosed,sprites.builtin.forestTiles0,sprites.castle.tileDarkGrass2,sprites.castle.tileDarkGrass3,sprites.castle.tileDarkGrass1,sprites.castle.tileGrass1,sprites.castle.tileGrass3,sprites.castle.tileGrass2,sprites.castle.tilePath9,sprites.dungeon.purpleSwitchUp,sprites.dungeon.purpleOuterNorth2,sprites.dungeon.purpleSwitchDown,sprites.dungeon.collectibleInsignia],
            TileScale.Sixteen
        ))
    tiles.placeOnRandomTile(mySprite, sprites.dungeon.collectibleInsignia)
    info.startCountdown(5)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorOpenNorth, function (sprite, location) {
    game.over(true)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    tiles.setTilemap(tiles.createTilemap(
            hex`10001000111112121212120f111313131111111111111211111112121113131313131311111212111111121112131311111113111112121212111211121111111111131111111111121112121211131313111311121211111211111111111111131313111212161112111111111111111111131112111111121111131313131313131311121112121211111311111111111114111212121111111113141414141411141111111211111111111111111114111411111112111111111111111111141114111111121212121212111111111411141114141111111111121111111114111411141111111111110d0e14141414111411141414141414140c0b11111111111415`,
            img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,
            [myTiles.tile0,sprites.dungeon.purpleOuterEast0,sprites.dungeon.purpleOuterWest0,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.purpleOuterEast2,sprites.dungeon.purpleOuterWest2,sprites.builtin.brick,sprites.dungeon.chestClosed,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.darkGroundCenter,sprites.dungeon.darkGroundNorth,sprites.dungeon.floorLight2,sprites.dungeon.floorLightMoss,sprites.dungeon.floorLight4,sprites.dungeon.floorLight0,sprites.dungeon.floorLight3,sprites.dungeon.chestOpen,sprites.dungeon.collectibleRedCrystal],
            TileScale.Sixteen
        ))
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorOpenWest, function (sprite, location) {
    info.changeScoreBy(4)
    tiles.placeOnRandomTile(mySprite, sprites.dungeon.doorOpenSouth)
    tiles.setTilemap(tiles.createTilemap(
            hex`100010000c0c02020202020c0c0e0f0c0c0c0c0c0c02020c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0202020202020c0c0c0c0c020202020202020c0c0c02020c0c0c020c0c0c0c0c0c02020c0c0c020c0c0c0c0c0c0c0c0c0c0c0c0202020202020c0c0c0c0c0c0c0c0c0c0c0c02020c020c020c0c0c0202020202020c02020c020c0202020c0c0c020c0c020c020c0c020c02020c0c0c0c02020c020c0c0c0c020c0c0c0c0c0c0c020c0c020c020c0c020c0c0c0c02020c020202020c02020202020202020202020c0c0c0c0c02020202020c0c0c0c0c0c0c0c0c0c020c0c0c020202020c0c020c0c0c0c0c0c0c0c0c0c0c0c02100d0202020c02020c0c0c0c0c`,
            img`
. . 2 2 2 2 2 . . . . . . . . . 
. 2 2 . . . . . . . . . . . . . 
. . . . . . . 2 2 2 2 2 2 . . . 
. . 2 2 2 2 2 2 2 . . . 2 2 . . 
. 2 . . . . . . 2 2 . . . 2 . . 
. . . . . . . . . . 2 2 2 2 2 2 
. . . . . . . . . . . . 2 2 . 2 
. 2 . . . 2 2 2 2 2 2 . 2 2 . 2 
. 2 2 2 . . . 2 . . 2 . 2 . . 2 
. 2 2 . . . . 2 2 . 2 . . . . 2 
. . . . . . . 2 . . 2 . 2 . . 2 
. . . . 2 2 . 2 2 2 2 . 2 2 2 2 
2 2 2 2 2 2 2 . . . . . 2 2 2 2 
2 . . . . . . . . . . 2 . . . 2 
2 2 2 . . 2 . . . . . . . . . . 
. . 2 . . 2 2 2 . 2 2 . . . . . 
`,
            [myTiles.tile0,sprites.dungeon.buttonTealDepressed,sprites.dungeon.hazardHole,sprites.dungeon.buttonPink,sprites.dungeon.buttonOrangeDepressed,sprites.dungeon.buttonTeal,sprites.builtin.field1,sprites.dungeon.collectibleRedCrystal,sprites.builtin.forestTiles6,sprites.builtin.forestTiles18,sprites.dungeon.collectibleBlueCrystal,sprites.dungeon.hazardWater,sprites.dungeon.floorLight1,sprites.dungeon.doorOpenSouth,sprites.dungeon.doorOpenNorth,sprites.dungeon.doorClosedNorth,sprites.dungeon.doorClosedSouth],
            TileScale.Sixteen
        ))
    info.startCountdown(20)
    effects.confetti.endScreenEffect()
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    tiles.setTilemap(tiles.createTilemap(
            hex`10001000111112121212120f111313131111111111111211111112121113131313131311111212111111121112131311111113111112121212111211121111111111131111111111121112121211131313111311121211111211111111111111131313111217161112111111111111111111131112111111121111131313131313131311121112121211111311111111111114111212121111111113141414141411141111111211111111111111111114111411111112111111111111111111141114111111121212121212111111111411141114141111111111121111111114111411141111111111110d0e14141414111411141414141414140c0b11111111111415`,
            img`
2 2 . . . . . . 2 . . . 2 2 2 2 
2 2 . 2 2 2 . . 2 . . . . . . 2 
2 . . 2 2 2 . 2 . . . 2 2 2 . 2 
2 . . . . 2 . 2 . 2 2 2 2 2 . 2 
2 2 2 2 . 2 . . . 2 . . . 2 . 2 
. . 2 2 . 2 2 2 2 2 2 2 . . . 2 
. . . 2 . 2 2 2 2 2 2 2 2 2 . 2 
. 2 2 2 . 2 2 . . . . . . . . 2 
. 2 . . . 2 2 . 2 2 2 2 2 2 . 2 
. . . 2 2 2 2 . . . . . . 2 . 2 
2 2 . 2 2 2 2 2 2 2 2 2 . 2 . 2 
2 2 . 2 2 2 2 2 2 2 2 2 . 2 . 2 
2 2 . . . . . . 2 2 2 2 . 2 . 2 
. . 2 2 2 2 2 . 2 2 2 2 . 2 . 2 
. 2 2 2 2 2 2 . . . . . . 2 . 2 
. . . . . . . . . 2 2 2 2 2 . . 
`,
            [myTiles.tile0,sprites.dungeon.purpleOuterEast0,sprites.dungeon.purpleOuterWest0,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.purpleOuterEast2,sprites.dungeon.purpleOuterWest2,sprites.builtin.brick,sprites.dungeon.chestClosed,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.darkGroundCenter,sprites.dungeon.darkGroundNorth,sprites.dungeon.floorLight2,sprites.dungeon.floorLightMoss,sprites.dungeon.floorLight4,sprites.dungeon.floorLight0,sprites.dungeon.floorLight3,sprites.dungeon.chestOpen,sprites.dungeon.collectibleRedCrystal],
            TileScale.Sixteen
        ))
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.purpleSwitchUp, function (sprite, location) {
    info.changeScoreBy(4)
    tiles.setTilemap(tiles.createTilemap(
            hex`1000100007070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070b0c0707070707070707070707070707040d0505060707070707070707070707030707070707070707070707070707070307070707070707070707070707070703070707070707070707070707070707030707070707070707070707070707070307070707070707070707070707070703070707070707070707070707070707030707070707070707070707070707070307070707070707070707070707070703070707070707070707070707070707010707070707070707`,
            img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 . . . . . 2 2 2 2 
2 2 2 2 2 2 2 . 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 . 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 . 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 . 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 . 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 . 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 . 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 . 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 . 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 . 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.dungeon.doorOpenSouth,sprites.dungeon.doorClosedSouth,sprites.vehicle.roadVertical,sprites.vehicle.roadIntersection2,sprites.vehicle.roadHorizontal,sprites.dungeon.doorOpenEast,sprites.dungeon.hazardWater,sprites.dungeon.purpleSwitchDown,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterNorthEast,sprites.vehicle.roadTurn1,sprites.vehicle.roadTurn2,sprites.vehicle.roadIntersection1],
            TileScale.Sixteen
        ))
    tiles.placeOnRandomTile(mySprite, sprites.dungeon.doorOpenSouth)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardSpike, function (sprite, location) {
    tiles.setTilemap(tiles.createTilemap(
            hex`10001000111112121212120f1113131311111111111112111111121211131313131313111112121111111211121313111111131111121212121112111211111111111311111111111211121212111313131113111212111112111111111111111313131112120a1112111111111111111111131112111111121111131313131313131311121112121211111311111111111114111212121111111113141414141411141111111211111111111111111114111411111112111111111111111111141114111111121212121212111111111411141114141111111111121111111114111411141111111111110d0e14141414111411141414141414140c0b11111111111415`,
            img`
2 2 . . . . . . 2 . . . 2 2 2 2 
2 2 . 2 2 2 . . 2 . . . . . . 2 
2 . . 2 2 2 . 2 . . . 2 2 2 . 2 
2 . . . . 2 . 2 . 2 2 2 2 2 . 2 
2 2 2 2 . 2 . . . 2 . . . 2 . 2 
. . 2 2 . 2 2 2 2 2 2 2 . . . 2 
. . . 2 . 2 2 2 2 2 2 2 2 2 . 2 
. 2 2 2 . 2 2 . . . . . . . . 2 
. 2 . . . 2 2 . 2 2 2 2 2 2 . 2 
. . . 2 2 2 2 . . . . . . 2 . 2 
2 2 . 2 2 2 2 2 2 2 2 2 . 2 . 2 
2 2 . 2 2 2 2 2 2 2 2 2 . 2 . 2 
2 2 . . . . . . 2 2 2 2 . 2 . 2 
. . 2 2 2 2 2 . 2 2 2 2 . 2 . 2 
. 2 2 2 2 2 2 . . . . . . 2 . 2 
. . . . . . . . . 2 2 2 2 2 . . 
`,
            [myTiles.tile0,sprites.dungeon.purpleOuterEast0,sprites.dungeon.purpleOuterWest0,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.purpleOuterEast2,sprites.dungeon.purpleOuterWest2,sprites.builtin.brick,sprites.dungeon.chestClosed,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.darkGroundCenter,sprites.dungeon.darkGroundNorth,sprites.dungeon.floorLight2,sprites.dungeon.floorLightMoss,sprites.dungeon.floorLight4,sprites.dungeon.floorLight0,sprites.dungeon.floorLight3],
            TileScale.Sixteen
        ))
    tiles.placeOnRandomTile(mySprite, sprites.dungeon.greenInnerSouthWest)
    info.startCountdown(29)
})
let mySprite2: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . f f f f . . . . . . . . . . . . . . . 
. . . f f f 8 8 f f f . . . . . . . . . . . . . 
. . f f f 8 8 8 8 f f f . . . . . . . . . . . . 
. f f f e e e e e e f f f . . . . . . . . . . . 
. f f e 8 8 8 8 8 8 e e f . . . . . . . . . . . 
. f e 8 f f f f f f 8 e f . . . . . . . . . . . 
. f f f f e e e e f f f f . . . . . . . . . . . 
f f e f b f 4 4 f b f e f f . . . . . . . . . . 
f e e 4 1 f d d f 1 4 e e f . . . . . . . . . . 
. f f f f d d d d d e e f . . . . . . . . . . . 
f d d d d f 4 4 4 e e f . . . . . . . . . . . . 
f b b b b f 8 8 8 8 f 4 e . . . . . . . . . . . 
f b b b b f 8 8 8 8 f d 4 . . . . . . . . . . . 
. f c c f 4 5 5 4 4 f 4 4 . . . . . . . . . . . 
. . f f f f f f f f . . . . . . . . . . . . . . 
. . . . f f . . f f . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
controller.moveSprite(mySprite)
animation.runImageAnimation(
mySprite,
[img`
. . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . f f f 8 8 f f f . . . . 
. . . f f f 8 8 8 8 f f f . . . 
. . f f f e e e e e e f f f . . 
. . f f e 8 8 8 8 8 8 e e f . . 
. f f e 8 f f f f f f 8 e f f . 
. f f f f f e e e e f f f f f . 
. . f e f b f 4 4 f b f e f . . 
. f f e 4 1 f d d f 1 4 e f . . 
f d f f e 4 d d d d 4 e f e . . 
f b f e f 8 8 8 8 e d d 4 e . . 
f b f 4 f 8 8 8 8 e d d e . . . 
f c f . f 4 4 5 5 f e e . . . . 
. f f . f f f f f f f . . . . . 
. . . . f f f . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . f f f 8 8 f f f . . . . 
. . . f f f 8 8 8 8 f f f . . . 
. . f f f e e e e e e f f f . . 
. . f e e 8 8 8 8 8 8 e f f . . 
. f f e 8 f f f f f f 8 e f f . 
. f f f f f e e e e f f f f f . 
. . f e f b f 4 4 f b f e f . . 
. . f e 4 1 f d d f 1 4 e f . . 
. . e f f f f d d d 4 e f . . . 
. . f d d d d f 8 8 8 f e f . . 
. . f b b b b f 8 8 8 f 4 e . . 
. . f b b b b f 5 4 4 f . . . . 
. . . f c c f f f f f f . . . . 
. . . . f f . . . f f f . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . f f f 8 8 f f f . . . . 
. . . f f f 8 8 8 8 f f f . . . 
. . f f f e e e e e e f f f . . 
. . f e e 8 8 8 8 8 8 e f f . . 
. f f e 8 f f f f f f 8 e f f . 
. f f f f f e e e e f f f f f . 
. . f e f b f 4 4 f b f e f . . 
. . f e 4 1 f d d f 1 4 e f f . 
. . e f e 4 d d d d 4 e f f d f 
. . e 4 d d e 8 8 8 8 f e f b f 
. . . e d d e 8 8 8 8 f 4 f b f 
. . . . e e f 5 5 4 4 f . f c f 
. . . . . f f f f f f f . f f . 
. . . . . . . . . f f f . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . f f f 8 8 f f f . . . . 
. . . f f f 8 8 8 8 f f f . . . 
. . f f f e e e e e e f f f . . 
. . f e e 8 8 8 8 8 8 e f f . . 
. f f e 8 f f f f f f 8 e f f . 
. f f f f f e e e e f f f f f . 
. . f e f b f 4 4 f b f e f . . 
. . f e 4 1 f d d f 1 4 e f f . 
. . e f e 4 d d d d 4 e f f d f 
. . e 4 d d e 8 8 8 8 f e f b f 
. . . e d d e 8 8 8 8 f 4 f b f 
. . . . e e f 5 5 4 4 f . f c f 
. . . . . f f f f f f f . f f . 
. . . . . . . . . f f f . . . . 
`],
500,
true
)
tiles.setTilemap(tiles.createTilemap(
            hex`100010000d0e0d0c0c0c0c0c0b0b0b0b0c0c0c0c0d0c0d0c0c0c0c0b0c0c0c0c0b0c0c0c0d0c0d0d0c0c0c0b0b0c0c0c0c0c0c0c0d110c131212130b0c0c070c0c0b0b0c0a110a0a0a0a13110c0707070c0c0b0c0a170c0a0c0c130c0c070a07070c0b0c06190c0c0c0a130707070a0a11180c0b0a0a0a070a0a0a0a0a0a0a0a11070c0c0710070711070e0a0a0a0a07070c0c0b070a070a0a0a0a0a07070d070c0c0b0b0f0a100a0a0a0a07070a0a0a0c0c0b0c070a0707070e07070a0a0a0a0c0c0b0c070a0a0a0a0a0a0a0a0a0a0a0c0c0b0c0e070a0a0a0a0a0a0a0a0a0a0b0b0b0c0c0f070f0a0a0a0a071007070b0c0c0c0a0c0a070707070f070c0c040c0c0c0c`,
            img`
. . . 2 2 2 2 2 . . . . 2 2 2 2 
. 2 . 2 2 2 2 . 2 2 2 2 . 2 2 2 
. 2 . . 2 2 2 . . 2 2 2 2 2 2 2 
. . 2 . . . . . 2 2 . 2 2 . . 2 
2 . 2 2 2 2 . 2 2 . . . 2 2 . 2 
2 . 2 2 2 2 . 2 2 . 2 . . 2 . 2 
. . 2 2 2 2 . . . . 2 2 . . 2 . 
2 2 2 . 2 2 2 2 2 2 2 2 . . 2 2 
. . . . . . . 2 2 2 2 . . 2 2 . 
. 2 . 2 2 2 2 2 . . . . 2 2 . . 
. 2 . 2 2 2 2 . . 2 2 2 2 2 . 2 
. 2 . . . . . . 2 2 2 2 2 2 . 2 
. 2 2 2 2 2 2 2 2 2 2 2 2 2 . 2 
. . 2 2 2 2 2 2 2 2 2 2 . . . 2 
2 . . . 2 2 2 2 . . . . . 2 2 2 
2 2 2 . . . . . . 2 2 . 2 2 2 2 
`,
            [myTiles.tile0,sprites.dungeon.purpleInnerNorthEast,sprites.dungeon.floorDark2,sprites.dungeon.floorDark0,sprites.dungeon.doorOpenSouth,sprites.dungeon.doorOpenNorth,sprites.dungeon.doorOpenWest,sprites.dungeon.floorDark3,sprites.dungeon.greenOuterEast2,sprites.dungeon.greenOuterNorth2,sprites.dungeon.hazardLava0,sprites.dungeon.floorDark5,sprites.dungeon.hazardLava1,sprites.dungeon.floorLight0,sprites.dungeon.floorLight1,sprites.dungeon.floorLight3,sprites.dungeon.floorLight5,sprites.dungeon.floorMixed,sprites.dungeon.floorLight4,sprites.dungeon.floorLight2,sprites.dungeon.stairLadder,sprites.dungeon.stairNorth,sprites.dungeon.stairEast,sprites.dungeon.greenSwitchUp,sprites.dungeon.purpleSwitchUp,sprites.dungeon.floorLightMoss],
            TileScale.Sixteen
        ))
tiles.placeOnRandomTile(mySprite, sprites.dungeon.doorOpenSouth)
scene.cameraFollowSprite(mySprite)
info.startCountdown(20)
info.setLife(4)
