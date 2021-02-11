var exec = require('cordova/exec');
var argscheck = require('cordova/argscheck');

//channel.createSticky('onCordovaInfoReady');
// Tell cordova channel to wait on the CordovaInfoReady event
//channel.waitForInitialization('onCordovaInfoReady');

function Test () {

    var me = this;

    /*
    channel.onCordovaReady.subscribe(function () {
        channel.onCordovaInfoReady.fire();
    });
    */
}

Test.prototype.getResult = function (successCallback, errorCallback) {
    argscheck.checkArgs('fF', 'Test.getResult', arguments);
    exec(successCallback, errorCallback, 'Test', 'getResult', []);
};

module.exports = new Test();