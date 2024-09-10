var Hooks=Hooks||{};Hooks.actions=Hooks.actions||{},Hooks.filters=Hooks.filters||{},Hooks.add_action=function(o,i,s){void 0===s&&(s=10),Hooks.actions[o]=Hooks.actions[o]||[],Hooks.actions[o].push({priority:s,callback:i})},Hooks.add_filter=function(o,i,s){void 0===s&&(s=10),Hooks.filters[o]=Hooks.filters[o]||[],Hooks.filters[o].push({priority:s,callback:i})},Hooks.remove_action=function(o,i){Hooks.actions[o]=Hooks.actions[o]||[],Hooks.actions[o].forEach((function(s,t){s.callback===i&&Hooks.actions[o].splice(t,1)}))},Hooks.remove_filter=function(o,i){Hooks.filters[o]=Hooks.filters[o]||[],Hooks.filters[o].forEach((function(s,t){s.callback===i&&Hooks.filters[o].splice(t,1)}))},Hooks.do_action=function(o,i){var s=[];void 0!==Hooks.actions[o]&&Hooks.actions[o].length>0&&(Hooks.actions[o].forEach((function(o){s[o.priority]=s[o.priority]||[],s[o.priority].push(o.callback)})),s.forEach((function(o){o.forEach((function(o){o(i)}))})))},Hooks.apply_filters=function(o,i,s){var t=[];return void 0!==Hooks.filters[o]&&Hooks.filters[o].length>0&&(Hooks.filters[o].forEach((function(o){t[o.priority]=t[o.priority]||[],t[o.priority].push(o.callback)})),t.forEach((function(o){o.forEach((function(o){i=o(i,s)}))}))),i};


function pickSelected(){
	jQuery("select#chapter option[data-id="+chapter_id+']').attr('selected', 'selected');
	jQuery("select#chapter option[value='']").attr('disabled', 'disabled');
}
//USED in single
function loadChList() {
	var current_date = new Date().toISOString().split('T')[0];
	if (typeof (localStorage) === "object") {
		var currentChapterList = localStorage.getItem("currentChapterList");
		if (currentChapterList !== null) {
			currentChapterList = JSON.parse(currentChapterList);
			if (currentChapterList.id == post_id && currentChapterList.time == current_date) {
				$("select#chapter").append(currentChapterList.html);
				pickSelected();
				return;
			}
			else {
				localStorage.removeItem("currentChapterList");
			}
		}
	}
	jQuery.ajax({
		url: ajaxurl,
		type: 'post',
		data: {
			action: 'get_chapters',
			id: post_id
		},
		success: function (response) {
			$("select#chapter").append(response);
			if (typeof (localStorage) === "object") {
				localStorage.setItem("currentChapterList", JSON.stringify({ id: post_id, html: response, time: current_date }));
				pickSelected();
				return;
			}
		}
	});
}

var ts_localStorage = {};
ts_localStorage.cachePrefix = "tslsc_";
ts_localStorage.isSupported = function(){
	try {
        return 'localStorage' in window && window['localStorage'] !== null;
    } catch(e) {
        return false;
    }
}
ts_localStorage.setLocalStorage = function(name, data){
	if ( ! this.isSupported()) return false;
	localStorage.setItem(name, JSON.stringify(data));
}
ts_localStorage.getLocalStorage = function(name){
	if ( ! this.isSupported()) return null;
	var val = localStorage.getItem(name);
	if (val === null) return null;
	return JSON.parse(val);
}
ts_localStorage.setLocalCache = function(name, value, ttl){
    var data = {
        "v": value,
        "e": new Date().getTime()+(ttl*1000),
    };
    this.setLocalStorage(this.cachePrefix+name, data);
}
ts_localStorage.getLocalCache = function(name){
    var data = this.getLocalStorage(ts_localStorage.cachePrefix+name);
    if (!data) return null;
	if ("e" in data == false || isNaN(data.e)) {
        this.removeLocalCache(name);
        return null;
    }
	if ("v" in data == false) {
        this.removeLocalCache(name);
        return null;
    }
    if (new Date().getTime() > data.e) {
        this.removeLocalCache(name);
        return null;
    }
    return data.v;
}
ts_localStorage.removeLocalCache = function(name){
	localStorage.removeItem(this.cachePrefix+name);
}
ts_localStorage.removeAllCache = function(){
	for(var i in localStorage){
        if (i.indexOf(this.cachePrefix) === 0) localStorage.removeItem(i);
    }
}
//darkmode
var ts_darkmode = {};
ts_darkmode.init = function(){
	if (ts_localStorage.isSupported() === false) return;
	if (localStorage.getItem("thememode") == null){
		if (defaultTheme == "lightmode"){
			jQuery("body").addClass("lightmode");
		}else{
			jQuery("body").removeClass("lightmode");
		}
	}else if (localStorage.getItem("thememode") == "lightmode"){
		jQuery("body").addClass("lightmode");
	}else{
		jQuery("body").removeClass("lightmode");
	}
}
ts_darkmode.listen = function(){
	jQuery("#thememode input[type='checkbox']").on('change', function(){
		var is_on = jQuery("#thememode input[type='checkbox']").prop("checked");
		if (is_on == false){
			//jQuery(".logos img").attr('src', tsLogoLight);
			localStorage.setItem("thememode", "lightmode");
			jQuery("body").addClass("lightmode");
		}else{
			//jQuery(".logos img").attr('src', tsLogoDark);
			localStorage.setItem("thememode", "darkmode");
			jQuery("body").removeClass("lightmode");
		}
	});
}
var ts_popular_widget = {
	"ranges": ["monthly", "weekly", "alltime"],
	"default": "weekly",
	"range_selectors": {
		"weekly": ".wpop.wpop-weekly",
		"monthly": ".wpop.wpop-monthly",
		"alltime": ".wpop.wpop-alltime",
	},
	"update_selector": "#wpop-items",
	"currentTime": null,
	"lstimename": "ts_cwpop",
	"lswpopcont": "ts_cnwpop",
};
ts_popular_widget.is_valid_range = function(range){
	return this.ranges.indexOf(range) !== -1;
}
ts_popular_widget.run = function(time){
	this.currentTime = time;
	this.updateWidget();
	this.show_items(this.default);
	this.attach_events();
}
ts_popular_widget.show_items = function(range){
	if ( ! ts_popular_widget.is_valid_range(range)) return;
	jQuery("#sidebar .wpop").hide();
	var el = jQuery("#sidebar " + this.range_selectors[range]);
	jQuery("#sidebar .ts-wpop-nav-tabs li").removeClass("active");
	jQuery("#sidebar .ts-wpop-nav-tabs li span[data-range='"+range+"']").closest("li").addClass("active");
	el.show();

}
ts_popular_widget.getCurrent = function(){
	var current = jQuery(this.update_selector).html();
	current = current.replace(/[\n\r]/g, "").replace(/\s\s+/g, ' ');
	return current;
}
ts_popular_widget.updateWidget = function(){
	var lastwpop = ts_localStorage.getLocalStorage(this.lstimename);
	if ( ! isNaN(lastwpop)){
		if (lastwpop < this.currentTime) {
			ts_localStorage.setLocalStorage(this.lstimename, this.currentTime);
			ts_localStorage.setLocalStorage(this.lswpopcont, this.getCurrent());
			return;
		}else if(lastwpop > this.currentTime){
			var lastwpopcontent = ts_localStorage.getLocalStorage(this.lswpopcont);
			if ( ! lastwpopcontent) return;
			jQuery(this.update_selector).html(lastwpopcontent);
			return;
		}
		return;
	}
	ts_localStorage.setLocalStorage(this.lstimename, this.currentTime);
	ts_localStorage.setLocalStorage(this.lswpopcont, this.getCurrent);

}
ts_popular_widget.attach_events = function(){
	jQuery(".ts-wpop-tab").on('click', function(){
		var range = jQuery(this).attr('data-range');
		if ( ! ts_popular_widget.is_valid_range(range)) return;
		ts_popular_widget.show_items(range);

	});
}


var ts_ajax_cache_buster = {
	param: {},
};
ts_ajax_cache_buster.run = function(param){
	this.param = param;
	ts_ajax_cache_buster.get();
}
ts_ajax_cache_buster.get = function(){
    var day = new Date();
	jQuery.getJSON(this.param.url + "?time=" +this.param.time+""+day.getDay())
	.done(function(data){
		if (typeof(data) !== typeof({})) return;
		if ("content" in data === false) return;
		jQuery("span.ts-ajax-cache[data-id='" + data.self + "']").html(data.content).css('visibility', 'unset');
	})
	.fail(function(){

	});
}

ts_zoom = {
	"increase_element": ".fontSize .setSize[data-method='+']",
	"decrease_element": ".fontSize .setSize[data-method='-']",
	"content_element": "#readerarea",
	"max_size": 22,
	"min_size": 14,
	"default_size": 14,
	"ls_name": "ts_font_size",
};
ts_zoom.set_font_size = function(fontSize){
	if (isNaN(fontSize)) return false;
	jQuery(this.content_element).attr('data-size', fontSize);
	jQuery(this.content_element).attr("style", 'font-size:' + fontSize + "px !important");
	ts_localStorage.setLocalStorage(this.ls_name, fontSize);
}
ts_zoom.increase = function(){
	var fontSize = parseInt(jQuery(this.content_element).attr('data-size'));
	if (isNaN(fontSize) || fontSize < this.min_size || fontSize > this.max_size){
		fontSize = this.default_size;
	}
	fontSize = fontSize + 1;
	if ( fontSize > this.max_size ){
		fontSize = this.max_size;
	}
	ts_zoom.set_font_size(fontSize);
}
ts_zoom.decrease = function(){
	var fontSize = parseInt(jQuery(this.content_element).attr('data-size'));
	if (isNaN(fontSize) || fontSize < this.min_size || fontSize > this.max_size){
		fontSize = this.default_size;
	}
	fontSize = fontSize - 1;
	if ( fontSize < this.min_size ){
		fontSize = this.min_size;
	}
	ts_zoom.set_font_size(fontSize);
}
ts_zoom.init = function(){
	var current_font_size = ts_localStorage.getLocalStorage(this.ls_name);
	if (isNaN(current_font_size)) return;
	if (current_font_size < this.min_size || current_font_size > this.max_size) {
		this.set_font_size(this.default_size);
		return;
	}
	this.set_font_size(current_font_size);
	return;
}
ts_zoom.attach_events = function(){
	jQuery(document).on('click', this.increase_element, function(){
		ts_zoom.increase();
		return false;
	});
	jQuery(document).on('click', this.decrease_element, function(){
		ts_zoom.decrease();
		return false;
	});
}

function ts_dynamic_ajax_view(post_id) {
	return new Promise(function(resolve, reject) {
	  jQuery(document).ready(function() {
		jQuery.ajax({
		  "url": ajaxurl,
		  "type": 'post',
		  "data": {
			"action": 'dynamic_view_ajax',
			"post_id": post_id
		  },
		  success: resolve,
		  error: reject
		});
	  });
	});
  }