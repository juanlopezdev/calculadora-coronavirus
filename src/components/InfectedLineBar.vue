<template lang="pug">
  apexchart(type="line",height="350" :options="chartOptions" :series="series")
</template>

<script>
import VueApexCharts from 'vue-apexcharts'

export default {
  components: { apexchart: VueApexCharts },
  props: {
    peopleInfected: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      series: [{
        name: "Factor problemático",
        data: this.getProblemFactorValues()
      }],
      chartOptions: {
        chart: {
          height: 350,
          type: 'line',
          zoom: {
            enabled: false
          }
        },
        annotations: {
          yaxis: [{
            y: 1,
            borderColor: '#00E396',
            label: {
              borderColor: '#00E396',
              style: {
                color: '#fff',
                background: '#00E396'
              }
            }
          }]
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight'
        },
        title: {
          text: 'Factor problemático',
          align: 'left'
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
          },
        },
        xaxis: {
          categories: this.getDateValues(),
          labels: {
            rotate: -45
          }
        }
      }
    }
  },
  methods: {
    getProblemFactorValues() {
      let values = []
      this.peopleInfected.forEach(item => {
        values.push(item.problem_factor)
      })
      return values
    },
    getDateValues() {
      let values = []
      this.peopleInfected.forEach(item => {
        values.push(item.date_label)
      })
      return values
    }
  }
}
</script>
