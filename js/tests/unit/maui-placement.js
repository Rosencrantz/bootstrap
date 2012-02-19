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
		}
	});

    test("placement should be defined on jquery object", function () {
        ok(container.placement, 'palcement method is not defined');
    });	

	test("placement should place container at bottom left of trigger by default", function () {
		container.placement(trigger);
		ok(container.isBelow(trigger), 'the container is not below the trigger');
	});

	test("placement should place container at bottom right of trigger when container overlaps boundry", function () {
		container.placement(trigger);
	});
})
