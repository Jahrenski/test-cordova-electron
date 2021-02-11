const { multi } = global.require('./addon'); 

function getResult () {
    return '' + multi(2,9); ;
}

module.exports = {
    getResult: function (success, error) {
        success(getResult());
    }
};

require('cordova/exec/proxy').add('Test', module.exports);