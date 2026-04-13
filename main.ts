enum RadioMessage {
    message1 = 49434
}
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # # . . .
        . . # . .
        . # # # .
        . . # . .
        . . . . .
        `)
    cyberbot.navDuration(cyberbot.NavDirection.Left, 0.4)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . # #
        . . # . .
        . # # # .
        . . # . .
        . . . . .
        `)
    cyberbot.navDuration(cyberbot.NavDirection.Right, 0.4)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    cyberbot.navDuration(cyberbot.NavDirection.Reverse, 1)
})
basic.showLeds(`
    . . # . .
    . . # . .
    # . # . #
    . # # # .
    . . # . .
    `)
