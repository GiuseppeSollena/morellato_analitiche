<script setup>
   // import Navbar from "./components/Navbar/Navbar.vue";
</script>

<template>
  
  <div class="features">
        <div class="container">
            <div class="columns is-centered is-vcentered is-mobile">
                <div class="column is-narrow has-text-centered">
                    <div class="circle">
                        <font-awesome-icon col size="2x" :icon="['fas', 'tasks']" />
                    </div>
                    <h1>STATISTICS PAGE (con il routing andiamo dopo il click)</h1>
                </div>
            </div>
        </div>
    </div>

    <div class="columns">
        <div class="column">
            <stat-card></stat-card>
        </div>
        <div class="column">
            <stat-card></stat-card>
        </div>
        <div class="column">
            <stat-card></stat-card>
        </div>
    </div>
</template>

<style src="./StatisticsSection.css" scoped></style>
