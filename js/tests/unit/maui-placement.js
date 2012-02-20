$(function () {
	var trigger,
		container,
		boundry;

	module('maui-placement', {
		setup: function() {
			boundry = $('<div id="boundry">').css({'width': 500, 'height': 500});
			trigger = $('<div id="trigger">');
			container = $('<div id="container">').css({'width': 100, 'height': 200});
			boundry.append(trigger, container);
			$('body').append(boundry);
		},
		teardown: function() {
			$('#trigger').remove();
			$('#container').remove();
            $('#boundry').remove();
		}
	});

    test("placement should be defined on jquery object", function () {
        ok(container.place, 'palcement method is defined');
    });	

	test("placement should place container at bottom left of trigger by default", function () {
		container.place(trigger);
		ok(container.isBelow(trigger), 'the container should be below the trigger');
	});

    test("placement should place container above and to the left of trigger", function () {
		container.place(trigger, {'placement' : {'vertical' : 'top', 'horizontal': 'left'}, 'offsetY': ~container.height()});
		ok(container.isAbove(trigger), 'the container should be above the trigger');
	});

    test("placement should place container in the middle and to the left of trigger", function () {
		container.place(trigger, {'placement' : {'vertical' : 'middle', 'horizontal': 'left'}, 'offsetY': -Math.floor(container.height() / 2)});
		ok(!container.isAbove(trigger), 'the container should not be above the trigger');
        ok(!container.isBelow(trigger), 'the container should not be below the trigger');
        equals((container.coordinates().y + Math.floor(container.height() / 2)), (trigger.coordinates().y + Math.floor(trigger.coordinates().height / 2)));
	});
})
