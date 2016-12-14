/* Evitar Scrolling (PONER CLASE CON JS) */
html.no-scroll, body.no-scroll {
  margin: 0;
  height: 100%;
  overflow-x: hidden;
}
/* ****************************************************** */

body {
  padding-top: 50px;
  /*padding-bottom: 50px;*/
}

/* MODAL SIN SCROLL MOVILES*/
@media only screen and (max-device-width:768px){

  body.modal-open {
    /* block scroll for mobile;
     causes underlying page to jump to top;
     prevents scrolling on all screens*/
    overflow: hidden;
    position: fixed;
  }
}

body.viewport-lg {
/* block scroll for desktop;
 will not jump to top;
 will not prevent scroll on mobile*/
position: absolute;
}

body {
overflow-x: hidden;
overflow-y: scroll !important;
}
/* ****************************************************** */

/* BOTON OPCIONES */
.btn-opciones {
  position: relative;
  float: left;
  margin-top: 8px;
  margin-left: 10px;
  margin-bottom: 8px;
  background-color: transparent;
  background-image: none;
  border: 1px solid transparent;
  border-radius: 4px;
  color: white;
  border-color: #c0392b;
}

.btn-opciones:hover {
  background-color: #c0392b;
  color: white;
}
/* ****************************************************** */

@charset "utf-8";
/* Definimos imagen de fondo */
.container-fluid-fondo {
  background: url(../imagenes/fondo_app_buy_all.png) no-repeat;
  background-size: 100% 100%;
}

/* Contenedor contenido APP*/
.container-fluid-fondo .container-fondo {
  height: 100%; /* TAMAÑO DE TODO EL CONTENEDOR TENIENDO EN CUENTA PADDING */

  margin-right: 2%;
  margin-left: 2%;
  border-radius: 20px;
  padding: 2%;
  background-color: #FFF;
}



@media only screen and (min-width: 250px) and (orientation: portrait) {
  .container-fluid-fondo .container-fondo {
    margin-right: 0%;
    margin-left: 0%;
  }

  /* ************************** BUSQUEDA *********************** */
  #img-carrito {
    width: 80%;
    height: 50%;
  }
  .buscador {
    padding-top: 5%;
  }
  /* ************************** FIN BUSQUEDA *********************** */

  /* ************************** VITRINA *********************** */
  .container-listado-productos {
    padding: 2%;
    /*height: 400px;*/
    height: 60vh;
  }

  /* Hacer descripcion producto acorde con dimensiones */
  .container-descripcion {
    position: relative;
    padding: 2%;
    font-weight: bold;
    font-size: 3.7vw;  /* 1.3em o 3vw */
  }
  /* ************************** FIN VITRINA *********************** */

  /* ************************** PIE *********************** */
    #contenedor-pie {
    background: url(../imagenes/fondo_mensaje_buy_all_2.png) no-repeat;
    background-size: 100% 100%;
    height: 18vh;
    padding-bottom: 10px;
  }

  #mensajes-provocativos {
    background: rgba(90,90,90,0.5);
    position: relative;
    top: 15px;
    left: 20px;
  }

  #img-canasta {
    position: relative;
    right: -30px;
    /*height: 14vh;*/
  }
  /* ************************** FIN PIE *********************** */

}

@media only screen and (min-width: 250px) and (orientation: landscape) {
  .container-fluid-fondo .container-fondo {
    margin-right: 0%;
    margin-left: 0%;
  }

  /* ************************** BUSQUEDA *********************** */
  #img-carrito {
    width: 80%;
    height: 50%;
  }
  .buscador {
    padding-top: 5%;
  }
  /* ************************** FIN BUSQUEDA *********************** */

  /* ************************** VITRINA *********************** */
  .container-listado-productos {
    padding: 2%;
    /*height: 400px;*/
    height: 95vh; /* 85vh */
  }

  /* Hacer descripcion producto acorde con dimensiones */
  .container-descripcion {
    position: relative;
    padding: 1%;
    font-weight: bold;
    font-size: 3vw; /* 1.3em  o 3vw*/
  }
  /* ************************** FIN VITRINA *********************** */

  /* ************************** PIE *********************** */
  #contenedor-pie {
    background: url(../imagenes/fondo_mensaje_buy_all_2.png) no-repeat;
    background-size: 100% 100%;
    height: 18vh;
    padding-bottom: 10px;
  }

  #mensajes-provocativos {
    background: rgba(90,90,90,0.5);
    position: relative;
    top: 15px;
    left: 20px;
  }

  #img-canasta {
    position: relative;
    right: -30px;
    height: 14vh;
  }
  /* ************************** FIN PIE *********************** */
}


@media only screen and (min-width: 550px) {
  /* ************************** BUSQUEDA *********************** */
  #img-carrito {
    width: 65%;
    height: 50%;
  }
  .buscador {
    padding-top: 7%;
  }
  /* ************************** FIN BUSQUEDA *********************** */

  /* ************************** VITRINA *********************** */
  /* Hacer descripcion producto acorde con dimensiones */
  .container-descripcion {
    position: relative;
    padding: 1.5%;
    font-weight: bold;
    font-size: 2.5vw; /* 1.3em  o 3vw*/
  }
  /* ************************** FIN VITRINA *********************** */

  /* ************************** PIE *********************** */
  #img-canasta {
    position: relative;
    float: right;
    width: 65%;
    right: -30px;
    bottom: 10px;
  }
  /* ************************** FIN PIE *********************** */
}

@media only screen and (min-width: 769px) {
  .container-fluid-fondo .container-fondo {
    margin-right: 12%;
    margin-left: 12%;
  }

  /* ************************** BUSQUEDA *********************** */
  #img-carrito {
    width: 90%;
    height: 50%;
  }
  .buscador {
    padding-top: 3%;
  }
  /* ************************** FIN BUSQUEDA *********************** */

  /* ************************** VITRINA *********************** */
  .container-listado-productos {
    padding: 2%;
    /*height: 400px;*/
    height: 60vh; /* 85vh */
  }

  /* Hacer descripcion producto acorde con dimensiones */
  .container-descripcion {
    position: relative;
    padding: 2%;
    font-weight: bold;
    font-size: 2vw;
  }
  /* ************************** FIN VITRINA *********************** */

  /* ************************** PIE *********************** */
  #contenedor-pie {
    background: url(../imagenes/) no-repeat;
    background-size: 100% 100%;
    height: 18vh;
  }

  #mensajes-provocativos {
    background: rgb(90,184,104);
    position: relative;
    top: 15px;
    left: 20px;
  }

  .barra-inferior {
    display: none;
  }
  /* ************************** FIN PIE *********************** */
}

@media only screen and (min-width: 992px) {
  /* ************************** BUSQUEDA *********************** */
  #img-carrito {
    width: 75%;
    height: 50%;
  }
  .buscador {
    padding-top: 3%;
  }
  /* ************************** FIN BUSQUEDA *********************** */

  /* ************************** VITRINA *********************** */
  .container-listado-productos {
    padding: 2%;
    /*height: 400px;*/
    /*width: 85%;*/
    margin: auto;
  }

  /* Hacer descripcion producto acorde con dimensiones */
  .container-descripcion {
    position: relative;
    padding: 1%;
    font-weight: bold;
    font-size: 1.6vw;
  }
  /* ************************** FIN VITRINA *********************** */

  /* ************************** PIE *********************** */
  #img-canasta {
    width: 50%;
  }
  /* ************************** FIN PIE *********************** */
}

@media only screen and (min-width: 1200px) {

  /* ************************** PIE *********************** */
  #img-canasta {
    width: 40%;
  }
  /* ************************** FIN PIE *********************** */
}




/* ************************* VITRINA PRODUCTOS ******************************** */
.desplazamiento {
  position: relative;
  padding : 4px;
  width : 100%;
  height : 100%;
  overflow : auto;
  border: 1px solid red;
}

.container-vitrina {
  width: 100%;
  margin: auto;
  height: 38%;
  background: url("../imagenes/estante%20productos3.png") no-repeat bottom;
  background-size: 100% 100%;
  position: relative;
}

  .container-producto {
    position: relative; /* Sera relativo a su posición normal */
    height: 100%; /* Todo el alto del container-vitrina; Ancho limitado por col-xs-3 */
    left: 4%; /* Espacio para mejor colocación en vitrina */
  }

    .link-producto {
      cursor: pointer;
    }

    .producto {
      max-width: 100%; /* 100% ancho de su contenedor logoP*/
      max-height: 80%; /* 80% del tamaño de su contenedor => quedar sobre la imagen de la Vitrina */
      position: absolute; /* Relativo a posicion de .logoP */
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin-top: auto;
      margin-bottom: auto;
    }

/*  .container-descripcion {
    position: relative;
    padding: 5%;
    font-weight: bold;
    font-size: 1.4em;
  }*/

  .container-btn-logo {
    height: 100%;
    position: relative;
    right: 5%;
  }

    .contain-half {
      position: relative;
      height: 50%;
    }

      .logoEmpresa {
        position: relative;
        width: 50%;
        height: 50%;
        margin: auto;
        top: 15px;
      }
/* ************************* FIN VITRINA PRODUCTOS ******************************** */

/* ************************ CARRUSEL MODAL DETALLES ******************************** */

.carousel-inner > .item > img,
  .carousel-inner > .item > a > img {
      width: 70%;
      margin: auto;
      max-height: 450px;
  }

  /* La X para cerrar*/
  #modal-cierre {
    opacity: 0.5;
  }

  #modal-cierre:hover {
    opacity: 1;
  }
  /* ***************** */

  .desplazamiento-modal-produtos {
    padding : 4px;
    width : 100%;
    height : 180px;
    overflow : auto;
    border: 1px solid red;
  }


  .img-container{
    position: relative;
    max-height: 300px;
    min-height: 300px;
    background: #F0F1F3;
  }

  .img-modal {
    max-height: 100%;
    max-width: 100%;
    width: auto;
    height: auto;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }

  /* ************************ FIN CARRUSEL MODAL DETALLES ******************************** */

  /* ************************ CARRUSEL MODAL COMPRAR ******************************** */

  .img-container2{
    position: relative;
    max-height: 200px;
    min-height: 200px;
  }

  /* ************************ CARRUSEL MODAL FIN COMPRAR ******************************** */

