<template lang="pug">
  #App
    div
      // @start Header
      cc-header
      // @end Header
      // @start Main
      main
        small.px-3.py-1.d-block.text-right Actualizado al 11/04/2020 22:56:00
        // @start Calculator
        section.section-calculator.py-5
          .container
            h1.t1.font-weight-bold.text-center.mb-4 ¿Cuántos casos de Coronavirus posiblemente habrá mañana?
            // @start Form
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
                          min=0
                        ) 
                        small.form-text.text-muted Personas contagiadas por COVID-19
                    .col-12.col-sm-6
                      .form-group
                        label.text-center(for="txt-today") <b>HOY TENEMOS</b>
                        input.form-control(
                          v-model="totalToday"
                          type="number",
                          name="txt-today",
                          aria-describedby="DiaDeHoy"
                          min=0
                        )
                        small.form-text.text-muted Personas contagiadas por COVID-19
                  button.btn.btn-success.btn-block(type="submit") Calcular
            // @end Form
            .box-social-sharing.text-center
              p 
                | Hagamos que más personas tomen conciencia,
                br
                b comparte este sitio web 
                | por 
              cc-buttons-social-sharing
        // @end Calculator
        // @start Results
        section#results.section-results.py-5(v-show="showTotalTomorrow")
          .container
            h2.font-weight-bold.text-center.mb-4 Mañana podriamos tener...
            .row.justify-content-center.mb-4
              .col-12.col-lg-6
                p.text-center Si tomamos el factor problemático de <b>tu cálculo</b>...
                .box-result.mx-auto.mb-5
                  .box-result__total.mb-2 <b>{{ totalTomorrow }}</b> <br/>
                  .box-result__label Personas posiblemente contagiadas por <br/> COVID-19
                  .box-result__factor Factor problemático: {{ problemFactor }}
                p.text-center Si tomamos el factor problemático <b>mínimo</b> y <b>máximo</b> registrados hasta la fecha en <b>Perú</b>, se estima...
                .row
                  .col-md-6
                    .box-result.box-result--small.mx-auto.mb-4
                      .box-result__label Un <b>mínimo</b> de
                      .box-result__total.mb-2 {{ totalTomorrowMin }} <br/>
                      .box-result__label Personas posiblemente contagiadas por <br/> COVID-19
                      .box-result__factor Factor problemático: {{ problemFactorMin }}
                  .col-md-6
                    .box-result.box-result--small.mx-auto.mb-4
                      .box-result__label Un <b>máximo</b> de
                      .box-result__total.mb-2 {{ totalTomorrowMax }} <br/>
                      .box-result__label Personas posiblemente contagiadas por <br/> COVID-19
                      .box-result__factor Factor problemático: {{ problemFactorMax }}
            hr
            .row.justify-content-center.align-items-center
              .col-lg-6
                h3.my-4 ¿Factor problemático?
                p 
                  | Si te preguntas <b>¿que es?</b>, podríamos decir que es aquel <b>factor</b> que guarda relación con las variables <b>E</b> y <b>P</b>: 
                  | <b>E</b>xposición al contagio y la <b>P</b>robalidad de contagio.
                p Dentro de la fórmula este factor es el único valor que <b>nosotros podemos cambiar </b>, un <b> buen escenario es mantener el valor lo más cercano a 1</b>
                h4 ¿Cómo lo hacemos?
                p
                  | Pues exponiendote poco, quedandote en casa, reduciendo la probabilidad de contagio lavandote 
                  | las manos, tosiendo cubriendote con el antebrazo, acatar las medidas tomadas por tu país.
                h4 ¿Cómo se ha hecho el cálculo?
                p
                  | Este calculador se hizo a base de las conclusiones matemáticas ofrecidas por Damian del canal <a href="https://www.youtube.com/channel/UCa6V1UVOXN4wDm7RDQDoa6g" target="_blank">El Traductor de Ingeniería</a>, 
                  | a través de su video <a href="https://youtu.be/-PUT0hZiZEw" target="_blank">"Te Explico POR QUÉ estoy PREOCUPADO | [COVID-19]"</a>
              .col-lg-6
                cc-infected-line-bar.mt-4(:people-infected="peopleInfected")
                h3.text-center No generemos pánico, generemos conciencia.
        // @end Results
        // @start Cases
        section
          .container.py-5
            h2.t1.font-weight-bold.text-center.mb-4 Casos confirmados en el Perú
            cc-infected-cases-line-bar(:people-infected="peopleInfected")
            .table-responsive
              table.table
                thead
                  tr.text-center
                    th Fecha
                    th Casos Confirmados (*)
                    th Factor problemático
                tbody
                  tr.text-center(v-for="people in peopleInfected")
                    td {{ people.date_label }}
                    td {{ people.total }}
                    td {{ people.problem_factor }}
            p.text-center
              small
                | (*) Cantidad de casos confirmados obtenido del twitter oficial del 
                a(href="https://twitter.com/Minsa_Peru", target="_blank") Ministerio de Salud del Perú
        // @end Cases
      // @end Main
    // @start Footer
    cc-footer
    // @end Footer
</template>

<script>
import CcFooter from '@/components/layout/Footer.vue'
import CcHeader from '@/components/layout/Header.vue'
import CcInfectedLineBar from '@/components/InfectedLineBar.vue'
import CcInfectedCasesLineBar from '@/components/InfectedCasesLineBar.vue'
import CcButtonsSocialSharing from '@/components/ButtonsSocialSharing.vue'

import peopleInfected from '@/json/infected-people.json'

export default {
  name: "App",
  components: { CcFooter, CcHeader, CcInfectedLineBar, CcInfectedCasesLineBar, CcButtonsSocialSharing},
  data() {
    return {
      peopleInfected: peopleInfected,
      totalYesterday: 0,
      totalToday: 0,
      totalTomorrow: 0,
      totalTomorrowMin: 0,
      totalTomorrowMax: 0,
      problemFactor: 0,
      problemFactorMin: 0,
      problemFactorMax: 0,
      showTotalTomorrow: false
    }
  },
  methods: {
    getMinProblemFactor() {
      let lowest = Number.POSITIVE_INFINITY
      let tmp
      for (let i = this.peopleInfected.length - 1; i >= 0; i--) {
        tmp = this.peopleInfected[i].problem_factor
        if (tmp < lowest && tmp > 0) lowest = tmp
      }
      return lowest
    },
    getMaxProblemFactor() {
      let highest = Number.NEGATIVE_INFINITY;
      let tmp
      for (let i = this.peopleInfected.length - 1; i >= 0; i--) {
        tmp = this.peopleInfected[i].problem_factor
        if (tmp > highest && tmp < 6) highest = tmp;
      }
      return highest
    },
    calculate() {
      if (this.totalYesterday <= 0) { 
        this.showTotalTomorrow = false
        return 
      }

      const self = this
      this.problemFactor = this.totalToday / this.totalYesterday
      this.problemFactorMin = this.getMinProblemFactor();
      this.problemFactorMax = this.getMaxProblemFactor();
      this.totalTomorrow = Math.round(this.totalToday * this.problemFactor)
      this.totalTomorrowMin = Math.round(this.totalToday * this.problemFactorMin)
      this.totalTomorrowMax = Math.round(this.totalToday * this.problemFactorMax)
      this.showTotalTomorrow = true

      setTimeout(function () {
        self.$scrollTo('#results')
      }, 200)

    }
  }
}
</script>

<style lang="scss">
@import "./scss/main.scss";
</style>
