getCurrentTabUrl(function(url) {
	if(url.search("https:\/\/www.youtube.com/watch\\?v=") != -1){
		endIndex = url.length;
		if(url.indexOf("&") != -1){
			endIndex = url.indexOf("&");
		}
		videoID = url.substring(32,endIndex);
		// var popupURL = chrome.extension.getURL("popup.html");
		// $('body').prepend('<div id="cathy-japan"></div>');
		// $('#cathy-japan').load(popupURL,function(){
		// 	console.log('Load!!!');
		// });
	}
});

function getCurrentTabUrl(callback) {
	console.log("getCurrentTabUrl");
	var url = location.href;
	callback(url);
}
