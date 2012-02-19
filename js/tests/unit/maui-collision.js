$(function () {
	var div,
		container;

	module("maui-collision", {
		setup: function() {
			div = $('<div id="element"></div>').css({'width': '100px', 'height': '100px', 'position': 'absolute'}),
			container = $('<div id="container"></div>').css({'width': '200px', 'height': '200px', 'position': 'absolute'});
			$('body').append(div, container);
		},
		teardown: function() {
			$('#element').remove();
			$('#container').remove();
		}
	});
		
    test("isInside should be defined on jquery object", function () {
        ok(div.isInside, 'isInside method is defined');
    });

    test("isOutside should be defined on jquery object", function () {
        ok(div.isOutside, 'isOutside method is defined');
    });

    test("isOverlapped should be defined on jquery object", function () {
        ok(div.isOverlapped, 'isOverlapped method is defined');
    });

    test("isBefore should be defined on jquery object", function () {
        ok(div.isBefore, 'isBefore method is defined');
    });

    test("isAfter should be defined on jquery object", function () {
         ok(div.isAfter, 'isAfter method is defined');
    });

    test("isAbove should be defined on jquery object", function () {
        ok(div.isAbove, 'isAbove method is defined');
    });

    test("isBelow should be defined on jquery object", function () {
        ok(div.isBelow, 'isBelow method is defined');
    });

	test("element is within the boundries of the container", function () {
		div.css({'top': '100px', 'left': '100px'}),
		container.css({'top': '50px', 'left': '50px'});
		
		ok(div.isInside(container), 'div is not inside container');
		ok(!div.isOutside(container), 'div is outside the container');
		ok(!div.isOverlapped(container), 'div is overlapping the container');
	});

	test("element is ouside the boundries of the container", function () {
		div.css({'top': '-100px', 'left': '-100px'}),
		container.css({'top': '50px', 'left': '50px'});		

		ok(!div.isInside(container), 'div is inside container');
		ok(div.isOutside(container), 'div is not outside the container');
		ok(!div.isOverlapped(container), 'div is overlapping the container');
	});

	test("element is overlapping the boundries of the container", function () {
		div.css({'top': '0px', 'left': '0px'}),
		container.css({'top': '50px', 'left': '50px'});		
		
		ok(!div.isInside(container), 'div is inside container');
		ok(!div.isOutside(container), 'div is not outside the container');
		ok(div.isOverlapped(container), 'div is overlapping the container');
	});
})
