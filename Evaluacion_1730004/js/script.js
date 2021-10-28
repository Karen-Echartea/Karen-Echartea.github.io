function calcular(){
    var tablaNum=document.getElementById("tabla").value;
    var cantidadRes=document.getElementById("resultados").value;
    var errorNumero = false;
    var errorResultados = false;
    
    if(tablaNum<1||tablaNum>50){
        document.getElementById("error_tabla").innerHTML="El número debe ser entre 1 y 50";
        errorNumero=true;
    }else{
        document.getElementById("error_tabla").innerHTML="";
        errorNumero=false;
    }

    if(cantidadRes<1||cantidadRes>20){
        document.getElementById("error_resultados").innerHTML="El número debe ser entre 1 y 20";
        errorResultados=true;
    }else{
        document.getElementById("error_resultados").innerHTML="";
        errorResultados=false;
    }

    var resu=document.getElementById("mostrarTab");
    resu.innerHTML="";

    if(errorNumero==false&&errorResultados==false){
        var i =1;
        var tabla = document.createElement("table");
        tabla.setAttribute("border", "1px solid");
        var fila = document.createElement("tr");
        var col = document.createElement("th");
        col.innerHTML="Numero";
        var col2 = document.createElement("th");
        col2.innerHTML="Multiplica";
        var col3 = document.createElement("th");
        col3.innerHTML="Resultado";

        fila.appendChild(col);
        fila.appendChild(col2);
        fila.appendChild(col3);
        tabla.appendChild(fila);

        while(i<cantidadRes){
            var fila =document.createElement("tr");
            var col=document.createElement("td");
            col.innerText=tablaNum;
            var col2=document.createElement("td");
            col2.innerText=i;
            var col3=document.createElement("td");
            col3.innerText=(tablaNum*i);
            fila.appendChild(col);
            fila.appendChild(col2);
            fila.appendChild(col3);
            tabla.appendChild(fila);

            i++;
        }
        resu.appendChild(tabla);
    }

}