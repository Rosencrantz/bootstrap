!function ($) {
	var defaults = {
		verticalOffset:  1,
		horizontalOffset: 0,
		boundry: $('body')
	}
	$.fn.placement = function(trigger, options) {
		var settings = $.extend(defaults, options)
		$('body').append(this);
		this.css({
			'position': 'absolute', 
			'top': trigger.offset().top + trigger.height() + settings.verticalOffset, 
			'left': trigger.offset().left + settings.horizontalOffset
		});
	} 
}(window.jQuery)
