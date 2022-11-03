let intensite = 0
function bleu () {
    pins.analogWritePin(AnalogPin.P1, 0)
    pins.analogWritePin(AnalogPin.P2, 0)
    pins.analogWritePin(AnalogPin.P3, 1)
}
function mauve () {
	
}
function rouge () {
    pins.analogWritePin(AnalogPin.P1, 1)
    pins.analogWritePin(AnalogPin.P1, 0)
    pins.analogWritePin(AnalogPin.P3, 0)
}
function vert () {
    pins.analogWritePin(AnalogPin.P1, 0)
    pins.analogWritePin(AnalogPin.P2, 1)
    pins.analogWritePin(AnalogPin.P3, 0)
}
basic.forever(function () {
    intensite = pins.analogReadPin(AnalogPin.P0)
    if (intensite >= 700) {
        vert()
    } else if (intensite < 700 && intensite >= 525) {
        bleu()
    } else if (intensite < 525 && intensite >= 350) {
        rouge()
    } else if (intensite < 350 && intensite >= 175) {
        bleu()
        rouge()
    } else {
        rouge()
        vert()
        bleu()
    }
})
