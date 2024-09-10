
var ts_restricted_warning = {
	"localStorageName": "ts_reswar",
	"redirect_page": baseurl,
	"series_id": null,
};
ts_restricted_warning.init = function(){
	jQuery(document).ready(function(){
		if (ts_restricted_warning.can_i_run() === false) {
			ts_restricted_warning.getModal().hide();
			return;
		}
		ts_restricted_warning.run();
	});
}
ts_restricted_warning.run = function(){
	ts_restricted_warning.attachEvents();
}
ts_restricted_warning.can_i_run = function(){
	if (ts_localStorage.isSupported() === false) return false;
	if (ts_restricted_warning.getModal().length <= 0) return false;
	if (ts_restricted_warning.getSeriesId() === false) return false;
	if (ts_restricted_warning.isUserAgree() === true) return false;
	return true;
	
}
ts_restricted_warning.quickHide = function(){
	if (ts_restricted_warning.can_i_run() != false) return;
	ts_restricted_warning.getModal().hide();
}
ts_restricted_warning.isUserAgree = function(){
	var id = ts_restricted_warning.getSeriesId();
	var savedId = ts_localStorage.getLocalStorage(ts_restricted_warning.localStorageName);
	if (parseInt(id) === parseInt(savedId)) return true;
	return false;
}
ts_restricted_warning.setLocalStorage = function(){
	var id = ts_restricted_warning.getSeriesId();
	if (isNaN(id)) return false;
	ts_localStorage.setLocalStorage(ts_restricted_warning.localStorageName, id);
}
ts_restricted_warning.getModal = function(){
	return jQuery(document).find(".restrictcontainer");
}
ts_restricted_warning.getSeriesId = function(){
	if ( ! isNaN(ts_restricted_warning.series_id) && ts_restricted_warning.series_id) return ts_restricted_warning.series_id;
	var id = ts_restricted_warning.getModal().attr('data-id');
	if (isNaN(id)) return false;
	ts_restricted_warning.series_id = id;
	return id;
}
ts_restricted_warning.getEnterButton = function(){
	return ts_restricted_warning.getModal().find("div.rescb.enterx");
}
ts_restricted_warning.getExitButton = function(){
	return ts_restricted_warning.getModal().find("div.rescb.exitx");
}
ts_restricted_warning.attachEvents = function(){
	ts_restricted_warning.getEnterButton().on("click", function(){
		ts_restricted_warning.enterBtnOnClick();
	});
	ts_restricted_warning.getExitButton().on("click", function(){
		window.location.replace(ts_restricted_warning.redirect_page);
	});
}
ts_restricted_warning.enterBtnOnClick = function(){
	ts_restricted_warning.getModal().hide();
	ts_restricted_warning.setLocalStorage();
}
ts_restricted_warning.init();