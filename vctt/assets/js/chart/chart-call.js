$(function () {
  $('#gauge-container').highcharts({
    chart: {
      type: 'gauge',
      plotBackgroundColor: null,
      plotBackgroundImage: null,
      plotBorderWidth: 0,
      plotShadow: false,
      backgroundColor: null,
    },
    exporting: { enabled: false },
    title: {
      text: null
    },
    background: null,
    credits: {
      enabled: false
    },
    pane: [{
      startAngle: -90,
      endAngle: 90,
      center: ['50%', '50%'],
      background: null,
    }, {
      startAngle: -100,
      endAngle: 100,
      center: ['50%', '65%'],
      background: null
    }],
    yAxis: [{
      min: 0,
      max: 100,
      lineColor: null,
      minorTickInterval: 'auto',
      minorTickWidth: 0,
      minorTickLength: 0,
      minorTickPosition: 'outside',
      minorTickColor: '#fff',
      tickPixelInterval: '30',
      tickWidth: 0,
      tickLength: 0,
      tickPosition: 'inside',
      tickColor: '#fff',
      labels: {
        step: 5,
        distance: -10,
        useHTML: true,
        style: {
          fontFamily: 'Jost',
          fontWeight: '700',
          fontSize: '14px',
          textShadow: '0',
          color: '#000000'
        }
      },
      title: {
        text: null
      },
      plotBands: [{
        from: 0,
        to: 20,
        color: '#FE2A00',
        innerRadius: '45%',
        outerRadius: '105%',
      }, {
        from: 20,
        to: 40,
        color: '#FEAF00',
        innerRadius: '45%',
        outerRadius: '105%'
      }, {
        from: 40,
        to: 60,
        color: '#FEF000',
        innerRadius: '45%',
        outerRadius: '105%'
      }, {
        from: 60,
        to: 80,
        color: '#9FCC00',
        innerRadius: '45%',
        outerRadius: '105%'
      }, {
        from: 80,
        to: 100,
        color: '#1EA614',
        innerRadius: '45%',
        outerRadius: '105%'
      }, {
        from: 0,
        to: 100,
        color: '#fff',
        innerRadius: '105%',
        outerRadius: '110%'

      }]
    }, {
      pane: 1,
      min: 0,
      max: 100,
      labels: {
        enabled: false
      },
      tickWidth: 0,
      tickLength: 0,
      minorTickWidth: 0,
      minorTickLength: 0,
      lineWidth: 0
    }],
    plotOptions: {
      gauge: {
        dataLabels: {
          enabled: true,
          useHTML: true,
          formatter: function () {
            var mbps = this.y;
            return '<span class="rpGaugeLabel" style="text-align:center;display:block;">' + mbps + '</span>';
          },
          style: {
            fontFamily: 'Jost',
            fontWeight: '300',
            fontSize: '0',
            textShadow: '0',
            color: '#666'
          },
          borderColor: 'transparent',
        },
        dial: {
          radius: '95%',
          backgroundColor: '#fff',
          borderWidth: 0,
          baseWidth: 12,
          topWidth: 1,
          baseLength: '26%',
          rearLength: '20%'
        },
        pivot: {
          backgroundColor: '#fff',
          radius: 26
        }
      }
    },
    series: [{
      yAxis: 1,
      name: 'Speed',
      data: [50],
      tooltip: {
        valueSuffix: ''
      },
    }],
    tooltip: { enabled: false },

  });
});
