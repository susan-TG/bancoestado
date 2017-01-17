var cliente = [
        {
            nombre: "Jessica Diaz",
            rut: 150005551
        },
        {
            nombre: "Paulina Buhrle",
            rut: 150005552
        },
        {
            nombre: "Maryelin Quintanilla",
            rut: 150005553
        }
    
    ];

// llamado json - rut cliente
$('#buscar').on('click', function(){

        var rutCliente = $('#rut').val();

        //validacion de input buscar
        if ( rutCliente == 0){
            alert('debe ingresar rut!');
            return false;
        }

     

        //iteracion en arreglo para identificar rut
        cliente.forEach(function(item,index){
          if(item.rut == rutCliente){
          	//alert('funciona!');
            rutCliente = item.rut;
            window.localStorage.setItem('rut-save', rutCliente); //local storage rut
            var nombreCliente = item.nombre;
            window.localStorage.setItem('nombre-save', nombreCliente); // local storage nombre
          };
        });
});



function ValidaRut( rut){
	var tmpstr = "";
	var intlargo = getElementById("rut").value();
	if (intlargo.length> 0)
	{
		crut = Objeto.value
		largo = crut.length;
		if ( largo <2 )
		{
			alert('rut inválido')
			Objeto.focus()
			return false;
		}
		for ( i=0; i <crut.length ; i++ )
		if ( crut.charAt(i) != ' ' && crut.charAt(i) != '.' && crut.charAt(i) != '-' )
		{
			tmpstr = tmpstr + crut.charAt(i);
		}
		rut = tmpstr;
		crut=tmpstr;
		largo = crut.length;
 
		if ( largo> 2 )
			rut = crut.substring(0, largo - 1);
		else
			rut = crut.charAt(0);
 
		dv = crut.charAt(largo-1);
 
		if ( rut == null || dv == null )
		return 0;
 
		var dvr = '0';
		suma = 0;
		mul  = 2;
 
		for (i= rut.length-1 ; i>= 0; i--)
		{
			suma = suma + rut.charAt(i) * mul;
			if (mul == 7)
				mul = 2;
			else
				mul++;
		}
 
		res = suma % 11;
		if (res==1)
			dvr = 'k';
		else if (res==0)
			dvr = '0';
		else
		{
			dvi = 11-res;
			dvr = dvi + "";
		}
 
		if ( dvr != dv.toLowerCase() )
		{
			alert('El Rut Ingreso es Invalido')
			Objeto.focus()
			return false;
		}
		alert('El Rut Ingresado es Correcto!')
		Objeto.focus()
		return true;
	}
}

