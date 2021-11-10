<?php

function getPDO() {
    date_default_timezone_set('America/Mexico_City');
    $host = 'localhost';
    $dbname = 'registros';
    $user = 'root';
    $pass = 'root';
    $port = 3306;
    return new PDO('mysql:dbname='.$dbname.';host='.$host.';port='.$port.'', $user, $pass);
}