function Calcular(){
    var imcResultado = document.getElementById("imcResultado");
    var valoracion = document.getElementById("valoracion");
    var img=document.getElementById("img");

    var peso=document.getElementById("peso").value;
    var altura=document.getElementById("altura").value;
    var val;
    var imc;

    imc = peso/(altura*altura);
    if(peso<=0||altura<=0){
        alert("No deje espacios vacios.");
    }else{
        if(imc<18.5){
            val="Infrapeso";
            img.innerHTML='<img src="img/infra.png">';
        }else{
            if(imc>=18.5&&imc<=24.9){
                val="Peso normal";
                img.innerHTML='<img src="img/normal.png">';
            }else{
                if(imc>=25&&imc<=29.9){
                    val="Sobrepeso";
                    img.innerHTML='<img src="img/sobrep.png">';
                }else{
                    if(imc>=30&&imc<=34.9){
                        val="Obesidad";
                        img.innerHTML='<img src="img/obesidad.png">';
                    }else{
                        if(imc>34.9){
                            val="Obesidad morbida";
                            img.innerHTML='<img src="img/obmorbida.png">';
                        }
                        
                    }
                }
            }
        }
        
        document.getElementById("imcResultado").innerHTML = "IMC: = "+imc;
        document.getElementById("valoracion").innerHTML = "Valoración: = "+val;
    }
}

function Limpiar(){
    var imcResultado = document.getElementById("imcResultado");
    var valoracion = document.getElementById("valoracion");
    img = document.getElementById("img");

    var peso = document.getElementById("peso");
    var altura = document.getElementById("altura");

    peso.value="";
    altura.value="";

    img.innerHTML="";
    imcResultado.innerHTML="";
    valoracion.innerHTML="";
}