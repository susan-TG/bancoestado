

	$('#send').on('click', function(){

	   var ciCliente = $('#ci').val();
	   window.localStorage.setItem('ci-cliente', cicliente); // local storage ci

	   var dom = $('#domicilio').val();
	   window.localStorage.setItem('dom-cliente', domCliente); // local storage domicilio

	   var rentaUno = $('#renta1').val();
	   window.localStorage.setItem('sueldo1', rentaUno); // local storage renta1

	   var rentaDos = $('#renta2').val();
	   window.localStorage.setItem('sueldo2', rentaDos); // local storage renta2

	   var rentaTres = $('#renta3').val();
	   window.localStorage.setItem('sueldo3', rentaTres); // local storage renta3

	});







