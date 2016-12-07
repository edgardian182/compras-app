// // set current position
// var cPosition = false;

// $('.modal').on('show.bs.modal', function(){

//     cPosition = $(window).scrollTop();
// })
// .on('shown.bs.modal', function(){

//     $('body').css({
//         position:'fixed'
//     });
// })
// .on('hide.bs.modal', function(){

//     $('body').css({
//         position:'relative'
//     });

//     window.scrollTo(0, cPosition);
// });



$('.comprando').on('change','#cantidad-p',function(){
  var price = +$('#img-producto-modal').data('price');
  var cantidad = +$('#cantidad-p').val();

  $('#total-pagar').text('$' + price*cantidad)
});

$('#formulario-cantidad-producto').on('submit',function(){

});