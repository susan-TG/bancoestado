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


