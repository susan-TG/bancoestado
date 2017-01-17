function validaRut(rut){
 var newRut= document.getElementById('rut').value;
 var rexp = new RegExp(/^([0-9])+\-([kK0-9])+$/);
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
}