const i2c = require('i2c-bus');
let i2cBus = i2c.openSync(1);
let oledLib = require('oled-i2c-bus');

function initOled()
{
    let opts = {
        width: 128,
        height: 64,
        address: 0x3C
    }
    
    let oled = new oledLib(i2cBus, opts);
    oled.turnOnDisplay();
    oled.clearDisplay();
    
    return oled;
}

module.exports = initOled();