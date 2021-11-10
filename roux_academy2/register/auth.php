<?php
include 'db.php';

function is_admin($user, $pass){
    preg_replace('([^A-Za-z0-9 ])', ' ', $user);
    preg_replace('([^A-Za-z0-9 ])', ' ', $pass);
    $Query = "SELECT * FROM `usuarios` WHERE `username` = '".$user."' AND `password` = '".md5($pass)."'";
    $stms = getPDO()->prepare($Query);
    $stms->execute();
    $res = $stms->fetchAll();
    if(!empty($res)){
        if($res[0] != 0 || $res[0] != ' '){
            $_SESSION["username"] = $res[0]['username'];
            $_SESSION["Type"] = $res[0]['Type'];
            return true;
            
        }
    }
    return false;
}

function lista_asistencia(){
    $Query = "SELECT `Name`, `Company Name`, `Email`, `Type`, `Comment`, `Subscription` FROM `asistencia`";
    $stms = getPDO()->prepare($Query);
    $stms->execute();
    $res = $stms->fetchAll();
    echo '<tr>';
    foreach($res as $item => $val){
        echo '<tr>';
        echo '<td>'.$val['Name'].'</td>';
        echo '<td>'.$val['Company Name'].'</td>';
        echo '<td>'.$val['Email'].'</td>';
        echo '<td>'.$val['Type'].'</td>';
        echo '<td>'.$val['Comment'].'</td>';
        echo '<td>'.$val['Subscription'].'</td>'; 
        echo '</tr>';  
    }
}

function lista_artist(){
    $Query = "SELECT `nombre`, `descripcion`, `foto` FROM `artistas`";
    $stms = getPDO()->prepare($Query);
    $stms->execute();
    $res = $stms->fetchAll();    
    foreach($res as $item){
        echo '<li>';
        echo '<h3>'.$item['nombre'].'</h3>';
        echo '<p> <img src="./'.$item['foto'].'" alt="'.$item['nombre'].'" />'.$item['descripcion'].'</p>';
        echo '</li>';  
    }
          
}