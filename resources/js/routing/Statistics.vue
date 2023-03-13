<template>
    <div class="container">
        <div class="col d-flex justify-content-center">
            <h1>questa è la pagina statistiche</h1>
        </div>
    </div>

    <!-- <statistics-card :card-info="card1"></statistics-card> -->
<statistics-section></statistics-section>
</template>

<script>

import statisticsCard from '../components/StatisticsCard/StatisticsCard.vue';

export default {
  components: {
    statisticsCard
  },
  data() {
    return {
      card1: {
        title: 'STATISTICHE SUI PRODOTTI',
        description: 'breve descrizione...'
      },
      card2: {
        title: 'STATISTICHE SULLE VENDITE',
        description: 'breve descrizione...'
      },
      card3: {
        title: 'STATISTICHE SUI CLIENTI',
        description: 'breve descrizione...'
      },
      card4: {
        title: 'STATISTICHE SUI FURTI',
        description: 'breve descrizione...'
      }

    };
  }
};

</script>

<style>

</style>