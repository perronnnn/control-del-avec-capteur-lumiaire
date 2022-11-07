let intensite = 0
function bleu () {
    pins.analogWritePin(AnalogPin.P1, 0)
    pins.analogWritePin(AnalogPin.P2, 0)
    pins.analogWritePin(AnalogPin.P8, 1023)
}
function blanc () {
    pins.analogWritePin(AnalogPin.P1, 1023)
    pins.analogWritePin(AnalogPin.P2, 1023)
    pins.analogWritePin(AnalogPin.P8, 1023)
}
function mauve () {
    pins.analogWritePin(AnalogPin.P1, 1023)
    pins.analogWritePin(AnalogPin.P2, 0)
    pins.analogWritePin(AnalogPin.P8, 1023)
}
function rouge () {
    pins.analogWritePin(AnalogPin.P1, 1023)
    pins.analogWritePin(AnalogPin.P2, 0)
    pins.analogWritePin(AnalogPin.P8, 0)
}
function vert () {
    pins.analogWritePin(AnalogPin.P1, 0)
    pins.analogWritePin(AnalogPin.P2, 1023)
    pins.analogWritePin(AnalogPin.P8, 0)
}
basic.forever(function () {
    intensite = pins.analogReadPin(AnalogPin.P0)
    if (intensite >= 700) {
        blanc()
    } else if (intensite < 700 && intensite >= 525) {
        mauve()
    } else if (intensite < 525 && intensite >= 350) {
        rouge()
    } else if (intensite < 350 && intensite >= 175) {
        bleu()
    } else {
        vert()
    }
})
