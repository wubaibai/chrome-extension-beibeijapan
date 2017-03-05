chrome.browserAction.onClicked.addListener(function(activeTab){
	chrome.tabs.getSelected(null, function(tab){
		goToEditor(tab.url);
	});
});

function youtubeParser(urlStr) {
	const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
	const match = urlStr.match(regExp);
	if (match && match[7].length === 11) {
		return match[7];
	}

	return '';
}

function goToEditor(url) {
	var yid = youtubeParser(url);
	if (yid) {
		var newURL = "http://localhost:8080/?t=video&vid="+yid;
		chrome.tabs.create({ url: newURL }, function(tab) {
			// Tab opened.
		});
	}
}
