<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- <script src="https://kit.fontawesome.com/73e1c109e3.js" crossorigin="anonymous"></script> -->
        <meta charset="utf-8">
        <link rel="stylesheet" href="css/style.css">
        <!-- <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu" crossorigin="anonymous"> -->
        <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.7.3/handlebars.min.js" charset="utf-8"></script> -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
        <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script> -->
        <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/locale/it-ch.js"></script> -->
        <title></title>
    </head>
    <body>
        <div class="container">
            <div class="grafico">
                <?php include 'database.php'; // metodo con  attributo vedi sotto (data-database)?>
                <canvas id="line-chart" data-database="<?php echo $database; ?>"></canvas>
            </div>
        </div>
        <div class="container2">
            <div class="grafici">
                <canvas id="line-chart"></canvas>
            </div>
            <div class="grafici">
                <canvas id="pie-chart"></canvas>
            </div>
        </div>

        <script> // Metodo con script all'interno della pagina php
            $(document).ready(function() {
                var mesi = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto','Settembre', 'Ottobre', 'Novembre', 'Dicembre'];
                <?php include 'database.php'; ?>
                var data = <?php echo $database; ?>;
                var ctx = $('#line-chart');
                var chart = new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: mesi,
                        datasets: [{
                            label: 'Venduto 2019',
                            backgroundColor: '#77B0C1',
                            borderColor: 'rgb(255, 99, 132)',
                            data: data
                        }]
                    },
                    options: {}
                });
            });
        </script>
        <script src="js/main.js" charset="utf-8"></script>
    </body>
</html>
