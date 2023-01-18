const { Browser } = require("st-ethernet-ip");

const browser = new Browser();

browser.on("New Device", device => {

    console.log("new device => ", device);

    console.log("device list => ", browser.deviceList);
    
});

browser.on("Device Disconnected", device => {
    console.log("device disconnected => ", device)
})