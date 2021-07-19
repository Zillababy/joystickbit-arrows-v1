joystickbit.initJoystickBit()
radio.setGroup(1)
basic.showIcon(IconNames.Heart)
music.startMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.Once)
basic.forever(function () {
    radio.sendNumber(1)
    if (joystickbit.getRockerValue(joystickbit.rockerType.X) <= 200) {
        radio.sendString("R")
        joystickbit.Vibration_Motor(100)
        basic.showArrow(ArrowNames.East)
    }
    if (joystickbit.getRockerValue(joystickbit.rockerType.Y) <= 200) {
        radio.sendString("B")
        joystickbit.Vibration_Motor(100)
        basic.showArrow(ArrowNames.South)
    }
    if (joystickbit.getRockerValue(joystickbit.rockerType.X) >= 800) {
        radio.sendString("L")
        joystickbit.Vibration_Motor(100)
        basic.showArrow(ArrowNames.West)
    }
    if (joystickbit.getRockerValue(joystickbit.rockerType.Y) >= 800) {
        radio.sendString("F")
        joystickbit.Vibration_Motor(100)
        basic.showArrow(ArrowNames.North)
    }
})
