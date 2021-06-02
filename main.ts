let response = 0
radio.onReceivedString(function (receivedString) {
    if (receivedString == "temp") {
        response = input.temperature()
    } else if (receivedString == "light") {
        response = input.lightLevel()
    } else if (receivedString == "heading") {
        response = input.compassHeading()
    } else if (receivedString == "accel") {
        response = input.acceleration(Dimension.Strength)
    }
    radio.sendValue(receivedString, response)
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 3; index++) {
        radio.sendString("heading")
        radio.setGroup(0)
        radio.sendString("temp")
        radio.sendString("light")
        radio.sendString("ceccel")
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . # . # .
            . . # . .
            . # . # .
            . . . . .
            `)
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.showLeds(`
            # . . . #
            . # . # .
            . . . . .
            . # . # .
            # . . . #
            `)
        basic.showLeds(`
            # . . . #
            . . . . .
            . . . . .
            . . . . .
            # . . . #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        music.startMelody(music.builtInMelody(Melodies.Ringtone), MelodyOptions.Once)
        basic.clearScreen()
        basic.showLeds(`
            . # . # .
            . . . . .
            . . . . .
            . . . . .
            # . # . #
            `)
        basic.showLeds(`
            . # . # .
            . # . # .
            . . . . .
            # . # . #
            # . # . #
            `)
        basic.showLeds(`
            . # . # .
            . # . # .
            # # # # #
            # . # . #
            # . # . #
            `)
        basic.showLeds(`
            . # . # .
            # # # # #
            # # # # #
            # # # # #
            # . # . #
            `)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.showLeds(`
            # . # . #
            # # # # #
            # # # # #
            # # # # #
            . # . # .
            `)
        basic.showLeds(`
            # . # . #
            # . # . #
            # # # # #
            . # . # .
            . # . # .
            `)
        basic.showLeds(`
            # . # . #
            # . # . #
            . . . . .
            . # . # .
            . # . # .
            `)
        basic.showLeds(`
            # . . . #
            . . . . .
            . . . . .
            . . . . .
            . # . # .
            `)
        basic.clearScreen()
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . # # # .
            . # . # .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . # . . .
            # # # . .
            # . # . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . # .
            . . # # #
            . . # . #
            `)
        basic.showLeds(`
            . . # . .
            . . . . .
            . . # . .
            . # # # .
            . # . # .
            `)
        music.playTone(466, music.beat(BeatFraction.Whole))
        basic.showLeds(`
            . . . . .
            . . . . .
            . # . . .
            # # # . .
            # . # . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . # .
            . . # # #
            . . # . #
            `)
        basic.showLeds(`
            . # . . .
            . . . . .
            . . # . .
            . # # # .
            . # . # .
            `)
        basic.showLeds(`
            . . . . .
            . # . . .
            . . # . .
            . # # # .
            . # . # .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . # # . .
            . # # # .
            . # . # .
            `)
        basic.showLeds(`
            . # . # .
            # . . . #
            . . . . .
            # . . . #
            . # . # .
            `)
        music.playTone(932, music.beat(BeatFraction.Double))
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
        music.playTone(349, music.beat(BeatFraction.Quarter))
        music.playTone(330, music.beat(BeatFraction.Quarter))
        music.playTone(262, music.beat(BeatFraction.Quarter))
        music.playTone(247, music.beat(BeatFraction.Quarter))
        music.playTone(220, music.beat(BeatFraction.Quarter))
        music.playTone(196, music.beat(BeatFraction.Quarter))
        music.playTone(175, music.beat(BeatFraction.Quarter))
        music.playTone(165, music.beat(BeatFraction.Quarter))
        music.playTone(165, music.beat(BeatFraction.Quarter))
        music.playTone(147, music.beat(BeatFraction.Quarter))
        music.playTone(131, music.beat(BeatFraction.Quarter))
        music.playTone(139, music.beat(BeatFraction.Double))
        basic.clearScreen()
        basic.clearScreen()
        basic.showLeds(`
            . . # . .
            . . . . .
            . . . . .
            . . . . .
            . # # # .
            `)
        basic.showLeds(`
            . . . . .
            . # . . .
            . . . . .
            . . . . .
            # # # . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            # . . . .
            . . . . .
            . # # # .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . # . . .
            . # # # .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . # # # .
            `)
        basic.showLeds(`
            . . . . .
            . . . # .
            . . . . .
            . . . . .
            # # # . .
            `)
        basic.showLeds(`
            . . . . #
            . . . . .
            . . . . .
            . . . . .
            # # # . .
            `)
        basic.showLeds(`
            . . . . .
            . . . # .
            . . . . .
            . . . . .
            # # # . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . # # # .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . # # # .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . # . . .
            . . # # #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # # # # .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . # # # .
            `)
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
        music.playTone(932, music.beat(BeatFraction.Double))
        basic.clearScreen()
        music.startMelody(music.builtInMelody(Melodies.Nyan), MelodyOptions.Once)
        basic.showLeds(`
            . . # . #
            # # # # #
            # # # # #
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . # . #
            # # # # #
            # # # # #
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . # . # .
            # # # # .
            # # # # .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . # . # .
            # # # # .
            # # # # .
            `)
        basic.showLeds(`
            . . . . .
            . . # . #
            # # # # #
            # # # # #
            . . . . .
            `)
        basic.showLeds(`
            . . # . #
            # # # # #
            # # # # #
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . # . # .
            # # # # .
            # # # # .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # . # . .
            # # # . .
            # # # . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            # . # . .
            # # # . .
            # # # . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . # . # .
            # # # # .
            # # # # .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . # . #
            # # # # #
            # # # # #
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . # .
            . # # # #
            . # # # #
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . #
            . . # # #
            . . # # #
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . # #
            . . . # #
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . #
            . . . . #
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . . #
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . # #
            . . . # #
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . #
            . . # # #
            . . # # #
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . # .
            . # # # #
            . # # # #
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . # . #
            # # # # #
            # # # # #
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . # . #
            # # # # #
            # # # # #
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . # . # .
            # # # # .
            # # # # .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . # . #
            # # # # #
            # # # # #
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . #
            # # # # #
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . # . #
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . # . #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . # . # .
            # # # # .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . # . # .
            # # # # .
            # # # # .
            `)
        basic.showLeds(`
            . . . . .
            . # . # .
            # # # # .
            # # # # .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . # . #
            # # # # #
            # # # # #
            . . . . .
            `)
        basic.pause(3000)
        basic.showLeds(`
            . . . . .
            . . . # .
            . # # # #
            . # # # #
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . #
            . . # # #
            . . # # #
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . # #
            . . . # #
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . #
            . . . . #
            . . . . .
            `)
        basic.clearScreen()
    }
})
