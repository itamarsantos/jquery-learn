<?php
$nome = $_POST['nome'];
$senha = $_POST['senha'];
$array = array();
if ($array != '') {
	$array['nome'] = $_POST['nome'];
    $array['senha'] = $_POST['senha'];
}
echo json_encode($array);
