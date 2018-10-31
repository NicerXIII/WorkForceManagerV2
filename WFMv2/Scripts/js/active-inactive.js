// Create the chart
Highcharts.chart('bar', {
  chart: {
    type: 'column'
  },
  title: {
  	text: ' '
  },
  xAxis: {
    type: 'category'
  },
  yAxis: {
    title: {
      text: 'Total number of Users'
    },
    max: '100'
  },
  credits: {
  	enabled: false
  },
  legend: {
    enabled: false
  },
  plotOptions: {
    series: {
      borderWidth: 0,
      dataLabels: {
        enabled: true,
        format: '{point.y:.1f}%'
      }
    }
  },

  tooltip: {
    headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
    pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
  },

  "series": [
    {
      "name": "List of Active and Inactive",
      "colorByPoint": true,
      "data": [
        {
          "name": "Active",
          "y": 80,
          "drilldown": "Edge"
        },
        {
          "name": "Inactive",
          "y": 20,
          "drilldown": null
        }
      ]
    }
  ]
});