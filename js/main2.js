$(document).ready(function() {
    $.ajax({
        url: 'server_access.php',
        method: 'GET',
        success: function(multiline) {
            var mesi = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto','Settembre', 'Ottobre', 'Novembre', 'Dicembre'];
            //console.log(multiline);
            var ctx = $('#line-chart');
            var chart = new Chart(ctx, {
                type: multiline[0].tipo,
                data: {
                    labels: mesi,
                    datasets: [
                        {
                            label: 'Team 1',
                            // backgroundColor: '',
                            borderColor: ['#8D1930'],
                            data:  multiline[1].team['Team1']
                        },
                        {
                            label: 'team 2',
                            // backgroundColor: '',
                            borderColor: ['#454FDC'],
                            data:  multiline[1].team['Team2']
                        },
                        {
                            label: 'Team 3',
                            // backgroundColor: '',
                            borderColor: ['#4FE917'],
                            data:  multiline[1].team['Team3']
                        }
                    ]
                },
                options: {}
            });
        },
        error: function() {
            alert('Ma dove vuoi andare!!!!')
        }
    });

    $.ajax({
        url: 'server_access.php',
        method: 'GET',
        success: function(line) {
            //console.log(line);
            var mesi = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto','Settembre', 'Ottobre', 'Novembre', 'Dicembre'];
            var ctx = $('.grafici #line-chart');
            var chart = new Chart(ctx, {
                type: line[2].tipo,
                data: {
                    labels: mesi,
                    datasets: [
                        {
                            label: 'Fatturato 2019',
                            backgroundColor: '#4FE917',
                            borderColor: ['#8D1930'],
                            data:  line[2].vendite
                        }
                    ]
                },
                options: {}
            });
        },
        error: function() {
            alert('Ma dove vuo andare !!!!  e Due...')
        }
    });


    $.ajax({
        url: 'server_access.php',
        method: 'GET',
        success: function(pie) {
            console.log(pie);
            var ctx = $('.grafici #pie-chart');
            var pieChart = new Chart(ctx, {
                type: pie[3].tipo,
                data: {
                    labels: pie[3].agenti ,
                    datasets: [{
                        hoverBackgroundColor: ['#25B4CA', '#FCC894','#A3DAB0', '#E57EEC'],
                        backgroundColor: ['#454FDC', '#FF9933','#35BD54', '#922B9A'],
                        borderColor: '#FFFF00',
                        data: pie[3].vendite
                    }]
                },
                options: {}
            });
        },
        error: function() {
            alert('Ma dove vui andarea !!!!!!')
        }
    });







});
