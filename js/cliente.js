$(document).ready(function(){

    //MUESTRA NOMBRE Y RUT 
     var rutClient = localStorage.getItem('rut-save');
     $('#rut-cliente').html(rutClient);

  	 var nomClient = localStorage.getItem('nombre-save');
     $('#nombre-cliente').html(nomClient);
});
