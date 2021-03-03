/*Debemos realizar la carga de una compra de 5(cinco) productos de desinfección
de cada una debo obtener los siguientes datos:
el nombre del producto el tipo de producto (validar "ALCOHOL", "IAC" o "QUAT"),
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
el tipo de inflamable("ignífugo", "combustible", "explosivo" ) y la Marca.
Se debe Informar al usuario lo siguiente:
a) El promedio de cantidad por tipo de producto
b) El tipo de inflamable con más cantidad de unidades en total de la compra
c) Cuántas unidades de IAC con precios menos a 200 (inclusive) se compraron en total
d) la marca y tipo del más caro de los productos*/ 
function mostrar()
{
	var nombreProducto;
	var precioProducto;
	var cantidadProducto;
	var tipoInflamable;
	var marcaProducto;

	var promedioAlcohol;
	var promedioIac;
	var promedioQuat;

	var contadorAlcohol=0;
	var contadorIac=0;
	var contadorQuat=0;
	var contadorUnidadesIac=0;

	var acumuladorCantidadAlcohol=0;
	var acumuladorCantidadIac=0;
	var acumuladorCantidadQuat=0;

	var flagInflamable=1;
	var cantidadMax;
	var tipoInflamableMax;

	var precioMaximo;
	var nombrePrecioMaximo;
	var marcaPrecioMaximo;
	var flagPrecioMax=1;



	for(var i=0; i<5; i++)
    {
        nombreProducto=prompt("Ingrese nombre del producto (ALCOHOL, IAC, QUAT)");
        while(isNaN(nombreProducto)== false || nombreProducto!="ALCOHOL" && nombreProducto!= "IAC" && nombreProducto!="QUAT")
        {
            nombreProducto=prompt("Ingrese nombre del producto (ALCOHOL, IAC, QUAT)");
        }
        precioProducto=parseInt(prompt("Ingrese precio del producto"));
        while(isNaN (precioProducto)==true || precioProducto<0 || precioProducto>300)
        {
            precioProducto=parseInt(prompt("Ingrese precio del producto"));
        }
        cantidadProducto=parseInt(prompt("Ingrese la cantidad del producto"));
        while(isNaN(cantidadProducto)==true || cantidadProducto<0 || cantidadProducto>1000)
        {
        cantidadProducto=parseInt(prompt("Ingrese la cantidad del producto"));

        }
        tipoInflamable=prompt("Ingrese el tipo del producto (ignífugo, combustible, explosivo )");
        while(isNaN(tipoInflamable)== false || tipoInflamable!="ignifugo" && tipoInflamable!= "combustible" && tipoInflamable!="explosivo")
        {
            tipoInflamable=prompt("Ingrese el tipo del producto (ignífugo, combustible, explosivo )");
        }
        marcaProducto=prompt("Ingrese la marca del producto");
        while(isNaN(marcaProducto)==false)
        {
            marcaProducto=prompt("Ingrese la marca del producto");
        }

		switch(nombreProducto)
		{
			case "ALCOHOL":
				contadorAlcohol++;
				acumuladorCantidadAlcohol=acumuladorCantidadAlcohol+cantidadProducto;

				break;

			case "IAC":
				contadorIac++;
				acumuladorCantidadIac=acumuladorCantidadIac+cantidadProducto;
					if(precioProducto<=200)
					{
						contadorUnidadesIac++;
					}
				break;

			case "QUAT":
				contadorQuat++;
				acumuladorCantidadQuat=acumuladorCantidadQuat+cantidadProducto;
				break;
		}


//c) Cuántas unidades de IAC con precios menos a 200 (inclusive) se compraron en total

	}
//a) El promedio de cantidad por tipo de producto
	if (contadorAlcohol>0)
	{
		promedioAlcohol=acumuladorCantidadAlcohol/contadorAlcohol;
		document.write("El promedio de alcohol es: "+ promedioAlcohol+"<br>");
	}
	else
	{
		document.write("No se registraron alcoholes"+"<br>");
	}

	if(contadorIac>0)
	{
		promedioIac=acumuladorCantidadIac/contadorIac;
		document.write("El promedio de IAC es: "+ promedioIac+"<br>");

	}
	else
	{
		document.write("No se registró IAC"+"<br>");
	}

	if (contadorQuat>0)
	{
		promedioQuat= acumuladorCantidadQuat/contadorQuat;
		document.write("El promedio de QUAT es: "+ promedioQuat+"<br>");

	}
	else
	{
		document.write("No se registraron QUAT"+"<br>");

	}

	//b) El tipo de inflamable con más cantidad de unidades en total de la compra
	if(flagInflamable==1 || cantidadProducto>cantidadMax )
    {
        cantidadMax=cantidadProducto;
        tipoInflamableMax=tipoInflamable;
        flagInflamable=0;
    }


	if (flagInflamable==0)
	{
		document.write("El tipo de inflamable con mas cantidad de unidades en total es: "+ tipoInflamableMax+"<br>");
	}

	//c) Cuántas unidades de IAC con precios menos a 200 (inclusive) se compraron en total
	if (contadorUnidadesIac>0)
	{
		document.write("Se compraron un total de: "+contadorUnidadesIac+" de unidades IAC a menos de 200$"+"<br>");
	}
	else
	{
		document.write("No se registro ninguna compra de IAC a menos de 200$"+"<br>");

	}

//d) la marca y tipo del más caro de los productos

	if(flagPrecioMax==1 || precioProducto>precioMaximo)
	{
		precioMaximo=precioProducto;
		nombrePrecioMaximo=nombreProducto;
		marcaPrecioMaximo=marcaProducto;
		flagPrecioMax=0;
	}

	if (flagPrecioMax>0)
	{
		document.write("La marca del tipo mas caro de los productos es: "+marcaPrecioMaximo+ " y el tipo es: "+ nombrePrecioMaximo+"<br>");
	}
		
}
