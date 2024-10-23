pins.digitalWritePin(DigitalPin.P0, 0)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        servos.P2.setAngle(90)
    }
})
