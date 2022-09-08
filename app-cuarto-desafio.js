/* Programa de inscripcion a materias partiendo del proyecto anterior. Solo que 
ahora, gracias a que incorporamos los arrays, podemos ver la lista de alumnos inscriptos /


/* Programa principal */

elegirCurso();




//Funciones

function inscripcionMateria(){

    const listaNombres=[]; //Creo una lista vacía
    nombre=" ";
    dni=0;
    cupo= Number(prompt("Ingrese el cupo de personas permitido"))
    

    for (i=0; nombre!="-1"; i<=cupo) {
        if(cupo==-1){
            alert("Accion cancelada. \n Presione ENTER o ACEPTAR para continuar")
            break;
        }
        nombre= prompt("Ingrese nombre y apellido o -1 para terminar");        
        while(nombre==""){
            alert('No se ingresó ningún nombre');
            nombre= prompt("Ingrese nombre y apellido o -1 para terminar");  
        }        
        if(nombre==-1){   
            break;
        }         
        if(i==cupo){
            alert(`Cupo lleno. El maximo permitido es de ${cupo} personas.\n Presione ENTER o ACEPTAR para cerrar`);
            break;

        }else{
            dni= Number(prompt("Ingrese el DNI"));            
            while(dni==""){
                alert('No se ingresó el DNI');
                dni= Number(prompt("Ingrese el DNI"));  
            }
            i++;
        }
        let resultado = nombre+ " , " + dni;
        listaNombres.push(resultado.toUpperCase()); //voy incorporando a la lista los nombres de los inscriptos
    
    }
    alert(listaNombres.join("\n")); // Coloco un /n para ver la lista verticalmente
    alert("Total"+" "+i+" "+"inscriptos");  // Cuento el total de inscriptos

    // Intento aplicar una funcion de primer orden para buscar un alumno, pero aun no funciona!!

    /*alumno=prompt("Ingrese el alumno a buscar");
    let listaNombres2=listaNombres.filter(word=>word.resultado===alumno);
    alert(listaNombres2);*/
      
}




    

    
    
function elegirCurso(){
    materia="";
    while(materia!=-1){
        materia=prompt("Ingrese el curso \n 1-Desarrollo Web \n 2-Javascript \n 3-Programacion Backend o -1 para terminar")
        while(materia=="" || materia>3 || materia==String){
            alert("No se ingresaron materias");
            materia= prompt("Ingrese el curso \n 1-Desarrollo Web \n 2-Javascript \n 3-Programacion Backend");  
        }

        if (materia==1){
            inscripcionMateria();
        }
        if (materia==2){
            inscripcionMateria();
        } 
        if (materia==3){
            inscripcionMateria();        
        }
      
    }
}
      




