radio.onReceivedString(function (receivedString) {
    if (receivedString == East) {
        basic.showArrow(ArrowNames.East)
        DFRobotMaqueenPlus.mototStop(Motors.M2)
        DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 50)
    } else if (receivedString == South) {
        basic.showArrow(ArrowNames.South)
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CCW, 50)
    } else if (receivedString == West) {
        basic.showArrow(ArrowNames.West)
        DFRobotMaqueenPlus.mototStop(Motors.M1)
        DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 50)
    } else if (receivedString == North) {
        basic.showArrow(ArrowNames.North)
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 50)
    } else {
        basic.showIcon(IconNames.Happy)
        DFRobotMaqueenPlus.mototStop(Motors.ALL)
    }
})
let North = ""
let West = ""
let South = ""
let East = ""
joystickbit.initJoystickBit()
radio.setGroup(69)
basic.forever(function () {
    if (joystickbit.getRockerValue(joystickbit.rockerType.X) <= 200) {
        radio.sendString("" + (East))
        joystickbit.Vibration_Motor(100)
        basic.showArrow(ArrowNames.East)
    }
    if (joystickbit.getRockerValue(joystickbit.rockerType.Y) <= 200) {
        radio.sendString("" + (South))
        joystickbit.Vibration_Motor(100)
        basic.showArrow(ArrowNames.South)
    }
    if (joystickbit.getRockerValue(joystickbit.rockerType.X) >= 800) {
        radio.sendString("" + (West))
        joystickbit.Vibration_Motor(100)
        basic.showArrow(ArrowNames.West)
    }
    if (joystickbit.getRockerValue(joystickbit.rockerType.Y) >= 800) {
        radio.sendString("" + (North))
        joystickbit.Vibration_Motor(100)
        basic.showArrow(ArrowNames.North)
    }
    basic.clearScreen()
})
