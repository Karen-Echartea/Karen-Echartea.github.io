const imagenes = [
    'imagenes/foto1.jpg',
    'imagenes/foto2.jpg',
    'imagenes/foto3.jpg',
    ];
    var i = 0;
    //window.onmouseover = 
    function cambiarImagen(){
        var img = document.slider.src = imagenes[i];
        if (i < imagenes.length - 1) {
            i++;
        }
        else{
            i = 0;
        }
        let timer = setTimeout("cambiarImagen()", 2000);
    }
    //window.onload = cambiarImagen;
    //window.onmouseout = (stop);
    function detenerImagen(){
        window.clearTimeout(timer);
    }
    num=1;
    function siguiente(){
        num++;
        if(num>3){
            num=1;
        }
        var foto = document.getElementById("foto");
        foto.src="imagenes/foto"+num+".jpg";
    }
    function anterior(){
        num--;
        if(num<1){
            num=3;
        }
        var foto = document.getElementById("foto");
        foto.src="imagenes/foto"+num+".jpg";
    }