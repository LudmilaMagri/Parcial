/*
Bienvenidos.
debemos alquilar el servicio de transporte para llegar a Mar del Plata con un grupo de personas, de cada persona debemos optener los siguientes datos:
Nombre,
estado civil ("soltero", "casado" o "viudo"),
edad( solo mayores de edad, mas de 17),
temperatura corporal(validar por favor)
y sexo (validar).
NOTA:el precio por pasajero es de $600.
Se debe informar (solo si corresponde):
a) La cantidad de personas con estado "viudo" de mas de 60 años.
b) el nombre y edad de la mujer soltera mas joven.
c) cuanto sale el viaje total sin descuento.
d) si hay mas del 50% del pasaje que tiene mas de. 60 años , el precio final tiene un descuento del 25%, que solo mostramos si corresponde.

*/
function mostrar()
{
	
    var seguir;
    var nombre;
    var estadoCivil;
    var edad;
    var temperatura;
    var sexo;
    var precioPorPasajero=600;
    var contadorViudosMasSesenta=0;
    var flagSoltera=1;
    var nombreSolteraMasJoven;
    var edadSolteraMasJoven;
    var contadorCantidadPasajeros=0;
    var importeTotal;
    var importeConDescuento;


    do {

        nombre=prompt("Ingrese su nombre");
        while(isNaN(nombre)==false)
        {
            nombre=prompt("Ingrese su nombre");
        }

        estadoCivil=prompt("Ingrese su estado civil");
        while(isNaN(estadoCivil)==false || estadoCivil!="soltero" && estadoCivil!="casado" && estadoCivil!="viudo")
        {
            estadoCivil=prompt("Ingrese su estado civil");
        }

        edad=parseInt(prompt("Ingrese su edad"));
        while(isNaN(edad)==true || edad<18)
        {
            edad=parseInt(prompt("Ingrese su edad"));

        }

        temperatura=parseInt(prompt("Ingrese la temperatura"));
        while(isNaN(temperatura)==true)
        {
            temperatura=parseInt(prompt("Ingrese la temperatura"));
        }

        sexo=prompt("Ingrese el sexo");
        while (isNaN(sexo)==false || sexo!="femenino" && sexo!="masculino")
        {
            sexo=prompt("Ingrese el sexo");
        }

        contadorCantidadPasajeros++;

        switch (estadoCivil) 
        {
            case "viudo":
            
                if (edad>=60)
                {
                    contadorViudosMasSesenta++;
                    
                }
                break;

            case "soltero":
                
                if (sexo=="femenino" )
                {
                    if (flagSoltera==1 || edad<edadSolteraMasJoven)
                    {
                        edadSolteraMasJoven=edad;
                        nombreSolteraMasJoven=nombre;
                        flagSoltera=0;
                    }
                }
                break;
           
        }

        seguir=confirm("Desea seguir ingresando algun dato?");
    } while (seguir);



 //a) La cantidad de personas con estado "viudo" de mas de 60 años.
    if (contadorViudosMasSesenta>0)
    {
        document.write("Cantidad de personas viudas mas de 60 años: "+contadorViudosMasSesenta+"<br>");
    }
    else
    {
        document.write("No se registraron viudos mas de 60 años")+"<br>";
    }
    

   // b) el nombre y edad de la mujer soltera mas joven.
    if (flagSoltera==0)
    {
         document.write("El nombre de la mujer soltera mas joven es: "+nombreSolteraMasJoven+ " y su edad es: "+edadSolteraMasJoven+"<br>");
    }
    else 
    {
        document.write("No se registro una mujer joven soltera")+"<br>";
    }

    //c) cuanto sale el viaje total sin descuento.
     importeTotal=(contadorCantidadPasajeros*precioPorPasajero);

     if (importeTotal>0)
    {
        document.write("El importe total es: "+importeTotal+"<br>");
    }

    //d) si hay mas del 50% del pasaje que tiene mas de. 60 años , el precio final tiene un descuento del 25%, que solo mostramos si corresponde.
    if (contadorViudosMasSesenta>contadorCantidadPasajeros)
    {
        importeConDescuento= importeTotal-(importeTotal* 25/100);
        document.write("El importe total con descuento es: "+importeConDescuento+"<br>");
    }


}

