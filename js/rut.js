var cliente = [
        {
            nombre: "Jessica Diaz",
            rut: 15000555-1
        },
        {
            nombre: "Paulina Buhrle",
            rut: 15000555-2
        },
        {
            nombre: "Maryelin Quintanilla",
            rut: 15000555-3
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


