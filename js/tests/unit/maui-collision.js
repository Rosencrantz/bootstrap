$(function () {
    module("bootstrap-popover")

      test("should be defined on jquery object", function () {
        var div = $('<div></div>')
        ok(div.popover, 'popover method is defined')
      })
})
