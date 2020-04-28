<?php
    // include 'database.php';
    // $dati_vendita = $graphs['fatturato'];
    // header ('Content-Type: application/json');
    // $dati_mensili =[];
    // $dati_mensili['tipo'][] = $dati_vendita['type'];
    // $dati_mensili['vendite_mensili'][] = $dati_vendita['data'];
    // echo json_encode($dati_mensili);

    include 'database.php';
    $fatturato_agenti = $graphs['fatturato_by_agent'];
    header ('Content-Type: application/json');
    $dati_fatturato_agenti =[];
    $dati_fatturato_agenti['tipo'] = $fatturato_agenti['type'];
    foreach ($fatturato_agenti['data'] as $agenti => $fatturato) {
        $dati_fatturato_agenti['nomi_agente'][] = $agenti;
        $dati_fatturato_agenti['fatturato'][] = $fatturato;
    }
    echo json_encode($dati_fatturato_agenti);
 ?>
