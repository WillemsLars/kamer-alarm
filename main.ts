input.onPinReleased(TouchPin.P2, function () {
    while (alarm == true) {
        music.playTone(494, music.beat(BeatFraction.Whole))
        music.playTone(349, music.beat(BeatFraction.Whole))
    }
})
input.onButtonPressed(Button.AB, function () {
    if (alarm == true) {
        alarm = false
    } else {
        basic.showIcon(IconNames.Yes)
        basic.pause(5000)
        alarm = false
    }
})
let alarm = false
alarm = false
basic.forever(function () {
    while (alarm == true) {
        basic.showIcon(IconNames.Ghost)
    }
})
