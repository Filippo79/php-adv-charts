<?php
    $data = [1000,1322,1123,2301,3288,988,502,2300,5332,2300,1233,2322];
    $database = json_encode($data);

?>
<?php
  $graphs = [
        'fatturato' => [
            'type' => 'line',
            'data' => [100379.59, 102445.27, 104013.61, 118359.71, 132784.45, 196005.82, 275144.19, 323463.21, 166082.68, 124065.49, 110794.79, 114460,45,],
        ],
        'fatturato_by_agent' => [
          'type' => 'pie',
          'data' => ['Marco' => 9000,'Giuseppe' => 4000,'Mattia' => 3200,'Alberto' => 2300]
        ]
    ];
    $database_fatturato = json_encode($graphs);
?>
