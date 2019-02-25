chrome.browserAction.onClicked.addListener(function(){
    var port = chrome.runtime.connectNative('ping_pong');
    port.onMessage.addListener(function(msg) {
        alert(msg);
    });
    port.onDisconnect.addListener(function() {
    alert("Disconnected");
    });
    port.postMessage("ping");
});
