<template>
    <CCard>
      <CCardBody>
        <CCardTitle>{{ cardInfo.title }}</CCardTitle>
        <CCardText>{{ cardInfo.description }}</CCardText>
        <router-link to="/detailsTest">Details</router-link>
      </CCardBody>
    </CCard>
</template>


<script>
import { defineComponent } from 'vue'
import { NCard } from 'naive-ui'
import { CCard, CCardBody, CCardTitle,CCardText,CButton } from '@coreui/vue';

export default defineComponent({
    components: {
        NCard,
        CCard,
        CCardBody,
        CCardText,
        CCardTitle,
        CButton,
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