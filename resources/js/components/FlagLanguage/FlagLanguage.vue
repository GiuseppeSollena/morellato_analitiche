
<template>
<!--   
  <div class="dropdown">
    <a class="dropdown-toggle" href="#" id="Dropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://img.icons8.com/officexs/256/italy.png" alt=""> it
    </a>

    <ul class="dropdown-menu" aria-labelledby="Dropdown">
        <li>
            <a class="dropdown-item" href="#"><img src="https://img.icons8.com/officexs/256/great-britain.png" alt=""> English <i class="fa fa-check text-success ms-2"></i></a>
        </li>
        <li><hr class="dropdown-divider" /></li>
        <li>
            <a class="dropdown-item" href="#"><img src="https://img.icons8.com/officexs/256/italy.png" alt=""> Italiano</a>
        </li>
        <li>
            <a class="dropdown-item" href="#"><img src="https://img.icons8.com/officexs/256/france.png" alt=""> Francese</a>
        </li>

    </ul>
</div> -->

<CDropdown color="secondary" togglerText="Dropdown button" >
  <CDropdownToggle component="a" size="sm" class="text1 flagPadding"><CIcon :icon="cifIt" size="sm" class="icon"/>Language</CDropdownToggle>
  <CDropdownMenu class="menu">
    <CDropdownItem href="#" size="sm" class="text2"><CIcon :icon="cifFr" size="sm" class="icon"/>FR</CDropdownItem>
    <CDropdownItem href="#" class="text2"><CIcon :icon="cifGb" size="sm" class="icon"/>EN</CDropdownItem>
    <CDropdownItem href="#" class="text2"><CIcon :icon="cifIt" size="sm" class="icon"/>IT</CDropdownItem>
  </CDropdownMenu>  
</CDropdown>


<!-- class="align-middle" -->

</template>

<script>
import { CDropdownMenu } from '@coreui/vue';
import { CDropdown } from '@coreui/vue';
import { CDropdownToggle } from '@coreui/vue';
import { CDropdownItem } from '@coreui/vue';
import { CDropdownDivider } from '@coreui/vue';
import { defineComponent } from 'vue';
import { CIcon } from '@coreui/icons-vue';

import{cifFr, cifGb, cifIt} from '@coreui/icons';

export default defineComponent({
    components:{
        CDropdownMenu,
        CDropdown,
        CDropdownToggle,
        CDropdownDivider,
        CDropdownItem,
        CIcon,
        
    },
    setup(){
        return{
            cifFr,
            cifGb,
            cifIt,
        }
        
    },
})

</script>

<style src="./FlagLanguage.css" scoped/>

