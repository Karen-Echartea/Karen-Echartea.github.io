<?php
header('Content-Type: application/json; charset=UTF-8');
include 'db.php';
$db = getPDO();
$json = array('content' => 'Error');

if($db){
    $json = array('content' => 'Entra');
    
    $post = [
        'name' => $_POST['name'],
        'company' => $_POST['company'],
        'mail' => $_POST['mail'],
        'type' => $_POST['type'],
        'comments' => $_POST['comments'],
        'subs' => $_POST['subs']
    ];
   
    if($post['name'] == null){
        $json = array('content' => 'Entra2');
        echo json_encode($json);
        exit;
    }
    if($post['company'] == null){
        $json = array('content' => 'Entra3');
        echo json_encode($json);
        exit;
    }
    if($post['mail'] == null){
        $json = array('content' => 'Entra4');
        echo json_encode($json);
        exit;
    }
    if($post['type'] == null){
        $json = array('content' => 'Entra5');
        echo json_encode($json);
        exit;
    }
    if($post['comments'] == null){
        $json = array('content' => 'Entra6');
        echo json_encode($json);
        exit;
    }
    if($post['subs'] == null){
        $json = array('content' => 'Entra7');
        echo json_encode($json);
        exit;
    }
    try{
        $stms = $db->prepare("INSERT INTO `asistencia` (`Name`, `Company Name`, `Email`, `Type`, `Comment`, `Subscription`)
        VALUES(:A, :B, :C, :E, :F,:F);");
        $stms->bindParam(':A', preg_replace('([^A-Za-z0-9 ])', ' ',$post['name']));
        $stms->bindParam(':B', preg_replace('([^A-Za-z0-9 ])', ' ',$post['company']));
        $stms->bindParam(':C', preg_replace('([^A-Za-z0-9 ])', ' ',$post['mail']));
        $stms->bindParam(':E', preg_replace('([^A-Za-z0-9 ])', ' ',$post['type']));
        $stms->bindParam(':F', preg_replace('([^A-Za-z0-9 ])', ' ',$post['comments']));
        $stms->bindParam(':G', preg_replace('([^A-Za-z0-9 ])', ' ',$post['subs']));
        
      
        if($stms->execute()){
            $json['content'] = 'Agregado con exito';
        }else{
            $json['content'] = $stms->errorInfo();
        }
    }catch(PDOException $e){
        $json = array('content' => 'Error');
        echo json_encode($json);
        exit;
    }
     
}

echo json_encode($json);