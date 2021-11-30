input.onButtonPressed(Button.A, function () {
    pieton = pieton + 1
    basic.pause(8000)
    pins.digitalWritePin(DigitalPin.P8, 1)
    clignote()
})
function clignote () {
    pins.digitalWritePin(DigitalPin.P8, 0)
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P8, 1)
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P8, 0)
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P8, 1)
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P8, 0)
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P8, 1)
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P8, 0)
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P8, 1)
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P8, 0)
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P8, 1)
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P8, 0)
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P8, 1)
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P8, 0)
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P8, 1)
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P8, 0)
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P8, 1)
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P8, 0)
}
let pieton = 0
let temps = 20
pins.digitalWritePin(DigitalPin.P8, 1)
pieton = 0
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
            basic.pause(9000)
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
basic.forever(function () {
    while (pieton == 1) {
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.pause(2000)
        pins.digitalWritePin(DigitalPin.P2, 1)
        pins.digitalWritePin(DigitalPin.P16, 1)
        pins.digitalWritePin(DigitalPin.P8, 0)
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.showNumber(8)
        basic.pause(1000)
        basic.showNumber(7)
        basic.pause(1000)
        basic.showNumber(6)
        basic.pause(1000)
        basic.showNumber(5)
        pins.digitalWritePin(DigitalPin.P16, 0)
        basic.pause(1000)
        basic.showNumber(4)
        basic.pause(1000)
        basic.showNumber(3)
        basic.pause(1000)
        basic.showNumber(2)
        basic.pause(1000)
        basic.showNumber(1)
        basic.pause(1000)
        basic.showNumber(0)
        pins.digitalWritePin(DigitalPin.P8, 1)
        temps = 20
        pieton = 0
    }
})
