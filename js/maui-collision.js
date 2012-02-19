!function($) {

      function getBox(element) {
            if(element[0] == window || element[0] == document) {
                return {
                    x0 : 0,
                    xn : element.width(),
                    y0 : 0,
                    yn : element.height()
                }
            } else {
                return {
                    x0 : element.offset().left,
                    xn : element.offset().left + element.width(),
                    y0 : element.offset().top,
                    yn : element.offset().top + element.height()
                }
            }
        }

        $.fn.isAbove = function (container) {            
            var box = getBox(this),
                boundry = getBox(container);

            return box.y0 < boundry.y0;
        }

        $.fn.isBelow = function (container) {            
            var box = getBox(this),
                boundry = getBox(container);

            return box.yn > boundry.yn;
        }
        
        $.fn.isBefore = function (container) {            
            var box = getBox(this),
                boundry = getBox(container);

            return box.x0 < boundry.x0;
        }
            
        $.fn.isAfter = function (container) {           
            var box = getBox(this),
                boundry = getBox(container);

            return box.xn > boundry.xn;
        }

        $.fn.isInside = function (container) {            
            var element = this,
                box = getBox(this),
                boundry = getBox(container);

            return box.x0 > boundry.x0 
                    && box.xn < boundry.xn
                    && box.y0 > boundry.y0
                    && box.yn < boundry.yn;
        }

        $.fn.isOutside = function (container) {            
            var element = this,
                box = getBox(this),
                boundry = getBox(container);

            return box.x0 > boundry.xn 
                    || box.xn < boundry.x0
                    || box.y0 > boundry.yn
                    || box.yn < boundry.y0;

        }

        $.fn.isOverlapped = function (container) {
            return !this.isInside(container) && !this.isOutside(container);
        }        
    } (window.jQuery);
