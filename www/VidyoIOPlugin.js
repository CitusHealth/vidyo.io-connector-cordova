var exec = require('cordova/exec');

var jsCallback;

function VidyoIOPlugin() {}

/**
 * Handle callback from native side
 * 
 * @param {JSON} response 
 */
var nativeResponseCallback = function(response) {
    console.log("Received native callback: " + JSON.stringify(response));
    jsCallback.onEvent(response);
}

/**
 * Handle error from native side
 * 
 * @param {*} error 
 */
var nativeErrorCallback = function(error) {
    console.log("Error from native side: " + error);
}

VidyoIOPlugin.prototype.setCallback = function(callback) {
    console.log("Callback to JS has been provided");
    jsCallback = callback;
}

/**
 * Launch conference activity and pass the callbacks
 */
VidyoIOPlugin.prototype.launch = function(args) {
    exec(nativeResponseCallback, nativeErrorCallback, "VidyoIOPlugin", "launchVidyoIO", args);
}

VidyoIOPlugin.prototype.launchVidyoIO = function(
    successCallBack,
    errorCallBack,
    args
  ) {
    console.log("called plugin launchVidyoIO function......................");
    exec(successCallBack, errorCallBack, "VidyoIOPlugin", "launchVidyoIO", args);
  };

/**
 * Disconnect from the conference
 */
VidyoIOPlugin.prototype.disconnect = function() {
    console.log("Trigger disconnect on native side.");
    exec(function(){}, nativeErrorCallback, "VidyoIOPlugin", "disconnect", null);
}
VidyoIOPlugin.prototype.destroy = function(successCallBack, errorCallBack) {
  console.log("called plugin destroye function......................");
  exec(successCallBack, errorCallBack, "VidyoIOPlugin", "destroy");
};
/**
 * Wrap up the plugin screen and release the connector
 */
VidyoIOPlugin.prototype.release = function() {
    console.log("Trigger release on native side.");
    exec(function(){}, nativeErrorCallback, "VidyoIOPlugin", "release", null);
}
plugin.prototype.close = function(successCallBack, errorCallBack) {
    console.log("called plugin close function......................");
    exec(successCallBack, errorCallBack, "VidyoIOPlugin", "closeVidyo");
  };
  
  plugin.prototype.getPermission = function(successCallBack, errorCallBack) {
    console.log("called plugin prmission function......................");
    exec(successCallBack, errorCallBack, "VidyoIOPlugin", "getPermission");
  };
  
  plugin.prototype.showToast = function(successCallBack, errorCallBack, args) {
    console.log("toast called");
    exec(successCallBack, errorCallBack, "VidyoIOPlugin", "showToast", args);
  };
  
  plugin.prototype.showAlert = function(successCallBack, errorCallBack, args) {
    exec(successCallBack, errorCallBack, "VidyoIOPlugin", "showAlert", args);
  };
module.exports = new VidyoIOPlugin();
