// Build the chart
Highcharts.chart('pie', {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: 'pie'
  },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: {
        enabled: false
      },
      showInLegend: true
    }
  },
  title: {
  	text: ' '
  },
  credits: {
  	enabled: false
  },
  series: [{
    name: 'Employee Status',
    colorByPoint: true,
    data: [{
      name: 'Consultant',
      y: 61.41,
      sliced: true,
      selected: true,
      color: '#346DA4'
    }, {
      name: 'Trainee',
      y: 11.84,
      color: '#5891C8'
    }, {
      name: 'Probationary',
      y: 10.85,
      color: '#7CB5EC'
    }, {
      name: 'Regular',
      y: 7.05,
      color: '#C4FDFF'
    }]
  }]
});