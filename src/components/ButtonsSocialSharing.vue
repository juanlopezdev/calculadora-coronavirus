<template lang="pug">
  social-sharing(
    url='https://juanlopezdev.github.io/calculadora-coronavirus/',
    title='¿Cuántos casos de Coronavirus posiblemente habrá mañana?',
    description='Sencilla plataforma que calcula el total de casos por coronavirus el día de mañana, te explica el factor problemático y te brinda un gráfico de los contagiados en Perú. Hagamos que más personas tomen conciencia',
    quote='Sencilla plataforma que calcula el total de casos por coronavirus el día de mañana',
    hashtags='yomequedoencasa,covid19,peru',
    twitter-user='juanlopezdev', 
    inline-template='')

    .text-center
      button.btn.btn-social.btn-primary.mx-1.mb-2
        network(network='email')
          i.fa.fa-envelope
          |  Email
      button.btn.btn-social.btn-social--facebook.mx-1.mb-2
        network(network='facebook')
          i.fa.fa-facebook
          | Facebook
      button.btn.btn-social.btn-social--linkedin.mx-1.mb-2
        network(network='linkedin')
          i.fa.fa-linkedin
          | LinkedIn
      button.btn.btn-social.btn-social--skype.mx-1.mb-2
        network(network='skype')
          i.fa.fa-skype
          | Skype
      button.btn.btn-social.btn-social--twitter.mx-1.mb-2
        network(network='twitter')
          i.fa.fa-twitter
          | Twitter
      button.btn.btn-social.btn-social--whatsapp.mx-1.mb-2
        network(network='whatsapp')
          i.fa.fa-whatsapp
          | Whatsapp
</template>