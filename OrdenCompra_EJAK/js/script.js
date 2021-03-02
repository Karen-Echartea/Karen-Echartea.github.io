let contador=0;
let subtotal=0;
let iva = 0;
let total = 0;

function extraerProducto(){
    var productos = document.getElementById("producto").value;
    return productos;
}

function agregarProducto(){
    contador++;
    let productos = extraerProducto();
    tablaProd = document.getElementById("tabla");
    tablaProd.setAttribute("class","tabla-estilo");

    let tr = tablaProd.insertRow();
    let td = tr.insertCell();
    
    let monto = 0;
    let unidades = document.getElementById("unidades").value;
    let precio = document.getElementById("precio").value;
    
    tr = tablaProd.insertRow();
    if(productos==1){
        monto = (unidades)*(precio);
        td = tr.insertCell();
        td.appendChild(document.createTextNode(contador));
        td = tr.insertCell();
        td.appendChild(document.createTextNode('Guantaletas'));
        td = tr.insertCell();
        td.appendChild(document.createTextNode(precio));
        td = tr.insertCell();
        td.appendChild(document.createTextNode(unidades));
        td = tr.insertCell();
        td.appendChild(document.createTextNode(monto));
        subtotal = subtotal + monto;

    } else{
        if(productos==2){
            monto = (unidades)*(precio);
            td = tr.insertCell();
            td.appendChild(document.createTextNode(contador));
            td = tr.insertCell();
            td.appendChild(document.createTextNode('Casco'));
            td = tr.insertCell();
            td.appendChild(document.createTextNode(precio));
            td = tr.insertCell();
            td.appendChild(document.createTextNode(unidades));
            td = tr.insertCell();
            td.appendChild(document.createTextNode(monto));
            subtotal = subtotal + monto;
        } else {
            if(productos==3){
                monto = (unidades)*(precio);
                td = tr.insertCell();
                td.appendChild(document.createTextNode(contador));
                td = tr.insertCell();
                td.appendChild(document.createTextNode('Bat'));
                td = tr.insertCell();
                td.appendChild(document.createTextNode(precio));
                td = tr.insertCell();
                td.appendChild(document.createTextNode(unidades));
                td = tr.insertCell();
                td.appendChild(document.createTextNode(monto));
                subtotal = subtotal + monto;
            } else {
                if(productos==4){
                    monto = (unidades)*(precio);
                    td = tr.insertCell();
                    td.appendChild(document.createTextNode(contador));
                    td = tr.insertCell();
                    td.appendChild(document.createTextNode('Guante'));
                    td = tr.insertCell();
                    td.appendChild(document.createTextNode(precio));
                    td = tr.insertCell();
                    td.appendChild(document.createTextNode(unidades));
                    td = tr.insertCell();
                    td.appendChild(document.createTextNode(monto));
                    subtotal = subtotal + monto;
                } else{
                    if(productos==5){
                        monto = (unidades)*(precio);
                        td = tr.insertCell();
                        td.appendChild(document.createTextNode(contador));
                        td = tr.insertCell();
                        td.appendChild(document.createTextNode('Pelota softbol'));
                        td = tr.insertCell();
                        td.appendChild(document.createTextNode(precio));
                        td = tr.insertCell();
                        td.appendChild(document.createTextNode(unidades));
                        td = tr.insertCell();
                        td.appendChild(document.createTextNode(monto));
                        subtotal = subtotal + monto;
                    } else{
                        if(productos==6){
                            monto = (unidades)*(precio);
                            td = tr.insertCell();
                            td.appendChild(document.createTextNode(contador));
                            td = tr.insertCell();
                            td.appendChild(document.createTextNode('Pelota beisbol'));
                            td = tr.insertCell();
                            td.appendChild(document.createTextNode(precio));
                            td = tr.insertCell();
                            td.appendChild(document.createTextNode(unidades));
                            td = tr.insertCell();
                            td.appendChild(document.createTextNode(monto));
                            subtotal = subtotal + monto;
                        }else{
                            //IsTheEnd
                        }
                    }
                }
            }
        }
    }
    iva = (iva+(precio*unidades)*0.16);
    total=iva+subtotal;

    document.getElementById("iva").innerHTML = "$"+iva;
    document.getElementById("subtotal").innerHTML = "$"+subtotal;
    document.getElementById("total").innerHTML = "$"+total;
    
}

