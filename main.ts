let Num1 = 0
let Num2 = 0
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 9; index++) {
        let numero_multiplicar = 0
        basic.showNumber(numero_multiplicar)
        Num1 = 0
        basic.showNumber(Num1 + 1)
        basic.pause(500)
        Num2 = 0
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.showNumber(Num2 + 1)
        basic.pause(500)
    }
})
