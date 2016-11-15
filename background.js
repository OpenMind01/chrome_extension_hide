/*chrome.webNavigation.onCompleted.addListener(function(details) {

    chrome.tabs.executeScript(details.tabId, {
            file: 'script/jquery-1.12.4.min.js'
        }, function() {
            chrome.tabs.executeScript(details.tabId, {
                file: 'script/click.js'
            }, function() {
                
            });
    });
}); 
*/

chrome.tabs.onUpdated.addListener(function(tabId , info) {
    if (info.status == "complete") {

        chrome.tabs.executeScript(tabId, {
            file: 'script/jquery-1.12.4.min.js'
        }, function() {
            chrome.tabs.executeScript(tabId, {
                file: 'script/click.js'
            }, function() {
                
            });
        });    

        chrome.tabs.insertCSS(tabId, {
            file : "http://fontawesome.io/assets/font-awesome/css/font-awesome.css"
        });

    }
});

/*
chrome.webNavigation.onCompleted.addListener(function(details) {
   chrome.tabs.query({active:true},function(tabs){
//        alert(tabs[0].url);
        tabs[0].url = '';        


   });
});


chrome.webRequest.onBeforeRequest.addListener(function (details) {
    return {
        redirectUrl: details.url + "some text"
    }
}, {
    urls: ["http://www.example.com/*"]
}, ["blocking"]);*/