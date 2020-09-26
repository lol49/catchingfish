sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
})
let Ducky: Sprite = null
scene.setBackgroundColor(9)
let Snake = sprites.create(img`
    . . . . . c c c c c c c . . . . 
    . . . . c 6 7 7 7 7 7 6 c . . . 
    . . . c 7 c 6 6 6 6 c 7 6 c . . 
    . . c 6 7 6 f 6 6 f 6 7 7 c . . 
    . . c 7 7 7 7 7 7 7 7 7 7 c . . 
    . . f 7 8 1 f f 1 6 7 7 7 f . . 
    . . f 6 f 1 f f 1 f 7 7 7 f . . 
    . . . f f 2 2 2 2 f 7 7 6 f . . 
    . . c c f 2 2 2 2 7 7 6 f c . . 
    . c 7 7 7 7 7 7 7 7 c c 7 7 c . 
    c 7 1 1 1 7 7 7 7 f c 6 7 7 7 c 
    f 1 1 1 1 1 7 6 f c c 6 6 6 c c 
    f 1 1 1 1 1 1 6 6 c 6 6 6 c . . 
    f 6 1 1 1 1 1 6 6 6 6 6 6 c . . 
    . f 6 1 1 1 1 1 6 6 6 6 c . . . 
    . . f f c c c c c c c c . . . . 
    `, SpriteKind.Player)
Ducky.setPosition(80, 60)
let Fishy = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . c c c c c c . . . 
    . . . . . . c 5 5 5 5 5 c c . . 
    . . . . . c 5 5 5 5 5 5 5 5 c . 
    . . . . c 6 6 6 6 6 6 5 5 5 c . 
    . . . . c 6 6 6 6 1 6 6 c c . . 
    . . . . c 1 1 6 6 1 1 1 c . . . 
    . . . c 1 1 1 1 6 1 1 1 c . . . 
    . . . c 1 1 1 1 6 1 1 1 6 6 c c 
    . . c c 6 1 f 1 6 1 6 1 5 5 5 c 
    . . c c 6 1 1 1 1 1 6 1 6 6 5 c 
    . c c 6 6 1 1 1 1 1 6 1 f 6 5 c 
    f 6 6 6 1 1 1 1 1 6 6 6 f . c c 
    f f f f f 1 1 1 6 6 5 5 5 f . . 
    . . . . . f f f 5 5 5 5 5 f . . 
    . . . . . . . . f f f f f f . . 
    `, SpriteKind.Food)
Ducky.setPosition(randint(scene.screenWidth(), 10), randint(0, scene.screenHeight()))
game.onUpdate(function () {
    if (controller.left.isPressed()) {
        Ducky.x += -5
    } else if (controller.right.isPressed()) {
        Ducky.x += 5
    } else if (controller.up.isPressed()) {
        Ducky.y += -5
    } else if (controller.down.isPressed()) {
        Ducky.y += 5
    }
})
