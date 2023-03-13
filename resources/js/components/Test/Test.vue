<template>
<CAlert color="primary" :visible="liveExampleVisible" dismissible @close="() => { liveExampleVisible = false }">A simple primary alert—check it out!</CAlert>
<CButton color="primary" @click="() => { liveExampleVisible = true }">Show live alert</CButton>
</template>


<script>

import { CAlert } from '@coreui/vue';
import { CButton } from '@coreui/vue';
import { defineComponent } from 'vue';

export default defineComponent({
    components: {
    CAlert,
    CButton,

  },
  data(){
    return{
        liveExampleVisible : false,
    }
    
  }

})
 

</script>

<style>




</style>