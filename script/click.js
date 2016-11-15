chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
	console.log(message);
	
	switch (message.sender) {
		case "clickme" : 
			jQuery(message.element).click();		
		break;

		case "search":
			jQuery("input[type='text']").not('.no-changed').val(message.text);
		break;
	}    
    
});

console.log('---injected---');
/*
jQuery(document).ready(function() {
	
	console.log('---ready---');

	jQuery("*").not("body, html").hover(function(e) {
	   jQuery(this).css("border", "1px solid #000"); 
	   e.stopPropagation();
	}, function(e) {
	   jQuery(this).css("border", "0px"); 
	   e.stopPropagation();
	});

	
})
*/