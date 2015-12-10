var port = chrome.runtime.connect();
chrome.runtime.onMessage.addListener(function(msg, sender, _) {
  window.location.assign(msg);
});
