$(function () {
	var div;

	module("maui-coordinates", {
		setup: function() {
			div = $('<div id="element"></div>').css({'width': '100px', 'height': '100px', 'position': 'absolute'}),
			$('body').append(div);
		},
		teardown: function() {
			$('#element').remove();
		}
	});
		
    test("coordinates should be defined on jquery object", function () {
        ok(div.coordinates, 'coordinates method is defined');
    });

	test("returned coordinates match expected values", function () {
		var box;

        div.css({'top': 100, 'left': 100});
	    box = div.coordinates();	

		ok(box.x == 100, 'coordinate x does not match expected value');
		ok(box.width == 100, 'coordinate width matches expected value');
		ok(box.y == 100, 'coordinate y matches expected value');
		ok(box.height == 100, 'coordinate height matches expected value');
    });

    test("returned coordinates match expected values when element contains padding", function () {
        var box = div.css({'top': 100, 'left': 100, 'padding': 10}).coordinates();
            
		ok(box.x == 100, 'coordinate x does not match expected value');
		ok(box.width == 120, 'coordinate width matches expected value');
		ok(box.y == 100, 'coordinate y matches expected value');
		ok(box.height == 120, 'coordinate height matches expected value');
    });

    test("returned coordinates match expected values when element contains margin", function () {
        var box = div.css({'top': 100, 'left': 100, 'margin': 10}).coordinates();
            
		ok(box.x == 110, 'coordinate x does not match expected value');
		ok(box.width == 100, 'coordinate width matches expected value');
		ok(box.y == 110, 'coordinate y matches expected value');
		ok(box.height == 100, 'coordinate height matches expected value');      
    });

    test("returned coordinates match expected values for window", function () {
        var box = $(window).coordinates();
            
		ok(box.x == 0, 'x matches expected value');
		ok(box.width == $(window).width(), 'width does matches expected value');
		ok(box.y == 0, 'y matches expected value');
		ok(box.height == $(window).height(), 'height matches expected value');
    });

    test("returned coordinates match expected values for document", function () {
        var box = $(document).coordinates();
            
		ok(box.x == 0, 'coordinate x0 does not match expected value');
		ok(box.width == $(document).width(), 'coordinate xn does not match expected value');
		ok(box.y == 0, 'coordinate y0 does not match expected value');
		ok(box.height == $(document).height(), 'coordinate yn does not match expected value');
    });
});
