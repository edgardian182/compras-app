$('.comprando').on('change','#cantidad-p',function(){
  var price = +$('#img-producto-modal').data('price');
  var cantidad = +$('#cantidad-p').val();

  $('#total-pagar').text('$' + price*cantidad)
});

$('#formulario-cantidad-producto').on('submit',function(){

});