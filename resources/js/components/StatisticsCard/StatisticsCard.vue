<template>
    <n-card title="Statistic's name">
        <template #header-extra>
            #subtitle
        </template>
        Card Content
        <template #footer>
            #breve descrizione
        </template>
        <template #action>
            <!-- <statistic-button></statistic-button> -->
            <div>
                <a href="/">Detail</a>
            </div>
        </template>
    </n-card>
</template>


<script>
import { defineComponent } from 'vue'
import { NCard } from 'naive-ui'

export default defineComponent({
    components: {
        NCard
    // },
    // data() {
    //     return {
    //         ComponentList: [
    //             { title: "PRODOTTI DIFETTOSI" },
    //             { title: "VENDITE DI GIOIELLI" },
    //             { title: "VENDITE DI COLLANE" },
    //             { title: "PRODOTTI RUBATI" }

    //         ]
    //     };
    }
})

</script>

<style src="./StatisticsCard.css" scoped></style>