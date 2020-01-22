chrome.declarativeContent.onPageChanged.removeRules(
  undefined,
  function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({pageUrl: {schemes: ['https', 'http', 'localhost', 'chrome']},})],
      actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  }
);

chrome.webNavigation.onCompleted.addListener(function() {
  // chrome.tabs.executeScript({
    //code: '
    // alert("YOLOLOLO")
    // '
// })
});
chrome.tabs.insertCSS({file: "styles.css"});


chrome.pageAction.onClicked.addListener(function() {
  chrome.tabs.query(
    {active: true, currentWindow: true},
    function(tabs) {
      chrome.tabs.executeScript(
        tabs[0].id,
        {file: 'main.js'},
      );
    });
});