// SIDEBAR MENU
$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");

    var wrapper = $('#wrapper');
    if (wrapper.hasClass('toggled')) {
      document.body.addEventListener('touchmove', function(e){ e.preventDefault(); });
    }
    else {
      document.body.addEventListener('touchmove', function(e){ });
    }
});
$("#menu-toggle2").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});



// Aumentar y Bajar cantidad de producto
$('.btn-plus').on('click',function(){
  var price = +$('#img-producto-modal').data('price');
  var cantidad = +$('#cantidad-p').val();
  $('#cantidad-p').val(cantidad + 1);
  cantidad = +$('#cantidad-p').val();
  $('#total-pagar').text('$' + price*cantidad);
  $('#total-pagar-input').val(price*cantidad);
});

$('.btn-minus').on('click',function(){
  var price = +$('#img-producto-modal').data('price');
  var cantidad = +$('#cantidad-p').val();

  if(cantidad > 1) {
    $('#cantidad-p').val(cantidad - 1);
    cantidad = +$('#cantidad-p').val();
    $('#total-pagar').text('$' + price*cantidad);
    $('#total-pagar-input').val(price*cantidad);
  }
  else {
    $('#total-pagar').text('$' + price);
    $('#total-pagar-input').val(price);
  }
});

// MOSTRAR VALOR PRODUCTO
$('.comprando').on('change','#cantidad-p',function(){
  var price = +$('#img-producto-modal').data('price');
  var cantidad = +$('#cantidad-p').val();

  if(cantidad > 1) {
    $('#total-pagar').text('$' + price*cantidad)
    $('#total-pagar-input').val(price*cantidad);
  }
  else {
    $('#cantidad-p').val(1);
    $('#total-pagar').text('$' + price);
    $('#total-pagar-input').val(price);
  }
});


$('#formulario-cantidad-producto').on('submit',function(){

});
