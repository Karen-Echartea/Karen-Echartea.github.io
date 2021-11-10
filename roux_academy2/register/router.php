<?php

function logout(){
    session_start();
    session_unset();
    session_destroy();
    session_write_close();
    setcookie(session_name(),'',0,'/');
    session_regenerate_id(true);
}

function back(){
    header('Location: ../');
    exit;
}

function redirect($url){
    header('Location: '.$url);
    exit;
}

function rutas($ruta){
    if($ruta == 'logaut'){
        logaut();
        back();
    }
    if($ruta == 'artists'){
        redirect('../artists.php');
    }
}

rutas($_GET['ruta']);
?>