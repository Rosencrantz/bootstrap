!function ($) {
    var defaults = {};

    $.fn.coordinates = function (options) {
        var item,
            settings;
        
        if(typeof options == 'object') {
            settings = $.extend(defaults, options);
        }  

        if(this[0] == window || this[0] == document) {
            return {
                x : 0,
                width : this.width(),
                y : 0,
                height : this.height()
            }
        } else {        
            item = this.offset();
            return {
                x : item.left,
                width : this.outerWidth(),
                y : item.top,
                height : this.outerWidth()    
            }
        }
    }
} (window.jQuery)

