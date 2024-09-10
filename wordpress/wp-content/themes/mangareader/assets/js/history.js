var HISTORY = {};
HISTORY.max = max_history;
HISTORY.savename = "ts_mangareader_history";
HISTORY.checkLocalStorage = function() {
	return typeof (Storage) === "function";
};
HISTORY.storeLocalStorage = function(name, data) {
	if (!HISTORY.checkLocalStorage())
		return false;
	return localStorage.setItem(name, JSON.stringify(data));
};
HISTORY.getLocalStorage = function(name) {
	if (typeof name === undefined)
		return null;
	if (!HISTORY.checkLocalStorage())
		return false;
	if (name in localStorage === false)
		return null;
	return JSON.parse(localStorage[name]);
};
HISTORY.getStored = function(){
	var history = HISTORY.getLocalStorage(HISTORY.savename);
	if ( ! history) return {};
	if (typeof(history) !== typeof({})) return {};
	else return history;
	
};
HISTORY.push = function(id, data){
	if ( ! HISTORY.checkLocalStorage()){
		return false;
	}
	if (isNaN(id)) return false;
	var stored = HISTORY.getStored();
	if (id in stored){
		delete stored[id];
	}
	if (Object.keys(stored).length >= HISTORY.max) {
		var reKeys = {};
		for(var i in stored){
			var item = stored[i];
			reKeys[item.time] = item;
		}
		var theKeys = Object.keys(reKeys);
		theKeys.sort();
		theKeys.reverse();
		var finalData = {};
		for(var r in theKeys){
			if (r < (HISTORY.max - 1) ){
				var obj = reKeys[theKeys[r]];
				finalData[obj.chapter_ID]  = obj;
			}else{
				break;
			}
		}
		stored = finalData;
	}
	data.time = new Date().getTime();
	stored[id] = data;
	HISTORY.storeLocalStorage(HISTORY.savename, stored);
	return true;
};
HISTORY.generateHTML = function(){
	var stored = HISTORY.getStored();
	if (Object.keys(stored).length === 0) return null;
	var reKeys = {};
	for(var i in stored){
		var item = stored[i];
		reKeys[item.time] = item;
	}
	var HTML = "";
	var theKeys = Object.keys(reKeys);
	theKeys.sort();
	for(var i in theKeys){
		var item = reKeys[theKeys[i]];
        var tpl = `<li class="bm_item"><a href="${item.chapter_permalink}">${item.chapter_title}</a></li>`;
		HTML = tpl + HTML;
	}
	HTML = `<ul id='bm-history'>${HTML}</ul>`;
	return HTML;
}
HISTORY.redirect = function(post_id){
	if (isNaN(post_id)) return true;
	window.location.assign(`${baseurl}/?p=${post_id}`);
}
HISTORY.run = function(){
	if (HISTORY.checkLocalStorage() === false){
		return jQuery("#theHISTORY").parent().parent().remove();
	}
	var theHTML = HISTORY.generateHTML();
	if (theHTML === null){
		return jQuery("#theHISTORY").parent().parent().remove();
	}
	jQuery("#theHISTORY").html(theHTML);
}
jQuery(document).ready(function(){
	HISTORY.run();
});