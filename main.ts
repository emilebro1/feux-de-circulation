input.onButtonPressed(Button.A, function () {
    let cligno = 0
    while (cligno == 0) {
        pins.digitalWritePin(DigitalPin.P16, 0)
    }
    pins.digitalWritePin(DigitalPin.P8, 1)
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.pause(20000)
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P16, 1)
    pins.digitalWritePin(DigitalPin.P0, 0)
    pieton = 0
    pieton = 1
})
let pieton = 0
let temps = 20
pins.digitalWritePin(DigitalPin.P16, 1)
basic.forever(function () {
    while (pieton == 0) {
        if (temps == 20) {
            pins.digitalWritePin(DigitalPin.P0, 1)
            basic.pause(5000)
            pins.digitalWritePin(DigitalPin.P0, 0)
            temps = 40
        }
        if (temps == 40) {
            pins.digitalWritePin(DigitalPin.P1, 1)
            basic.pause(5000)
            pins.digitalWritePin(DigitalPin.P1, 0)
            temps = 60
        }
        if (temps == 60) {
            pins.digitalWritePin(DigitalPin.P2, 1)
            basic.pause(5000)
            pins.digitalWritePin(DigitalPin.P2, 0)
            temps = 20
        }
    }
})
