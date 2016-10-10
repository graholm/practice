var quantityInput = $(".element-quantity-input")

quantityInput.keydown(function(e) {
 var keyCode = e.keyCode
  var inputValue = quantityInput.val();
  console.log (keyCode)
})