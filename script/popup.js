


function doInCurrentTab(tabCallback) {
    chrome.tabs.query(
        { currentWindow: true, active: true },
        function (tabArray) { tabCallback(tabArray[0]); }
    );
}


var activeTabId;
doInCurrentTab( function(tab){ activeTabId = tab.id;} );


function callClick() {	
	var eventid = document.getElementById('chexElement').value;	
    chrome.tabs.sendMessage(activeTabId, { element : eventid, sender : 'clickme' }, function(){
    });	
}

document.getElementById('chexEvent').addEventListener('click', callClick);
document.getElementById('chexSearchText').addEventListener('keyup', function() {

	var text = document.getElementById('chexSearchText').value;	
    chrome.tabs.sendMessage(activeTabId, { text : text, sender : 'search' });
    
});