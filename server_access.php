<?php
    include 'database2.php';
    header ('Content-Type:application/json');
    $multiline = $graphs['team_efficiency'];
    $dati_multiline =[];
    $dati_multiline['tipo']= $multiline['type'];
    $dati_multiline['level']= $multiline['access'];
    foreach ($multiline['data'] as $key =>  $value) {
        $team['team'][$key]= $value;
    }
    $vendite_mensili = $graphs['fatturato'];
    $dati_vendite_mensili =[];
    $dati_vendite_mensili['tipo'] = $vendite_mensili['type'];
    $dati_vendite_mensili['level'] = $vendite_mensili['access'];
    $dati_vendite_mensili['vendite'] = $vendite_mensili['data'];

    $vendita_agenti = $graphs['fatturato_by_agent'];
    $dati_agenti =[];
    $dati_agenti['tipo'] =$vendita_agenti['type'];
    $dati_agenti['level'] =$vendita_agenti['access'];
    foreach ($vendita_agenti['data'] as $key => $value) {
        $dati_agenti['agenti'][] = $key;
        $dati_agenti['vendite'][]= $value;

    }


    echo json_encode(array($dati_multiline,$team,$dati_vendite_mensili,$dati_agenti));


 ?>
