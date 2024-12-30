var Downloader;

var _checkCallbacks = function (success, error) {
    if (typeof success != 'function') {
        throw new Error('Downloader failure: success callback parameter must be a function');
    }
    if (typeof error != 'function') {
        throw new Error('Downloader failure: error callback parameter must be a function');
    }
};

Downloader = function () {};

Downloader.prototype = {
    download: function (arg0, success, error) {
        // args checking
        _checkCallbacks(success, error);

        cordova.exec(success, error, 'Downloader', 'download', [arg0]);
    }
};

if (!cordova.plugins) {
    cordova.plugins = {};
}

if (!cordova.plugins.Downloader) {
    cordova.plugins.Downloader = Downloader;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = Downloader;
}
