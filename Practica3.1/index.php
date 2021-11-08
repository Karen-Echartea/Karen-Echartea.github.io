<?php
    $peso=0;
    if( isset($_GET['peso'])){
        $peso = $_GET["peso"];
    }
    $altura=0;
    if( isset($_GET['altura'])){
        $altura = $_GET["altura"];
    }
    
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>IMC</title>
</head>
<body>
    <h1>Calculador IMC</h1> 
    <p>Coloca tu peso, tu altura en cm y envía.</p>
    <form action="" method="GET">
        <label for="peso">Peso:</label>
        <input type="number" name="peso" id="peso">
        <br>
        <label for="altura">Estatura(cm):</label>
        <input type="number" name="altura" id="altura">
        <br>
        <input type="submit" value="Enviar">
    </form>
    <br>
    <?php
        $altura2 = $altura/100;
        $altura3 = $altura2*$altura2;
        $categoria = $peso/$altura3;
        echo "La altura: $altura <br>";
        echo "La altura en metros: $altura2 <br>";
        echo "El IMC: $categoria <br>";
        if($categoria<18.5){
            echo 'Su IMC es: Bajo peso';
        }else if($categoria>18.5 && $categoria<24.9){
            echo 'Su IMC es: Normal';
        }else if($categoria>25.0 && $categoria<29.9){
            echo 'Su IMC es: Sobrepeso';
        }else if($categoria>30.0){
            echo 'Su IMC es: Obesidad';
        }
    ?>
</body>
</html>