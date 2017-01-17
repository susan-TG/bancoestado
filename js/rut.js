function validaRutCliente(rut){
 var newRut= document.getElementById('rut').value;
 var rexp = new RegExp(/^([0-9])+\-([kK0-9])+$/);
 var password = document.getElementById('input-password').value;
 if (newRut.length == 0){
    alert('[ERROR] debe ingresar los digitos del rut');
}else if(newRut.length>10){
    alert("El rut no puede exceder de 10 dígitos");
     return true;
}else if(newRut.match(rexp)){
     var cedula = rut.split("-");
     var elRut = cedula[0].toArray();
     var factor = 2;
     var suma = 0;
     var dv;
     for(i=(elRut.length-1); i>=0; i--){
         factor = factor > 7 ? 2 : factor;
         suma += parseInt(elRut[i])*parseInt(factor++);
     }
     dv = 11 -(suma % 11);
     if(dv == 11){
         dv = 0;
     }else if (dv == 10){
         dv = "k";
     }
     if(dv == cedula[1].toLowerCase()){
         alert("El rut es válido!!");
         return true;
     }else{         
         alert("El rut es incorrecto");
         return false;
     }
 }else{     
     alert("Formato incorrecto");
     return false;
 }
 if(password== null || password.length< 6|| /[0-9]/.test(password)){
        var password = document.getElementById('input-password').value;
            alert("El password debe contener al menos seis digitos");
            return false;
        }else if(password=="password" || password=="123456" || password=="098754" ){
            alert("Elige un password mas seguro");
        }else{
            return true;
        }   
}
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





