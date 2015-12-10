chrome.runtime.onMessage.addListener(function(msg, sender, _) {
  if (sender.id != "hfnfjdmnjobmmopiejcjamlcchifbpif")
    return;
  window.location.assign(msg.url);
});
