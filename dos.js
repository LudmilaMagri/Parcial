/*Realizar el algoritmo que permita ingresar los datos de los alumnos de una division de la UTN FRA, los datos solicitados son:
nombre
Tipo curasada("libre";"presencial";"remota")
cantidad de materias( mas de cero y menos de 8)
Sexo ( femenino , masculino , no binario)
Nota promedio (entre 0 y 10)
edad (validar)
se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) El nombre del mejor promedio que no sea masculino
b) El nombre del mas joven de los alumnos entre los que la dan libre
d) El promedio de nota por sexo
f) La edad y nombre del que cursa mas materias que no sean en forma remota*/

function mostrar()
{
  var nombre;
  var tipoCursada;
  var cantidadMaterias;
  var sexo;
  var nota;
  var edad;
  var seguir;

  var flagFem=1;
  var notaMaxFem;
  var nombreMaxFem;

  var flagNoBinario=1;
  var notaMaxNoBinario;
  var nombreMaxNoBinario;

  var edadMasJoven;
  var nombreMasJoven;
  var flagEdad=1;
  
  var acumuladorNotaFem=0;
  var acumuladorNotaNobinario=0;
  var acumuladorNotaMasc=0;

  var contadorFem=0;
  var contadorNoBinario=0;
  var contadorMasc=0;

  var promedioFem;
  var promedioNoBinario;
  var promedioMasc;

  var flagNoRemota=1;
  var cantidadMateriasMax;
  var nombreMateriasMax;
  var edadMateriasMax;

 


  do {

    nombre=prompt("Ingrese su nombre");
    while(isNaN(nombre)==false)
    {
      nombre=prompt("Ingrese su nombre");
    }

    tipoCursada=prompt("Ingrese tipo de cursada");
    while(isNaN(tipoCursada)==false || tipoCursada!="libre" && tipoCursada!="presencial" && tipoCursada!="remota")
    {
      tipoCursada=prompt("Ingrese tipo de cursada");
    }

    cantidadMaterias=parseInt(prompt("Ingrese la cantidad de materias"));
    while(isNaN(cantidadMaterias)==true || cantidadMaterias<0 || cantidadMaterias>8)
    {
      cantidadMaterias=parseInt(prompt("Ingrese la cantidad de materias"));
    }

    sexo=prompt("Ingrese su sexo");
    while(isNaN(sexo)==false || sexo!="femenino" && sexo!="masculino" && sexo!="no binario")
    {
      sexo=prompt("Ingrese su sexo");
    }

    nota=parseInt(prompt("Ingrese la nota"));
    while(isNaN(nota)==true || nota<0 || nota>10)
    {
      nota=prompt("Ingrese la nota");
    }
    edad=parseInt(prompt("Ingrese su edad"));
    while(isNaN(edad)== true)
    {
      edad=parseInt(prompt("Ingrese su edad"));
    }


      switch(sexo)
      {
          case "femenino":
          acumuladorNotaFem=acumuladorNotaFem+nota;
          contadorFem++;

            if(flagFem==1 || nota>notaMaxFem)
            {
              notaMaxFem=nota;
              nombreMaxFem=nombre;
              flagFem=0;
            }

            break;

          case "no binario":
            acumuladorNotaNobinario=acumuladorNotaNobinario+nota;
            contadorNoBinario++;

            if (flagNoBinario==1 || nota>notaMaxNoBinario)
            {
              notaMaxNoBinario=nota;
              nombreMaxNoBinario=nombre;
              flagNoBinario=0;
            }
            break;
          
          case "masculino":
            acumuladorNotaMasc=acumuladorNotaMasc+nota;
            contadorMasc++;
            break;
          
      }

      switch(tipoCursada)
      {
        case "libre":

          if(flagEdad==1 || edad<edadMasJoven)
          {
            edadMasJoven=edad;
            nombreMasJoven=nombre;
            flagEdad=0;
          }
          break;      
      }
    
      switch(tipoCursada)
      {
        case "libre":
        case "presencial":
          if(flagNoRemota==1 || cantidadMaterias>cantidadMateriasMax)
          {
            cantidadMateriasMax=cantidadMaterias;
            nombreMateriasMax=nombre;
            edadMateriasMax=edad;
            flagNoRemota=0;
          }

          break;
      }
     

    seguir=confirm("Desea seguir ingresando otro dato?");
  } while (seguir);

 // a) El nombre del mejor promedio que no sea masculino

  if (notaMaxFem>notaMaxNoBinario)
  {
    document.write("El nombre del mejor promedio que no es  masculino es "+ nombreMaxFem+"<br>");
  }
  else if (notaMaxNoBinario>notaMaxFem)
  {
    document.write("El nombre del mejor promedio que no es  masculino es "+ notaMaxNoBinario+"<br>");
  }
  if(flagFem==1 || flagNoBinario==1)
  {
    document.write("El promedio mas alto lo tiene un masculino"+"<br>");
  }


//b) El nombre del mas joven de los alumnos entre los que la dan libre
  if(flagEdad==0)
  {
    document.write("El mas joven que cursa libre es: "+ nombreMasJoven+"<br>");
  }


  //d) El promedio de nota por sexo

  promedioFem=acumuladorNotaFem/contadorFem;
  promedioNoBinario=acumuladorNotaNobinario/contadorNoBinario;
  promedioMasc=acumuladorNotaMasc/contadorMasc;

  if(promedioFem>1)
  {
    document.write("El promedio de notas de los femeninos es: "+promedioFem+"<br>");
  }
  else
  {
    document.write("No se registró un promedio de notas de femeninos"+"<br>");
  }

  if(promedioNoBinario>1)
  {
    document.write("El promedio de notas de los no binarios  es: "+promedioNoBinario+"<br>");
  }
  else
  {
    document.write("No se registró un promedio de notas de no binarios"+"<br>");
  }
  if (promedioMasc>1)
  {
    document.write("El promedio de notas de los masculinos  es: "+promedioMasc+"<br>");
  }
  else
  {
    document.write("No se registró un promedio de notas de masculinos"+"<br>");
  }

   // f) La edad y nombre del que cursa mas materias que no sean en forma remota*/
  if (flagNoRemota==0)
  {
    document.write("La edad del que cursa mas materias que no sean en forma remota es: "+ edadMateriasMax+ " y el nombre: "+ nombreMateriasMax+"<br>");
  }

 
  

}
