var quantityInput = $(".element-quantity-input")
quantityInput.keydown(function(e) {

  var keyCode = e.keyCode
  var inputValue = quantityInput.val();

  if (keyCode == 13) {
    var valueseason = $("#dropDownId").val();

    var season = (valueseason); 
    console.log (season)