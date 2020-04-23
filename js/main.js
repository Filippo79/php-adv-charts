$(document).ready(function() {
    $.ajax({
        url:'server_line.php',
        method: 'GET',
        success: function(data) {
            var mesi = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto','Settembre', 'Ottobre', 'Novembre', 'Dicembre'];
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
        },
        error: function() {
            alert('Ma dove vuoi andare!!!!');
        }
    });
    $.ajax({
        url: 'server_fatturato.php',
        method: 'GET',
        success: function(data) {
            var mesi = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto','Settembre', 'Ottobre', 'Novembre', 'Dicembre'];
            //console.log(data.fatturato);
            var fatturato = data.fatturato;
            var ctx = $('.grafici #line-chart');
            var chart = new Chart(ctx, {
                type: fatturato.type,
                data: {
                    labels: mesi,
                    datasets: [{
                        label: 'Fatturarto 2019',
                        backgroundColor: '#454FDC',
                        borderColor: '#8D1930',
                        data: fatturato.data
                    }]
                },
                options: {}
            });
            var nome = Object.keys(data.fatturato_by_agent.data);
            var vendita = Object.values(data.fatturato_by_agent.data);
            var agenti = data.fatturato_by_agent;
            console.log(nome);
            console.log(vendita);
            var ctx = $('.grafici #pie-chart');
            var pieChart = new Chart(ctx, {
                type: agenti.type,
                data: {
                    labels: nome,
                    datasets: [{
                        hoverBackgroundColor: ['#25B4CA', '#FCC894','#A3DAB0', '#E57EEC'],
                        backgroundColor: ['#454FDC', '#FF9933','#35BD54', '#922B9A'],
                        borderColor: '#FFFF00',
                        data: vendita
                    }]
                },
                options: {}
            });
        },
        error: function() {
            alert('Ma dove vuoi andare!!!!')
        }

    });



    //------------------------Metodo con Attributo (data)--------------------------
    // var mesi = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto','Settembre', 'Ottobre', 'Novembre', 'Dicembre'];
    // //var data = [1000,1322,1123,2301,3288,988,502,2300,5332,2300,1233,2322];
    // var data = $('#line-chart').data('database');// richiamo l'attributo dall'index (data-database)
    // var ctx = $('#line-chart');
    // var chart = new Chart(ctx, {
    //     type: 'line',
    //     data: {
    //         labels: mesi,
    //         datasets: [{
    //             label: 'Venduto 2019',
    //             backgroundColor: 'rgb(255, 99, 132)',
    //             borderColor: 'rgb(255, 99, 132)',
    //             data: data
    //         }]
    //     },
    //     options: {}
    // });
});
