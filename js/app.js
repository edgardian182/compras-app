$('.btn-plus').on('click',function(){
  var price = +$('#img-producto-modal').data('price');
  var cantidad = +$('#cantidad-p').val();
  $('#cantidad-p').val(cantidad + 1);
  cantidad = +$('#cantidad-p').val();
  $('#total-pagar').text('$' + price*cantidad)
});

$('.btn-minus').on('click',function(){
  var price = +$('#img-producto-modal').data('price');
  var cantidad = +$('#cantidad-p').val();

  if(cantidad > 1) {
    $('#cantidad-p').val(cantidad - 1);
    cantidad = +$('#cantidad-p').val();
    $('#total-pagar').text('$' + price*cantidad);
  }
  else {
    $('#total-pagar').text('$' + price);
  }
});

// MOSTRAR VALOR PRODUCTO
$('.comprando').on('change','#cantidad-p',function(){
  var price = +$('#img-producto-modal').data('price');
  var cantidad = +$('#cantidad-p').val();

  if(cantidad > 1) {
    $('#total-pagar').text('$' + price*cantidad)
  }
  else {
    $('#cantidad-p').val(1);
    $('#total-pagar').text('$' + price);
  }
});


$('#formulario-cantidad-producto').on('submit',function(){

});
