
chrome.webNavigation.onBeforeNavigate.addListener(findExistingZendeskTab, {url: [{hostSuffix: 'zendesk.com', pathContains: "agent"}]});

function findExistingZendeskTab(nav_details) {
  var subdomain = nav_details.url.split(".zendesk")[0];
  chrome.tabs.query({active: false, url: subdomain + ".zendesk.com/agent*"}, function(tabs) {
    if (tabs[0] != null && tabs[0].id != nav_details.tabId) {
      var zd_tab = tabs[0];
      // Close the newly opened tab
      chrome.tabs.remove(nav_details.tabId);
      // Set the existing tab as active
      chrome.tabs.update(zd_tab.id, {selected: true});
      // Send the url to the existing tab
      chrome.tabs.sendMessage(zd_tab.id, {url: nav_details.url});
    }
  });
}
