input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    music.stopMelody(MelodyStopOptions.All)
    for (let index = 0; index < 1; index++) {
        music.changeTempoBy(10)
        music.playTone(659, music.beat(BeatFraction.Half))
        music.playTone(622, music.beat(BeatFraction.Half))
        music.playTone(659, music.beat(BeatFraction.Half))
        music.playTone(622, music.beat(BeatFraction.Half))
        music.playTone(659, music.beat(BeatFraction.Half))
        music.playTone(494, music.beat(BeatFraction.Half))
        music.playTone(587, music.beat(BeatFraction.Half))
        music.playTone(523, music.beat(BeatFraction.Half))
        music.playTone(440, music.beat(BeatFraction.Half))
    }
})
input.onButtonPressed(Button.AB, function () {
    music.stopMelody(MelodyStopOptions.All)
    music.playTone(349, music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Half))
    music.playTone(440, music.beat(BeatFraction.Half))
    music.playTone(587, music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Half))
})
input.onButtonPressed(Button.B, function () {
    music.stopMelody(MelodyStopOptions.All)
    for (let index = 0; index < 2; index++) {
        music.changeTempoBy(10)
        music.playTone(440, music.beat(BeatFraction.Whole))
        music.playTone(440, music.beat(BeatFraction.Whole))
        music.playTone(494, music.beat(BeatFraction.Whole))
        music.playTone(523, music.beat(BeatFraction.Whole))
        music.playTone(523, music.beat(BeatFraction.Whole))
        music.playTone(523, music.beat(BeatFraction.Whole))
        music.playTone(349, music.beat(BeatFraction.Whole))
        music.playTone(349, music.beat(BeatFraction.Whole))
        music.playTone(330, music.beat(BeatFraction.Whole))
        music.playTone(330, music.beat(BeatFraction.Whole))
        music.playTone(330, music.beat(BeatFraction.Whole))
        music.playTone(392, music.beat(BeatFraction.Whole))
        music.playTone(392, music.beat(BeatFraction.Whole))
        music.playTone(392, music.beat(BeatFraction.Whole))
        music.playTone(392, music.beat(BeatFraction.Whole))
        music.playTone(392, music.beat(BeatFraction.Whole))
    }
})
input.onPinPressed(TouchPin.P1, function () {
    music.startMelody(music.builtInMelody(Melodies.Nyan), MelodyOptions.Once)
})
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        # . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        # . . . .
        # # . . .
        # . . . .
        . . . . .
        `)
    basic.showLeds(`
        # . . . .
        # # . . .
        # # # . .
        # # . . .
        # . . . .
        `)
    basic.showLeds(`
        . # . . .
        # # # . .
        # # # # .
        # # # . .
        . # . . .
        `)
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.showLeds(`
        . . . # .
        . . # # #
        . # # # #
        . . # # #
        . . . # .
        `)
    basic.showLeds(`
        . . . . #
        . . . # #
        . . # # #
        . . . # #
        . . . . #
        `)
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . # #
        . . . . #
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . #
        . . . . .
        . . . . .
        `)
})
