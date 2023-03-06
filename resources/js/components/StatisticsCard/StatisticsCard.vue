
<template>
    <div class="card">
        <div class="card-image">
            <figure class="image is-2by1">
                <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
            </figure>
        </div>
        <div class="card-content">
            <div class="media">
                <div class="media-content">
                    <p class="title is-4">Nome statistica</p>
                    <p class="subtitle is-6">sottotitolo</p>
                </div>
            </div>

            <div class="content">
                dettagli della statistica
            </div>
            <div>
                <button class="button is-link is-light">Visualizza statistica</button>

            </div>

        </div>
    </div>
<!-- <v-container class="my-5">
        <v-layout row wrap>
            <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
            <v-card>hello</v-card>
            </v-flex>
        </v-layout>
                    </v-container> -->
</template>
  
<script>
export default {
    data() {
        return {
            team: [
                { name: 'beppe', role: 'developer' },
                { name: 'sonia', role: 'model' },
                { name: 'mirto', role: 'cat' },
                { name: 'pippo', role: 'boss' }
            ]
        }
    }
}
</script>