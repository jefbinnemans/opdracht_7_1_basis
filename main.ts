input.onButtonPressed(Button.A, function () {
    aantal_sprongen = aantal_sprongen + 1
})
input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < aantal_sprongen; index++) {
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            . . # . .
            . # . # .
            `)
        basic.showLeds(`
            . . # . .
            . # # # .
            . . # . .
            . # . # .
            . . . . .
            `)
    }
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    if (aantal_sprongen != 0) {
        aantal_sprongen = aantal_sprongen - 1
    }
})
let aantal_sprongen = 0
aantal_sprongen = 1
