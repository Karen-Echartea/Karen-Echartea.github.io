document.getElementById("iniciar").onclick = function(){
	//capturar numero ingresado
	var entradaNumero = document.getElementById("numero").value;
	var multiplicador = document.getElementById("numero2").value;

	if (multiplicador>20) {
		alert("EL LIMITE ES 20")
	}else{
		for (var i=0; i<=multiplicador; i++){
		//Bloque de instrucciones
		var resultado = entradaNumero * i;
		alert(entradaNumero+" * "+i+" = "+resultado);
		}
		alert("Fin de tabla");
	}
	//iniciar tabla
		
}


var ultimo = null;

function marcar(elemento) {
  ultimo = elemento;
}

function limpiar() {
  if (ultimo != null) {
  	ultimo.value = "";
  }
}

function generar_tabla(){
	let tabla = parseInt(document.getElementById("tabla").value);
	let resultado = parseInt(document.getElementById("multiplicador").value);

	let tabla_html = document.createElement("table");
	let fila = document.createElement("tr");
	let col1 = document.createElement("th");
	col1.innerText="TABLA";
	let col2 = document.createElement("th");
	col2.innerText="MULTIPLICADOR";
	let col3 = document.createElement("th");
	col3.innerText="RESULTADO";

	fila.appendChild(col1);
	fila.appendChild(col2);
	fila.appendChild(col3);

	
}