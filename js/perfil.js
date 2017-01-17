$(document).ready(function(){

    //MUESTRA NOMBRE Y RUT 
     var rutClient = localStorage.getItem('rut-save');
     $('#rut-cliente').html(rutClient);

  	 var nomClient = localStorage.getItem('nombre-save');
     $('#nombre-cliente').html(nomClient);
});

var imagen= document.getElementById('seis').value;
localStorage.setItem("ci", img);