$(document).ready(function() {
  var side = 16;

  generateGrid(side);

  function generateGrid(side) {
    var squares = side * side;
    $("#grid").empty();
    for (i = 0; i < squares; i++) {
      $("#grid").append("<div class='square'></div>")
    }
  }
});
