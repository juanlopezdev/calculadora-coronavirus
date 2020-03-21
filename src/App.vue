<template lang="pug">
  #App
    div
      // @start Header
      cc-header
      // @end Header
      // @start Main
      main
        .container.py-4
          h1.text-center.mb-4 ¿Cuantos infectados por Coranovirus posiblemente habrá mañana?
          
          form.mb-4(@submit.prevent="calculate")
            .row.justify-content-center
              .col-sm-8.col-md-6.col-lg-4
                .row
                  .col-12.col-sm-6
                    .form-group
                      label.text-center(for="txt-yesterday") <b>AYER TUVIMOS</b>
                      input.form-control(
                        v-model="totalYesterday"
                        type="number",
                        name="txt-yesterday",
                        aria-describedby="DiaDeAyer"
                      ) 
                      small.form-text.text-muted Personas infectadas por COVID-19
                  .col-12.col-sm-6
                    .form-group
                      label.text-center(for="txt-today") <b>HOY TENEMOS</b>
                      input.form-control(
                        v-model="totalToday"
                        type="number",
                        name="txt-today",
                        aria-describedby="DiaDeHoy"
                      )
                      small.form-text.text-muted Personas infectadas por COVID-19
                button.btn.btn-success.btn-block(type="submit") Calcular
          
          #results.row.justify-content-center
            .col-md-9.col-lg-8
              .box-result.mx-auto(v-show="showTotalTomorrow")
                p.mb-0 <b>MAÑANA TENDREMOS</b>
                .box-result__total.mb-2 {{ totalTomorrow }} <br/>
                .box-result__label Personas posiblemente infectadas por <br/> COVID-19
                hr
                .row
                  .col-lg-4.d-flex.align-items-end
                    img.box-result__avatar.img-fluid(src="https://juanlopezdev.github.io/calculadora-coronavirus/dist/person.png")
                  .col-lg-8
                    p Factor problemático: <b>{{ problemFactor }}</b>
                    p.text-left
                      | Este <b>factor problemático debe ser lo más cercano a 1</b>, y dentro de la fórmula es el unico valor que  <b>nosotros podemos cambiar </b>. <br/>
                    p.text-left
                      | <b>¿Cómo lo hacemos?</b> <br/>
                      | Pues exponiendote poco, quedandote en casa, reduciendo la probabilidad de contagio lavandote 
                      | las manos, tosiendo cubriendote con el antebrazo, acatar las medidas tomadas por tu país.
                    p.text-left
                      | <b>¿Como se ha hecho el cálculo?</b> <br/>
                      | Este calculador se hizo a base de las conclusiones matemáticas ofrecidas por Damian del canal <a href="https://www.youtube.com/channel/UCa6V1UVOXN4wDm7RDQDoa6g" target="_blank">El Traductor de Ingeniería</a>, 
                      | a través de su video <a href="https://youtu.be/-PUT0hZiZEw" target="_blank">"Te Explico POR QUÉ estoy PREOCUPADO | [COVID-19]"</a>
                h3 No generemos pánico, generemos conciencia
      // @end Main
    // @start Footer
    cc-footer
    // @end Footer
</template>

<script>
import CcFooter from '@/components/layout/Footer.vue'
import CcHeader from '@/components/layout/Header.vue'

export default {
  name: "App",
  components: { CcFooter, CcHeader },
  data() {
    return {
      totalYesterday: 0,
      totalToday: 0,
      totalTomorrow: 0,
      problemFactor: 0,
      showTotalTomorrow: false
    }
  },
  methods: {
    calculate() {
      if (!this.totalYesterday && !this.totalToday) { return }
      this.$scrollTo('#results')
      this.problemFactor = this.totalToday / this.totalYesterday
      this.totalTomorrow = Math.round(this.totalToday * this.problemFactor)
      this.showTotalTomorrow = true
    }
  }
}
</script>

<style lang="scss">
@import "./scss/main.scss";
</style>
