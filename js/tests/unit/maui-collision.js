$(function () {
    module("maui-collision")

    test("should be defined on jquery object", function () {
        var div = $('<div></div>')
        ok(div.collision, 'collision method is defined')
    });

      test("should return element", function () {
        var div = $('<div></div>')
        ok(div.collision() == div, 'document.body returned')
      })

})
