!function($){
    var Collision = function (element, options) {
        return this.init(element, options);
    }

    Collision.prototype = {
        constructor: Collision,
        init: function (element, options) {
            this.$element = $(element)
        },

        getBox : function (element) {
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
        },

        getCollisions : function (container) {
            var box = this.getBox(this.$element),
                boundry = this.getBox(container),
                collisions = { top: false, right: false, bottom: false, left: false };
            
            
            if(box.x0 < boundry.x0) {
                collisions.left = true;
            }

            if(box.xn > boundry.xn) { 
                collisions.right = true;
            }

            if(box.y0 < boundry.y0) {
                collisions.top = true;
            }

            if(box.yn > boundry.yn) {
                collisions.bottom = true;
            }

            return collisions;
        },

        isAbove : function (container) {            
            var box = this.getBox(this.$element),
                boundry = this.getBox(container);

            return box.y0 < boundry.y0;
        },

        isBelow : function (container) {            
            var box = this.getBox(this.$element),
                boundry = this.getBox(container);

            return box.yn > boundry.yn;
        },
        
        isBefore : function (container) {            
            var box = this.getBox(this.$element),
                boundry = this.getBox(container);

            return box.x0 < boundry.x0;
        },
            
        isAfter : function (container) {           
            var box = this.getBox(this.$element),
                boundry = this.getBox(container);

            return box.xn > boundry.xn;
        },

        isInside : function (container) {            
            var element = this.$element,
                box = this.getBox(this.$element),
                boundry = this.getBox(container);

            return box.x0 > boundry.x0 
                    && box.xn < boundry.xn
                    && box.y0 > boundry.y0
                    && box.yn < boundry.yn;
        },

        isOutside : function (container) {            
            var element = this.$element,
                box = this.getBox(this.$element),
                boundry = this.getBox(container);

            return box.x0 > boundry.xn 
                    || box.xn < boundry.x0
                    || box.y0 > boundry.yn
                    || box.yn < boundry.y0;

        },

        isOverlapped : function (container) {
            return !this.isInside(container) && !this.isOutside(container);
        }        
    }

    $.fn.collision = function () {
        return new Collision(this);
    }

    $.fn.collision.Constructor = Collision;
} (window.jQuery);
