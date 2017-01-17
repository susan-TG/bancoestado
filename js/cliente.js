$(document).ready(function(){

    //MUESTRA NOMBRE Y RUT 
     var rutClient = localStorage.getItem('rut-save');
     $('#rut-cliente').html(rutClient);

  	 var nomClient = localStorage.getItem('nombre-save');
     $('#nombre-cliente').html(nomClient);

     var carnet = localStorage.getItem('ciCliente');
     $('#cedula').html(carnet);

     var direc-cliente = localStorage.getItem('dom-cliente');
     $('#direccion').html(direc-cliente);

     var liquidacionUno = localStorage.getItem('sueldo1');
     $('#rentaUno').html(liquidacionUno);

     var liquidacionDos = localStorage.getItem('sueldo2');
     $('#rentaDos').html(liquidacionDos);

     var liquidacionTres = localStorage.getItem('sueldo3');
     $('#rentsTres').html(liquidacionTres);



});


//$('#ci').on('change', function(evento){
//    // primero recuperamos el archivo subido
//    var cedula = $(this)[0].files[0];
//
//    // creamos un FileReader
//    // FileReader es un objeto de JS para leer archivos
//    var reader = new FileReader();
//
//    // le decimos al filereader qué hacer cuando termine de cargar
//    reader.onload = function(efr) {
//        $('#cedula img').attr('src', efr.target.result);
//    }
//    // sólo queda cargar la imagen
//    reader.readAsDataURL(cedula);
//});
//
//
//$('#submitCi').on('submit', function(es){
//    // primero evitamos que se envie el formulario
//    es.preventDefault();
//
//    // pescamos archivo de la imagen
//    var cedula = $('#ci')[0].files[0];
//
//    // creamos FileReader
//    var reader = new FileReader();
//
//    // le decimos al filereader que hacer cuando termine de cargar
//    reader.onloadend = function(efr) {
//        var datos_imagen = reader.result;
//        // se guarda imagen en localStorage
//        localStorage.setItem('cedula', datos_imagen);
//        Materialize.toast('<span>Imagen guardada con éxito !</span>', 2000);
//    }
//
//    // finalmente leemos la imagen
//    reader.readAsDataURL(cedula);
//});





