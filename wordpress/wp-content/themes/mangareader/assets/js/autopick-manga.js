var ts_scrollTo = {
    clearAllSelections: function() {
        if (document.selection && document.selection.empty) {
            document.selection.empty();
        } else if (window.getSelection) {
            var sel = window.getSelection();
            sel.removeAllRanges();
        }
    },

    getWindowClientVisibleRect: function () {
        var html = document.documentElement;
        var body = document.body;
        var doc = (html && html.clientWidth) ? html : body;

        var scrollTop = window.pageYOffset || html.scrollTop || body.scrollTop;
        var scrollLeft = window.pageXOffset || html.scrollLeft || body.scrollLeft;

        var clientTop = html.clientTop || body.clientTop || 0;
        var clientLeft = html.clientLeft || body.clientLeft || 0;

        var windowLeft = scrollLeft - clientLeft;
        var windowRight = doc.clientWidth + windowLeft;
        var windowTop = scrollTop - clientTop;
        var windowBottom = doc.clientHeight + windowTop;

        return { left: windowLeft, top: windowTop, right: windowRight, bottom: windowBottom };
    },

    getScrollableElementVisibleRect: function (element) {
        var left = element.scrollLeft - element.clientLeft;
        var top = element.scrollTop - element.clientTop;

        return { left: left, top: top, right: element.clientWidth + left, bottom: element.clientHeight + top };
    },

    getCoordinates: function (element) {
        var top = 0, left = 0;

        if (element.getBoundingClientRect) {
            var windowRect = this.getWindowClientVisibleRect();
            var elementRect = element.getBoundingClientRect();

            top = Math.round(elementRect.top + windowRect.top);
            left = Math.round(elementRect.left + windowRect.left);
        }
        else {
            while (element) {
                top = top + parseInt(element.offsetTop);
                left = left + parseInt(element.offsetLeft);
                element = element.offsetParent;
            }
        }
        return { top: top, left: left, right: left + element.offsetHeight, bottom: top + element.offsetHeight };
    },

    scrollWindowVerticallyToElement: function (element) {
        var elemCoord = this.getCoordinates(element);
        var wndRect = this.getWindowClientVisibleRect();

        if (elemCoord.top < wndRect.top) {
            window.scrollTo(wndRect.left, elemCoord.top);
        }
        else if (elemCoord.bottom > wndRect.bottom) {
            window.scrollBy(0, elemCoord.bottom - wndRect.bottom);
        }
    },

    scrollVerticallyToElement: function (jqElement, useAnimation) {
        if (!jqElement || !jqElement.parent) {
            return;
        }

        var scrollToElement;
        if (!useAnimation) {
            scrollToElement = function(jq, scrollValue) {
                jq.scrollTop(scrollValue);
            };
        }
        else {
            scrollToElement = function (jq, scrollValue) {
                jq.animate({
                    scrollTop: scrollValue
                }, 'fast');
            };
        }

        jqElement.parents().each(function () {
            var jqThis = jQuery(this);

            var top = Math.round(jqElement.position().top);
            var bottom = top + jqElement.innerHeight();

            var parentTop = Math.round(jqThis.position().top);
            var parentBottom = parentTop + jqThis.innerHeight();

            if (top < parentTop && jqThis.scrollTop() > 0) {
                scrollToElement(jqThis, jqThis.scrollTop() - parentTop + top);
            } else if (bottom > parentBottom) {
                scrollToElement(jqThis, jqThis.scrollTop() - parentBottom + bottom);
            }
        });

        this.scrollWindowVerticallyToElement(jqElement.get(0));
    }
};

var autopick_manga = {};
autopick_manga.can_run = function(){
    return typeof(ts_manga_info) === typeof({}) && ts_manga_info !== null;
}
autopick_manga.pick_category = function(){
    if ( ! this.can_run()) return;
    if ( ! ts_manga_info.category) return;
    var cat_ID = ts_manga_info.category.term_id;
    var input_el = jQuery('#in-category-' + cat_ID);
    if (input_el.length < 1) return alert("Cannot auto select post category");
    ts_scrollTo.scrollVerticallyToElement(jQuery('li#category-' + cat_ID), true);
    if (input_el.is(":checked")) return;
    input_el.trigger('click');   
}
autopick_manga.pick_manga = function(){
    if ( ! this.can_run()) return;
    var select_element = jQuery('select#ero_seri');
    if (select_element.length < 1) return alert("Cannot auto select Manga Series");
    select_element.val(ts_manga_info.ID);
}
autopick_manga.fill_title = function(){
    if ( ! this.can_run()) return;
    if ( ! jQuery("input#title").length) return;
    var old_title = jQuery("label#title-prompt-text").html();
    jQuery("label#title-prompt-text").html(ts_manga_info.post_title + "");
    jQuery("input#title").one('keypress', function(){
        if (this.value) return;
        jQuery("input#title").val(ts_manga_info.post_title + " ");
        jQuery("label#title-prompt-text").addClass('screen-reader-text').html(old_title);
       
    })
}
autopick_manga.run = function(){
    this.pick_category();
    this.fill_title();
}
autopick_manga.pick_manga();
jQuery(document).ready(function(){
    autopick_manga.run();
});