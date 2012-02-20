!function ($) {
    var defaults = {
        placement : {
            'veritcal' : 'bottom',
            'horizontal' : 'left'
        },
        offsetX : 0,
        offsetY : 1,
        boundry : $('#boundry'),
        keepInBoundry : true
    }

    $.fn.place = function(trigger, options) {
        var settings = typeof options == 'object' ? $.extend(defaults, options) : defaults,
            triggerPos = trigger.coordinates(),
            left = 0,
            top = 0;

        if(settings.placement.horizontal == 'center') {
            left = triggerPos.x + Math.floor(triggerPos.width / 2);
        }  else if(settings.placement.horizontal == 'right') {
            left = triggerPos.x + triggerPos.width;
        } else {
            left = triggerPos.x;
        }

        if(settings.placement.vertical == 'middle') {
            top = triggerPos.y + Math.floor(triggerPos.height / 2);
        }  else if(settings.placement.vertical == 'top') {           
            top = triggerPos.y;
        } else {
            top = triggerPos.y + triggerPos.height;
        }
        
        this.css({
            'position': 'absolute',
            'left': left + settings.offsetX,
            'top': top + settings.offsetY
        });

    }
}(window.jQuery)
