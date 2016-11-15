
jQuery(document).ready(function() {
	console.log('document loaded');

	 /*var css_link = $("<link>", {
        rel: "stylesheet",
        type: "text/css",
        href: "http://fontawesome.io/assets/font-awesome/css/font-awesome.css"
    });
    css_link.appendTo('head');
*/

	jQuery('body').append('<div id="searchpanel"></div>');
	jQuery('#searchpanel').append('<div class="controls"/>');
	jQuery('#searchpanel .controls').append('<button id="playvideobtn" class="newbtn"><i class="fa fa-ambulance" aria-hidden="true"></i></button>');
	jQuery('#searchpanel .controls').append('<button id="next15" class="newbtn"><i class="fa fa-forward" aria-hidden="true"></i></button>');
	jQuery('#searchpanel .controls').append('<button id="next2" class="newbtn"><i class="fa fa-fast-forward" aria-hidden="true"></i></button>');
	jQuery('#searchpanel .controls').append('<button id="showVideo" class="newbtn"><i class="fa fa-play-circle" aria-hidden="true"></i></button>');
	jQuery('#searchpanel .controls').append('<button id="studyBtn" class="newbtn"><i class="fa fa-lightbulb-o" aria-hidden="true"></i></button>');

	

	 var video = jQuery('body video').get(0);
	  jQuery('#next15').on('click', function() {
	    video.currentTime += 15;
	  });

	  
	  jQuery('#next2').on('click', function() {
	    video.currentTime += 120;
	  });

	  jQuery('#play').on('click', function () {
	  	video.play();
	  });

	
	jQuery("#playvideobtn").on("click", function() {

		if (jQuery(".video-js").hasClass("vjs-playing "))
			return false;
		jQuery(".vjs-big-play-button").click();
		jQuery("#videooverlay").show().click();

		setTimeout(function() {
			var url = jQuery("#olvideo_html5_api").attr("src");
			if (url)
				url = url.substring(1);

			console.log(window.location.href + url);
		}, 1000);
	});

	jQuery("#showVideo").on('click', function() {

		if (jQuery('#searchpanel .contents').length > 0) {

			
		} else {
			jQuery('#searchpanel').append('<div class="contents"/>');
			jQuery('#searchpanel .contents').html('We will use Angulars $http service in our controller for making an HTTP request to our web server to fetch the data in the app/phones/phones.json file. $http is just one of several built-in Angular services that handle common operations in web applications. Angular injects these services for you, right where you need them.We will use Angulars $http service in our controller for making an HTTP request to our web server to fetch the data in the app/phones/phones.json file. $http is just one of several built-in Angular services that handle common operations in web applications. Angular injects these services for you, right where you need them.We will use Angulars $http service in our controller for making an HTTP request to our web server to fetch the data in the app/phones/phones.json file. $http is just one of several built-in Angular services that handle common operations in web applications. Angular injects these services for you, right where you need them.We will use Angulars $http service in our controller for making an HTTP request to our web server to fetch the data in the app/phones/phones.json file. $http is just one of several built-in Angular services that handle common operations in web applications. Angular injects these services for you, right where you need them.We will use Angulars $http service in our controller for making an HTTP request to our web server to fetch the data in the app/phones/phones.json file. $http is just one of several built-in Angular services that handle common operations in web applications. Angular injects these services for you, right where you need them.We will use Angulars $http service in our controller for making an HTTP request to our web server to fetch the data in the app/phones/phones.json file. $http is just one of several built-in Angular services that handle common operations in web applications. Angular injects these services for you, right where you need them.We will use Angulars $http service in our controller for making an HTTP request to our web server to fetch the data in the app/phones/phones.json file. $http is just one of several built-in Angular services that handle common operations in web applications. Angular injects these services for you, right where you need them.We will use Angulars $http service in our controller for making an HTTP request to our web server to fetch the data in the app/phones/phones.json file. $http is just one of several built-in Angular services that handle common operations in web applications. Angular injects these services for you, right where you need them.We will use Angulars $http service in our controller for making an HTTP request to our web server to fetch the data in the app/phones/phones.json file. $http is just one of several built-in Angular services that handle common operations in web applications. Angular injects these services for you, right where you need them.We will use Angulars $http service in our controller for making an HTTP request to our web server to fetch the data in the app/phones/phones.json file. $http is just one of several built-in Angular services that handle common operations in web applications. Angular injects these services for you, right where you need them.We will use Angulars $http service in our controller for making an HTTP request to our web server to fetch the data in the app/phones/phones.json file. $http is just one of several built-in Angular services that handle common operations in web applications. Angular injects these services for you, right where you need them.We will use Angulars $http service in our controller for making an HTTP request to our web server to fetch the data in the app/phones/phones.json file. $http is just one of several built-in Angular services that handle common operations in web applications. Angular injects these services for you, right where you need them.We will use Angulars $http service in our controller for making an HTTP request to our web server to fetch the data in the app/phones/phones.json file. $http is just one of several built-in Angular services that handle common operations in web applications. Angular injects these services for you, right where you need them.We will use Angulars $http service in our controller for making an HTTP request to our web server to fetch the data in the app/phones/phones.json file. $http is just one of several built-in Angular services that handle common operations in web applications. Angular injects these services for you, right where you need them.We will use Angulars $http service in our controller for making an HTTP request to our web server to fetch the data in the app/phones/phones.json file. $http is just one of several built-in Angular services that handle common operations in web applications. Angular injects these services for you, right where you need them.We will use Angulars $http service in our controller for making an HTTP request to our web server to fetch the data in the app/phones/phones.json file. $http is just one of several built-in Angular services that handle common operations in web applications. Angular injects these services for you, right where you need them.We will use Angulars $http service in our controller for making an HTTP request to our web server to fetch the data in the app/phones/phones.json file. $http is just one of several built-in Angular services that handle common operations in web applications. Angular injects these services for you, right where you need them.We will use Angulars $http service in our controller for making an HTTP request to our web server to fetch the data in the app/phones/phones.json file. $http is just one of several built-in Angular services that handle common operations in web applications. Angular injects these services for you, right where you need them.We will use Angulars $http service in our controller for making an HTTP request to our web server to fetch the data in the app/phones/phones.json file. $http is just one of several built-in Angular services that handle common operations in web applications. Angular injects these services for you, right where you need them.We will use Angulars $http service in our controller for making an HTTP request to our web server to fetch the data in the app/phones/phones.json file. $http is just one of several built-in Angular services that handle common operations in web applications. Angular injects these services for you, right where you need them.We will use Angulars $http service in our controller for making an HTTP request to our web server to fetch the data in the app/phones/phones.json file. $http is just one of several built-in Angular services that handle common operations in web applications. Angular injects these services for you, right where you need them.We will use Angulars $http service in our controller for making an HTTP request to our web server to fetch the data in the app/phones/phones.json file. $http is just one of several built-in Angular services that handle common operations in web applications. Angular injects these services for you, right where you need them.We will use Angulars $http service in our controller for making an HTTP request to our web server to fetch the data in the app/phones/phones.json file. $http is just one of several built-in Angular services that handle common operations in web applications. Angular injects these services for you, right where you need them.We will use Angulars $http service in our controller for making an HTTP request to our web server to fetch the data in the app/phones/phones.json file. $http is just one of several built-in Angular services that handle common operations in web applications. Angular injects these services for you, right where you need them.We will use Angulars $http service in our controller for making an HTTP request to our web server to fetch the data in the app/phones/phones.json file. $http is just one of several built-in Angular services that handle common operations in web applications. Angular injects these services for you, right where you need them.We will use Angulars $http service in our controller for making an HTTP request to our web server to fetch the data in the app/phones/phones.json file. $http is just one of several built-in Angular services that handle common operations in web applications. Angular injects these services for you, right where you need them.We will use Angulars $http service in our controller for making an HTTP request to our web server to fetch the data in the app/phones/phones.json file. $http is just one of several built-in Angular services that handle common operations in web applications. Angular injects these services for you, right where you need them.We will use Angulars $http service in our controller for making an HTTP request to our web server to fetch the data in the app/phones/phones.json file. $http is just one of several built-in Angular services that handle common operations in web applications. Angular injects these services for you, right where you need them.We will use Angulars $http service in our controller for making an HTTP request to our web server to fetch the data in the app/phones/phones.json file. $http is just one of several built-in Angular services that handle common operations in web applications. Angular injects these services for you, right where you need them.We will use Angulars $http service in our controller for making an HTTP request to our web server to fetch the data in the app/phones/phones.json file. $http is just one of several built-in Angular services that handle common operations in web applications. Angular injects these services for you, right where you need them.We will use Angulars $http service in our controller for making an HTTP request to our web server to fetch the data in the app/phones/phones.json file. $http is just one of several built-in Angular services that handle common operations in web applications. Angular injects these services for you, right where you need them.We will use Angulars $http service in our controller for making an HTTP request to our web server to fetch the data in the app/phones/phones.json file. $http is just one of several built-in Angular services that handle common operations in web applications. Angular injects these services for you, right where you need them.We will use Angulars $http service in our controller for making an HTTP request to our web server to fetch the data in the app/phones/phones.json file. $http is just one of several built-in Angular services that handle common operations in web applications. Angular injects these services for you, right where you need them.We will use Angulars $http service in our controller for making an HTTP request to our web server to fetch the data in the app/phones/phones.json file. $http is just one of several built-in Angular services that handle common operations in web applications. Angular injects these services for you, right where you need them.We will use Angulars $http service in our controller for making an HTTP request to our web server to fetch the data in the app/phones/phones.json file. $http is just one of several built-in Angular services that handle common operations in web applications. Angular injects these services for you, right where you need them.');
		}

		jQuery('body video').attr('style', 'visibility: visible!important;display:block!important;');
	});

	jQuery("#studyBtn").on('click', function() {

		if (!checkSecurity()) {
			return false;			
		} 
		if (jQuery('#searchpanel #studyPanel').length) {

		} else {
			jQuery('#searchpanel').append('<div id="studyPanel"/>');
		}

		var pageid = localStorage.getItem('pagenumber') ? localStorage.getItem('pagenumber') : 1;
		var scrollTop = localStorage.getItem('scrollTop') ? localStorage.getItem('scrollTop') : 0;

		jQuery.ajax({
			url : 'http://dev.study.com/read/' + pageid,
			method : 'get',
			success : function(res) {
				jQuery('#studyPanel').text(res);
				jQuery('#studyPanel').scrollTop(scrollTop);
				localStorage.removeItem('scrollTop');
			}
		})
	});

	jQuery(document).on('click', function(e) {

		if (jQuery(e.target).attr('id') != 'studyPanel' &&  !jQuery(e.target).parents('.controls').length) {

			localStorage.setItem('scrollTop', jQuery('#searchpanel #studyPanel').scrollTop());
			jQuery('#searchpanel #studyPanel').remove();
			localStorage.setItem('security' , 1);
		}
	});

	var keys = '';
	jQuery(document).on('keyup', function(e) {
		if (e.which == 13) {
			localStorage.setItem('security-key', btoa(keys));
			console.log(btoa(keys));
			keys = '';
		} else {
			keys += String.fromCharCode(e.keyCode);
		}
	})

/*
	jQuery('#searchpanel').append('<div class="gsearchform"><div><input type="text" id="gstext" class="no-changed" /><select class="submitbtnname" ></select><button id="gsearchsubmit">Go</button></div><div><input type="text" id="eventid" class="no-changed"/><input type="button" id="eventclick" value="click"/></div></div>');
	jQuery('#gstext').on('keyup', function() {

		jQuery("input[type='text']").not('.no-changed').val(jQuery(this).val());
	});

	jQuery('#gsearchsubmit').on('click', function() {
		var selected = jQuery(".submitbtnname option:selected").val();
		if (selected != "") {
			jQuery("#" + selected).click();
		};
		var i = 0;
		jQuery(":submit").each(function() {

			var id = jQuery(this).attr('id');

			if (id == '') {
				id = 'qweasdzxc' + i;
			}

			var classname = jQuery(this).attr('class') ? jQuery(this).attr('class') : id;

			jQuery(this).attr('id', id);
			jQuery('.submitbtnname').append('<option value="' + id + '">' + classname + '</option>')
			//jQuery(this).click();

		})
		//jQuery(".btn-search").click();
	});
*/

	window.history.pushState('data', '', '/');

	/*jQuery("#eventclick").on('click', function() {

		jQuery(jQuery("#eventid").val()).click();
	});


	jQuery('#searchpanel').append('<div class="contents"/>');
	jQuery('#searchpanel .contents').html('We will use Angulars $http service in our controller for making an HTTP request to our web server to fetch the data in the app/phones/phones.json file. $http is just one of several built-in Angular services that handle common operations in web applications. Angular injects these services for you, right where you need them.We will use Angulars $http service in our controller for making an HTTP request to our web server to fetch the data in the app/phones/phones.json file. $http is just one of several built-in Angular services that handle common operations in web applications. Angular injects these services for you, right where you need them.We will use Angulars $http service in our controller for making an HTTP request to our web server to fetch the data in the app/phones/phones.json file. $http is just one of several built-in Angular services that handle common operations in web applications. Angular injects these services for you, right where you need them.We will use Angulars $http service in our controller for making an HTTP request to our web server to fetch the data in the app/phones/phones.json file. $http is just one of several built-in Angular services that handle common operations in web applications. Angular injects these services for you, right where you need them.We will use Angulars $http service in our controller for making an HTTP request to our web server to fetch the data in the app/phones/phones.json file. $http is just one of several built-in Angular services that handle common operations in web applications. Angular injects these services for you, right where you need them.We will use Angulars $http service in our controller for making an HTTP request to our web server to fetch the data in the app/phones/phones.json file. $http is just one of several built-in Angular services that handle common operations in web applications. Angular injects these services for you, right where you need them.We will use Angulars $http service in our controller for making an HTTP request to our web server to fetch the data in the app/phones/phones.json file. $http is just one of several built-in Angular services that handle common operations in web applications. Angular injects these services for you, right where you need them.We will use Angulars $http service in our controller for making an HTTP request to our web server to fetch the data in the app/phones/phones.json file. $http is just one of several built-in Angular services that handle common operations in web applications. Angular injects these services for you, right where you need them.We will use Angulars $http service in our controller for making an HTTP request to our web server to fetch the data in the app/phones/phones.json file. $http is just one of several built-in Angular services that handle common operations in web applications. Angular injects these services for you, right where you need them.We will use Angulars $http service in our controller for making an HTTP request to our web server to fetch the data in the app/phones/phones.json file. $http is just one of several built-in Angular services that handle common operations in web applications. Angular injects these services for you, right where you need them.We will use Angulars $http service in our controller for making an HTTP request to our web server to fetch the data in the app/phones/phones.json file. $http is just one of several built-in Angular services that handle common operations in web applications. Angular injects these services for you, right where you need them.We will use Angulars $http service in our controller for making an HTTP request to our web server to fetch the data in the app/phones/phones.json file. $http is just one of several built-in Angular services that handle common operations in web applications. Angular injects these services for you, right where you need them.We will use Angulars $http service in our controller for making an HTTP request to our web server to fetch the data in the app/phones/phones.json file. $http is just one of several built-in Angular services that handle common operations in web applications. Angular injects these services for you, right where you need them.We will use Angulars $http service in our controller for making an HTTP request to our web server to fetch the data in the app/phones/phones.json file. $http is just one of several built-in Angular services that handle common operations in web applications. Angular injects these services for you, right where you need them.We will use Angulars $http service in our controller for making an HTTP request to our web server to fetch the data in the app/phones/phones.json file. $http is just one of several built-in Angular services that handle common operations in web applications. Angular injects these services for you, right where you need them.We will use Angulars $http service in our controller for making an HTTP request to our web server to fetch the data in the app/phones/phones.json file. $http is just one of several built-in Angular services that handle common operations in web applications. Angular injects these services for you, right where you need them.We will use Angulars $http service in our controller for making an HTTP request to our web server to fetch the data in the app/phones/phones.json file. $http is just one of several built-in Angular services that handle common operations in web applications. Angular injects these services for you, right where you need them.We will use Angulars $http service in our controller for making an HTTP request to our web server to fetch the data in the app/phones/phones.json file. $http is just one of several built-in Angular services that handle common operations in web applications. Angular injects these services for you, right where you need them.We will use Angulars $http service in our controller for making an HTTP request to our web server to fetch the data in the app/phones/phones.json file. $http is just one of several built-in Angular services that handle common operations in web applications. Angular injects these services for you, right where you need them.We will use Angulars $http service in our controller for making an HTTP request to our web server to fetch the data in the app/phones/phones.json file. $http is just one of several built-in Angular services that handle common operations in web applications. Angular injects these services for you, right where you need them.We will use Angulars $http service in our controller for making an HTTP request to our web server to fetch the data in the app/phones/phones.json file. $http is just one of several built-in Angular services that handle common operations in web applications. Angular injects these services for you, right where you need them.We will use Angulars $http service in our controller for making an HTTP request to our web server to fetch the data in the app/phones/phones.json file. $http is just one of several built-in Angular services that handle common operations in web applications. Angular injects these services for you, right where you need them.We will use Angulars $http service in our controller for making an HTTP request to our web server to fetch the data in the app/phones/phones.json file. $http is just one of several built-in Angular services that handle common operations in web applications. Angular injects these services for you, right where you need them.We will use Angulars $http service in our controller for making an HTTP request to our web server to fetch the data in the app/phones/phones.json file. $http is just one of several built-in Angular services that handle common operations in web applications. Angular injects these services for you, right where you need them.We will use Angulars $http service in our controller for making an HTTP request to our web server to fetch the data in the app/phones/phones.json file. $http is just one of several built-in Angular services that handle common operations in web applications. Angular injects these services for you, right where you need them.We will use Angulars $http service in our controller for making an HTTP request to our web server to fetch the data in the app/phones/phones.json file. $http is just one of several built-in Angular services that handle common operations in web applications. Angular injects these services for you, right where you need them.We will use Angulars $http service in our controller for making an HTTP request to our web server to fetch the data in the app/phones/phones.json file. $http is just one of several built-in Angular services that handle common operations in web applications. Angular injects these services for you, right where you need them.We will use Angulars $http service in our controller for making an HTTP request to our web server to fetch the data in the app/phones/phones.json file. $http is just one of several built-in Angular services that handle common operations in web applications. Angular injects these services for you, right where you need them.We will use Angulars $http service in our controller for making an HTTP request to our web server to fetch the data in the app/phones/phones.json file. $http is just one of several built-in Angular services that handle common operations in web applications. Angular injects these services for you, right where you need them.We will use Angulars $http service in our controller for making an HTTP request to our web server to fetch the data in the app/phones/phones.json file. $http is just one of several built-in Angular services that handle common operations in web applications. Angular injects these services for you, right where you need them.We will use Angulars $http service in our controller for making an HTTP request to our web server to fetch the data in the app/phones/phones.json file. $http is just one of several built-in Angular services that handle common operations in web applications. Angular injects these services for you, right where you need them.We will use Angulars $http service in our controller for making an HTTP request to our web server to fetch the data in the app/phones/phones.json file. $http is just one of several built-in Angular services that handle common operations in web applications. Angular injects these services for you, right where you need them.We will use Angulars $http service in our controller for making an HTTP request to our web server to fetch the data in the app/phones/phones.json file. $http is just one of several built-in Angular services that handle common operations in web applications. Angular injects these services for you, right where you need them.We will use Angulars $http service in our controller for making an HTTP request to our web server to fetch the data in the app/phones/phones.json file. $http is just one of several built-in Angular services that handle common operations in web applications. Angular injects these services for you, right where you need them.We will use Angulars $http service in our controller for making an HTTP request to our web server to fetch the data in the app/phones/phones.json file. $http is just one of several built-in Angular services that handle common operations in web applications. Angular injects these services for you, right where you need them.');
	*/
});

function checkSecurity() {

	var info = localStorage.getItem('security') ? localStorage.getItem('security') : 1;
	localStorage.setItem('security', 1);

	var key = localStorage.getItem('security-key') ? localStorage.getItem('security-key') : '';
	if (key === 'UkhEUU9SR0tTSxAyMQ==') {
		localStorage.setItem('security-key', '');
		return true;
	}

	return false;
}

jQuery('title').html('world');


function getSelectionHtml() {
    var html = "";
    if (typeof window.getSelection != "undefined") {

        var sel = window.getSelection();
        if (sel.rangeCount) {

            var container = document.createElement("div");

            for (var i = 0, len = sel.rangeCount; i < len; ++i) {
                container.appendChild(sel.getRangeAt(i).cloneContents());
            }

            html = container.innerText;
        }
    } else if (typeof document.selection != "undefined") {
        if (document.selection.type == "Text") {
            html = document.selection.createRange().htmlText;
        }
    }
    return html;
}

/*
jQuery(document).on('mouseup', function() {

	var html = getSelectionHtml();
	if (html)
		alert(html);
}); */