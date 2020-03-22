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
        name: "Casos confirmados",
        data: this.getConfirmedCasesValues()
      }],
      chartOptions: {
        chart: {
          height: 350,
          type: 'line',
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight'
        },
        title: {
          text: '¿Cuántos casos confirmados hay en el Perú hasta la fecha?',
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
    getConfirmedCasesValues() {
      let values = []
      this.peopleInfected.forEach(item => {
        values.push(item.total)
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
