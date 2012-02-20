!function($) {
        function getCoordinates(container) {
            return container.hasOwnProperty('x0') ? container : container.coordinates();
        }

        $.fn.isAbove = function (container) {            
            var box = this.coordinates(),
                boundry = getCoordinates(container);

            return (box.y + box.height) < boundry.y;
        }

        $.fn.isBelow = function (container) {            
            var box = this.coordinates(),
                boundry =  getCoordinates(container);

            return box.y > (boundry.y + boundry.height);
        }
        
        $.fn.isBefore = function (container) {            
            var box = this.coordinates(),
                boundry = getCoordinates(container);

            return box.x < boundry.x;
        }
            
        $.fn.isAfter = function (container) {           
            var box = this.coordinates(),
                boundry = getCoordinates(container);

            return box.x  > (boundry.x + boundry.width);

        }

        $.fn.isInside = function (container) {            
            var element = this,
                box = this.coordinates(),
                boundry = getCoordinates(container);

            return box.x > boundry.x
                    && (box.x + box.width) < (boundry.x + boundry.width)
                    && box.y > boundry.y
                    && (box.y + box.height) < (boundry.y + boundry.height);
        }

        $.fn.isOutside = function (container) {            
            var element = this,
                box = this.coordinates(),
                boundry = getCoordinates(container);

            return box.x > (boundry.x + boundry.width) 
                    || (box.x + box.width) < boundry.x
                    || box.y > (boundry.y +  boundry.height)
                    || (box.y + box.height) < boundry.y;

        }

        $.fn.isOverlapped = function (container) {
            return !this.isInside(container) && !this.isOutside(container);
        }        
    } (window.jQuery);
