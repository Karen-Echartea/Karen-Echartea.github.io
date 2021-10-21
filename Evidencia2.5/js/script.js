    var operandoa;
    var operandob;
    var operacion;

function init(){
    
    var resultado = document.getElementById('resultado');
    var reset = document.getElementById('reset');
    var suma = document.getElementById('suma');
    var resta = document.getElementById('resta');
    var multiplicacion = document.getElementById('multiplicacion');
    var division = document.getElementById('division');
    var igual = document.getElementById('igual');
    var uno = document.getElementById('uno');
    var dos = document.getElementById('dos');
    var tres = document.getElementById('tres');
    var cuatro = document.getElementById('cuatro');
    var cinco = document.getElementById('cinco');
    var seis = document.getElementById('seis');
    var siete = document.getElementById('siete');
    var ocho = document.getElementById('ocho');
    var nueve = document.getElementById('nueve');
    var cero = document.getElementById('cero');
    /*
    @power
    traemos el objeto power y generamos una instancia del mismo. 
    */
    var btnpower = document.getElementById('power');

    uno.onclick = function(e){
        resultado.textContent = resultado.textContent  + "1";
    }
    dos.onclick = function(e){
        resultado.textContent = resultado.textContent  + "2";
    }
    tres.onclick = function(e){
        resultado.textContent = resultado.textContent  + "3";
    }
    cuatro.onclick = function(e){
        resultado.textContent = resultado.textContent  + "4";
    }
    cinco.onclick = function(e){
        resultado.textContent = resultado.textContent  + "5";
    }
    seis.onclick = function(e){
        resultado.textContent = resultado.textContent  + "6";
    }
    siete.onclick = function(e){
        resultado.textContent = resultado.textContent  + "7";
    }
    ocho.onclick = function(e){
        resultado.textContent = resultado.textContent  + "8";
    }
    nueve.onclick = function(e){
        resultado.textContent = resultado.textContent  + "9";
    }
    cero.onclick = function(e){
        resultado.textContent = resultado.textContent  + "0";
    }
    /* 
    Usando la instancia, Escuchamos el objeto HTML y llamamos un metodo cada vez que el objeto sea precionado.
    */
    btnpower.onclick = function(e){
        power(this.checked);
    }

    reset.onclick = function(e){
        resetear();
    }
    suma.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "+";
        limpiar();
    }
    resta.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "-";
        limpiar();
    }
    multiplicacion.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "*";
        limpiar();
    }
    division.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "/";
        limpiar();
    }
    igual.onclick = function(e){
        operandob = resultado.textContent;
        resolver();
    }

}

/*
    El metodo power se encarga de habilitar y desabilitar los elementos del archivo html.
    1 Pantalla.
    2 Teclado.
*/
function power(band){
    if(band){
        /*
        Pantalla
        */
        limpiar();
        resultado.disabled = false;
        /*
        Teclado
        */
        reset.disabled = false;
        suma.disabled = false;
        resta.disabled = false; 
        multiplicacion.disabled = false; 
        division.disabled = false;
        igual.disabled = false;
        uno.disabled = false;
        dos.disabled = false;
        tres.disabled = false;
        cuatro.disabled = false;
        cinco.disabled = false;
        seis.disabled = false;
        siete.disabled = false;
        ocho.disabled = false;
        nueve.disabled = false;
        cero.disabled = false;
    }else{
        /*
            Pantalla
        */
        limpiar();
        resultado.disabled = true;
        /*
            Teclado
        */
        reset.disabled = true;
        suma.disabled = true;
        resta.disabled = true; 
        multiplicacion.disabled = true; 
        division.disabled = true;
        igual.disabled = true;
        uno.disabled = true;
        dos.disabled = true;
        tres.disabled = true;
        cuatro.disabled = true;
        cinco.disabled = true;
        seis.disabled = true;
        siete.disabled = true;
        ocho.disabled = true;
        nueve.disabled = true;
        cero.disabled = true;
    }
   
}

function limpiar(){
    resultado.textContent = "";
}

function resetear(){
    resultado.textContent = "";
    operandoa = 0;
    operandob = 0;
    operacion = "";
}

function resolver(){
    var res =0;
    switch(operacion){
        case "+":
            res = parseFloat(operandoa) + parseFloat(operandob);
            break;
        case "-":
            res = parseFloat(operandoa) - parseFloat(operandob);
            break;
        case "*":
            res = parseFloat(operandoa) * parseFloat(operandob);
            break;
        case "/":
            res = parseFloat(operandoa) / parseFloat(operandob);
            break;
    }
    resetear();
    resultado.textContent = res;
}