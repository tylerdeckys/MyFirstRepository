// basic.showIcon(IconNames.Rabbit)
// basic.pause(100)
// basic.showLeds(`
// . . . . #
// . . . . #
// . . # # #
// . . . . .
// . . . . .
// `)

//this is a comment and it is ignored and not run

let n: number = 3
let ms: number = 1000

input.onButtonPressed(Button.A, function () {
    n=n*2
    ms=ms/2
})

function proc1(a:number, time : number){
    basic.showNumber(a)
    basic.pause(time)
    basic.clearScreen()
    basic.pause(time/2)
}

basic.forever(function () {
    proc1(n,ms)
})
