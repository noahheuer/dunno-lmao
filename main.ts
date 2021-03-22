input.onButtonPressed(Button.A, function () {
    score += 1
})
input.onGesture(Gesture.Shake, function () {
	
})
let score = 0
basic.forever(function () {
    if (score == 1) {
        basic.showString("1")
    } else if (score == 2) {
        basic.showString("2")
    } else if (score == 3) {
        basic.showString("3")
    } else if (score == 4) {
        basic.showString("4")
    } else if (score == 5) {
        basic.showString("5")
    } else if (score == 6) {
        basic.showString("YOU WIN")
    }
})
