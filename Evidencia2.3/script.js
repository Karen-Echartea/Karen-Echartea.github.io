function abrir_suma(){
    var n1, n2, resultado;
    n1 = prompt("Primer numero");
    n2 = prompt("segundo numero");
    resultado = (parseInt(n1)+ parseInt(n2));
    
    document.getElementById("numeros").innerHTML = "Suma: "+n1+"+"+n2;
    document.getElementById("resultado").innerHTML = "Resultado = "+resultado;
}

function abrir_resta(){
    var n1, n2, resultado;
    n1 = prompt("Primer numero");
    n2 = prompt("segundo numero");
    resultado = (parseInt(n1)-parseInt(n2));
    
    document.getElementById("numeros").innerHTML = "Resta: "+n1+"-"+n2;
    document.getElementById("resultado").innerHTML = "Resultado = "+resultado;

}

function abrir_multiplicacion(){
    var n1, n2, resultado;
    n1 = prompt("Primer numero");
    n2 = prompt("segundo numero");
    resultado = (parseInt(n1)*parseInt(n2));
    
    document.getElementById("numeros").innerHTML = "Multiplicación: "+n1+"*"+n2;
    document.getElementById("resultado").innerHTML = "Resultado = "+resultado;
}

function abrir_division(){
    var n1, n2, resultado;
    n1 = prompt("Primer numero");
    n2 = prompt("segundo numero");
    if(n2==0){
        alert("Número invalido, E R R O R");
        n2 = prompt("segundo numero");
    }
    resultado = (parseInt(n1)/parseInt(n2));
    
    document.getElementById("numeros").innerHTML = "División: "+n1+"/"+n2;
    document.getElementById("resultado").innerHTML = "Resultado = "+resultado;
}

function abrir_promedio(){
    var n1, n2, suma, resultado;
    n1 = prompt("Primer numero");
    n2 = prompt("segundo numero");
    suma = (parseInt(n1)+parseInt(n2));
    resultado = suma/2;
    
    document.getElementById("numeros").innerHTML = "Promedio de: "+n1+","+n2;
    document.getElementById("resultado").innerHTML = "Resultado = "+resultado;

}

function abrir_desviacion(){
    var media=0;
    var sum=0;
    var suma=0;
    var resta=0;
    var raiz=0;
    var varianza=0;
    var n1 = prompt("Primer número");
    var n2 = prompt("segundo número");
    var n3 = prompt("Tercer número");

    sum = (parseInt(n1)+parseInt(n2)+parseInt(3));
    media = sum/3;
    
    n1 = n1-media;
    n2 = n2-media;
    n3 = n3-media;

    n1 = n1**2;
    n2 = n2**2;
    n3 = n3**2;
 
    suma = (parseInt(n1)+parseInt(n2)+parseInt(3));
    
    varianza=suma/3;
    raiz = Math.sqrt(varianza);
    document.getElementById("desviacion_est").innerHTML= "Desviación estandar = "+raiz;
}