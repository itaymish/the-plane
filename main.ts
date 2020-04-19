enum ActionKind {
    Walking,
    Idle,
    Jumping,
    flying
}
namespace SpriteKind {
    export const Weapon = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    plane.setPosition(Math.randomRange(0, 160), Math.randomRange(0, 120))
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    weaponplane = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . f . . . . . . . . 
. . . . . . f 5 f . . . . . . . 
. . . . . f 5 5 5 f . . . . . . 
. . . . . f d d d f . . . . . . 
. . . . . f f d f f . . . . . . 
. . . . . f d d d f . . . . . . 
. . . . . f f d f f . . . . . . 
. . . . . f d d d f . . . . . . 
. . . . . f f d f f . . . . . . 
. . . . . f d d d f . . . . . . 
. . . . . . f f f . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, plane, 0, -140)
    weaponplane.setKind(SpriteKind.Weapon)
    music.pewPew.play()
})
sprites.onOverlap(SpriteKind.Weapon, SpriteKind.Projectile, function (sprite, otherSprite) {
    sprite.destroy()
    otherSprite.destroy(effects.confetti, 500)
    info.changeScoreBy(1)
    music.powerUp.play()
})
info.onLifeZero(function () {
    game.over(false, effects.clouds)
})
let weaponplane: Sprite = null
let plane: Sprite = null
game.setDialogCursor(img`
. . . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . . . 
. . 9 9 9 9 9 9 9 9 9 9 9 9 9 f f f f f f 9 9 f f f f f f 9 . . 
. 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f f f f f 9 9 f f f f f f 9 9 . 
9 9 9 9 9 9 9 9 9 9 9 9 9 f f e e e e e e f f e e e e e e f f 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 f f e e e e e e f f e e e e e e f f 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f f f f f e e f f f f f f 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f f f f f e e f f f f f f 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f d d f f 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f d d f f 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f d d f f 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f d d f f 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 f f f f 9 9 9 9 9 9 f f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 f f f f 9 9 9 9 9 9 f f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 f f e e e e f f 9 9 f f e e e e f f 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 f f e e e e f f 9 9 f f e e e e f f 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 f f f f e e f f e e f f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 f f f f e e f f e e f f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 f f e e f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 f f e e f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 f f d d f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 f f d d f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 f f d d f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 f f d d f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
. 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
. . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . . 
. . . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . . . 
`)
game.splash("The Plane", "Press A to start")
if (game.ask("Do you know how to play?", "A-NO B-YES") && controller.A.isPressed()) {
    game.showLongText("You're the plane.", DialogLayout.Top)
    game.showLongText("W, A, S, D or arrows keys to move.", DialogLayout.Top)
    game.showLongText("A to shoot the eagles.", DialogLayout.Top)
    game.showLongText("Don't touch the eagles.", DialogLayout.Top)
    game.showLongText("Every hit is one point.", DialogLayout.Top)
    game.showLongText("Have a nice flight!", DialogLayout.Top)
} else {
    game.showLongText("OK, so let's start!", DialogLayout.Top)
}
info.setLife(3)
info.setScore(0)
plane = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . f . . . . . . . 
. . . . . . . f 8 f . . . . . . 
. . . f . . f d d d f . . f . . 
. . f d f . f 8 d 8 f . f d f . 
. f d d d f f d d d f f d d d f 
. f d d 4 d d 8 d 8 d d 4 d d f 
. . f d d 4 d d d d d 4 d d f . 
. . . f d d d 8 d 8 d d d f . . 
. . . . f f f d d d f f f . . . 
. . . . . . f 8 d 8 f . . . . . 
. . . . . . f d d d f . . . . . 
. . . . . . f 8 d 8 f . . . . . 
. . . . . . . f 4 f . . . . . . 
. . . . . . . . f . . . . . . . 
`, SpriteKind.Player)
plane.setPosition(Math.randomRange(0, 160), Math.randomRange(0, 120))
let bird = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . f f . . . f f . . . . . 
. . . f e e f . f e e f . . . . 
. . . . f f e f e f f . . . . . 
. . . . . . f e f . . . . . . . 
. . . . . . f d f . . . . . . . 
. . . . . . f d f . . . . . . . 
. . . . . . . f . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, 50, 0)
scene.setBackgroundColor(9)
plane.setPosition(80, 60)
controller.moveSprite(plane)
plane.setFlag(SpriteFlag.StayInScreen, true)
let anim = animation.createAnimation(ActionKind.flying, 1000)
bird.setFlag(SpriteFlag.StayInScreen, true)
game.onUpdateInterval(100, function () {
    plane.startEffect(effects.spray)
})
game.onUpdateInterval(100, function () {
    effects.clouds.startScreenEffect()
})
forever(function () {
    animation.runImageAnimation(
    bird,
    [img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . f f . . . f f . . . . . 
. . . f e e f . f e e f . . . . 
. . . . f f e f e f f . . . . . 
. . . . . . f e f . . . . . . . 
. . . . . . f d f . . . . . . . 
. . . . . . f d f . . . . . . . 
. . . . . . . f . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . f f f . f f f . . . . . 
. . . f e e e f e e e f . . . . 
. . . . f f f e f f f . . . . . 
. . . . . . f d f . . . . . . . 
. . . . . . f d f . . . . . . . 
. . . . . . . f . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`],
    400,
    true
    )
    music.playMelody("C E G B C5 B G E ", 240)
})
game.onUpdateInterval(1000, function () {
    bird = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . f f . . . f f . . . . . 
. . . f e e f . f e e f . . . . 
. . . . f f e f e f f . . . . . 
. . . . . . f e f . . . . . . . 
. . . . . . f d f . . . . . . . 
. . . . . . f d f . . . . . . . 
. . . . . . . f . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, 25, 0)
    bird.y = Math.randomRange(0, scene.screenHeight())
})
