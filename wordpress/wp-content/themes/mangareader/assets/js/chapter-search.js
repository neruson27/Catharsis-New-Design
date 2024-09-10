var series_chapters = {
    "chapters": [],
    "minItemToShowSearch": 10,
};
series_chapters.getChapters = function(){
	if (series_chapters.chapters.length > 0) return series_chapters.chapters;
    var li = jQuery(".eplister ul li");
    if (li.length < 1) return [];
    var data = [];
    li.each(function(k, vi) {
        vi = jQuery(vi);
        var tmp = {};
        tmp.episode = vi.attr('data-num');
        tmp.link = vi.find("a").get(0).href;
		tmp.first = vi.hasClass('first-chapter');
        data.push(tmp);
    });
	series_chapters.chapters = data;
    return data;
}
series_chapters.setFirstChapterData = function(){
	var e = jQuery('.epcur.epcurfirst');
    if (e.length < 1) return;
    var v = series_chapters.getChapters();
    if (v.length <= 5) {
		jQuery('.lastend').hide();
		return;
	}
    var f = v[v.length-1];
	if ( ! f.first){
		f = v[0];
	}
    e.parent().attr('href', f.link);
    e.html(e.html().replace('?', f.episode));
}
series_chapters.controlSearchInput = function(){
	if (series_chapters.getChapters().length < this.minItemToShowSearch){
		jQuery(".search-chapter").hide();
	}
}
series_chapters.attachSearchEvent = function(){
	var searchInput = "#searchchapter";
	var itemContainer = "#chapterlist ul";
	var searchItem = "#chapterlist li";
	var hiddenLi = "li#lihide";
	jQuery(document).ready(function(){
		jQuery(searchInput).on('input', function(){
			jQuery(itemContainer).find(hiddenLi).remove();
			var searchQuery = this.value;
			if (searchQuery.length < 1){
				jQuery(searchItem).show();
				return;
			}
			var itemFound = 0;
			jQuery(searchItem).hide();
			jQuery(searchItem).each(function(k,v){
				var num = v.getAttribute('data-num');
				if (num.indexOf(searchQuery) !== -1){
					jQuery(v).show();
					itemFound++;
				}
			});
			if (itemFound < 1){
				jQuery(itemContainer).prepend('<li id="lihide"><center>'+chapterSearchNotFound+'</center></li>');
			}
		});
	});
}

series_chapters.attachSearchEvent();