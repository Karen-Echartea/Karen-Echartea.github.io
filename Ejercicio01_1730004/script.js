let consumo;
let tarifa1;
let tarifa2;
let tarifa3;
let T1;
let T2;
let T3;
let suma;

consumo=prompt('Ingrese el consumo en kw:');
tarifa1=prompt('Ingresa tarifa 1:');

alert('Consumo total = '+consumo+'kw.')
if(tarifa1=300){
    T1=tarifa1*1;
    alert('Tarifa 1 = $' + T1 + '.');
}else{
    if(tarifa1<300 || tarifa1>300){
        alert('La tarifa 1 deben ser 300kw');
    }
}

tarifa2=prompt('Ingresa tarifa 2:');
if(tarifa2=300){
    T2=tarifa2*3;
    alert(' Tarifa 2 = $' + T2 + '.');
}else{
    if(tarifa2<300 || tarifa2>300){
        alert('La tarifa 1 deben ser 300kw');
    }
}
T12=tarifa1+tarifa2;
resta=consumo-T12;

tarifa3=prompt('Ingresa tarifa 3:');
if(tarifa3>resta){
    alert('La tarifa 3 debe ser = '+ resta);
    tarifa3=prompt('Ingresa tarifa 3:');
}else{
    if(tarifa3=resta){
        T3=tarifa3*5;
        alert('Tarifa 3 = $'+T3+'.');
    }
}

suma=T1+T2+T3;
alert('El total es $'+suma);


