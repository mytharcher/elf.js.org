google.load('search', '1', {language : 'zh-CN', style : google.loader.themes.V2_DEFAULT});
google.setOnLoadCallback(function() {
	var customSearchControl = new google.search.CustomSearchControl('000346898720731947188:hhdkdilmh1o', {});
	customSearchControl.setResultSetSize(google.search.Search.FILTERED_CSE_RESULTSET);
	
	var options = new google.search.DrawOptions();
	options.setAutoComplete(true);
	customSearchControl.draw('cse', options);
	
	var url = new js.net.URL(location);
	var query = url.getParameter('q');
	if (query) {
		customSearchControl.execute(query);
	}
}, true);
