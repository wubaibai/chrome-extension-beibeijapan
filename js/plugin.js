getCurrentTabUrl(function(url) {
	console.log(url);
	var yid = youtubeParser(url);
	console.log(yid);

	$('[name="vid"]').val(yid);
});

function getCurrentTabUrl(callback) {
	console.log('getCurrentTabUrl');

	chrome.tabs.getSelected(null, function(tab){
		callback(tab.url);
	});
}

function youtubeParser(urlStr) {
	const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
	const match = urlStr.match(regExp);
	if (match && match[7].length === 11) {
		return match[7];
	}

	return '';
}