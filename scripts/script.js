$(document).ready(function() {
  var side = 16;

  generateGrid(side);
  $(".square").hover(function() {
    $(this).css("background-color", "black").css("opacity", "1");
  });

  function generateGrid(side) {
    var squares = side * side;
    $("#grid").empty();
    for (i = 0; i < squares; i++) {
      $("#grid").append("<div class='square'></div>")
    }
  }
});
