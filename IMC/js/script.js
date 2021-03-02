function calculaIMC(){
	let vPeso = document.getElementById('peso').value;
	let vAltura = document.getElementById('altura').value;

	let resultado = vPeso/(vAltura*vAltura);

	let vIMC = document.getElementById('imc');
	let clasificacion = document.getElementById('clasificacion');

	if (resultado<18.5) {
		clasificacion.innerText = "Bajo en peso";
	} else{
		if(resultado>=18.5&&resultado<=24.9){
			clasificacion.innerText = "Peso normal"
		} else{
			if(resultado>24.9&&resultado<=29.9) {
				clasificacion.innerText = "Sobrepreso";
			} else{
				clasificacion.innerText = "Obesidad";
			}
		}
	}

	vIMC.innerText = Math.round(resultado*100)/100;

	//vIMC.setAttribute("class","titulo-principal");
}