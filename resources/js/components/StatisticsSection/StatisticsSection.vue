<template>
  <div class="container">
    <div class="row g-2">
       <div class="col-6">
        <div class="p-3 border bg-light card"><statistics-card :card-info="card1"></statistics-card></div>
      </div>
      <div class="col-6">
        <div class="p-3 border bg-light card"><statistics-card :card-info="card2"></statistics-card></div>
      </div>
      <div class="col-6">
        <div class="p-3 border bg-light card"><statistics-card :card-info="card3"></statistics-card></div>
      </div>
      <div class="col-6">
        <div class="p-3 border bg-light card"><statistics-card :card-info="card4"></statistics-card></div>
      </div>
    </div>
  </div>
</template>

<script>

import statisticsCard from '../../components/StatisticsCard/StatisticsCard.vue';

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

<style src="./StatisticsSection.css" scoped></style>