

let media=0;
let array=[600, 470, 170, 430, 300];
let sum=0;
let suma=0;
let restas;
let raiz;
/*Suma de los elementos*/

for(let i = 0; i<array.length; i++){
    sum += array[i];
}
console.log(sum);

/*Division de suma con la cantidad de elementos*/
media=sum/array.length;

alert('Media: '+media);

/*Varianza*/
/*Diferencia de cada valor con la media */
for(let i = 0; i<array.length; i++){
    array[i] = array[i]-media;
}

/*Elevar al cuadrado */
for(let i=0; i<array.length;i++){
    array[i] = array[i]*array[i];
}

/* Suma de los elementos al cuadrado*/
for(let i = 0; i<array.length; i++){
    suma += array[i];
}
console.log(suma);

varianza=suma/array.length;

alert('Varianza: '+ varianza);

/*Desviación estandar*/
raiz = Math.sqrt(varianza);
alert('σ = '+raiz);
