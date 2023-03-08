<template>
    <n-card :title="cardInfo.title">
        <template #header-extra>

        </template>
        {{ cardInfo.description }}
        <template #footer>

        </template>
        <template #action>
            <!-- <statistic-button></statistic-button> -->
            <div>
                <router-link to="/detailsTest">Details</router-link>
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
    },
    props: {
        cardInfo: {
            type: Object,
            required: true
        }
    }


})

</script>

<style src="./StatisticsCard.css" scoped></style>