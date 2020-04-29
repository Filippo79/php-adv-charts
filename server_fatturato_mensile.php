<?php
    include 'database.php';
    $dati_vendita = $graphs['fatturato'];
    header ('Content-Type: application/json');
    $dati_mensili['tipo'] = $dati_vendita['type'];
    $dati_mensili['vendite_mensili'] = $dati_vendita['data'];
    echo json_encode($dati_mensili);
 ?>
