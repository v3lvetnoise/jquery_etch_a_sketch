$(document).ready(function() {
  var squares_amount = prompt("How many squares do you want on each side? (64 max)");

  if (squares_amount < 1 || squares_amount == null || squares_amount > 64) {
    squares_amount = 16;
  }

  generateGrid(squares_amount);

  $(".square").hover(function() {
    $(this).css("background-color", getRandomColor()).css("opacity", "1");
  });

  $("#generateNew").on("click", function() {
    reloadPage();
  });

  function generateGrid(squares_amount) {
    var square_size = (800 / squares_amount).toString() + "px";
    var squares = squares_amount * squares_amount;

    $("#grid").empty();

    for (i = 0; i < squares; i++) {
      $("#grid").append("<div class='square'></div>")
    }

    $(".square").css({"width": square_size, "height": square_size});
  }

  function reloadPage() {
    location.reload();
  }

  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
});
