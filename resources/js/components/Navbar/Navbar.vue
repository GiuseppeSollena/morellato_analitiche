<template>
    <CNavbar expand="lg" color-scheme="light" class="myNavbar ">
        <CContainer fluid class="myCollapse ">
            <CNavbarBrand href="#"> <CImage class="logo" src="https://cdn.morellato.com/media/images/logos/logo_morellato_footer_venice.png" />  </CNavbarBrand>
            <CNavbarToggler class="icon-menu" aria-label="Toggle navigation" aria-expanded={visible} @click="visible = !visible">
            <span><img style="max-width: 20px;max-height: 20px;" src="../../../img/icon-menu.png" alt=""></span>
            </CNavbarToggler>
            <CCollapse class="navbar-collapse" :visible="visible" >
                    <CNavbarNav>
                    <CNavItem v-for="(elem, index) in navElemList" v-bind:key="index">
                        <CNavLink>
                            <router-link class="myLink" :to=elem.link> {{ elem.label }}</router-link>
                        </CNavLink>
                    </CNavItem>
                </CNavbarNav>
                <div class="ms-auto div-flagLang">
                    <flag-lang></flag-lang> 
                </div>
                <div class=" div-login-btn"> 
                    <login-btn></login-btn>
                </div> 
            </CCollapse>
        </CContainer>
    </CNavbar>
</template>

<script>
import {CNavbarBrand,CNavbar,CNavbarNav,CNavItem,CNavLink,CContainer,CCollapse,CNavbarToggler} from "@coreui/vue";
import { CImage } from '@coreui/vue';
export default {
    components: {
    CNavItem,
    CNavbar,
    CNavLink,
    CNavbarBrand,
    CNavbarNav,
    CContainer,
    CCollapse,
    CNavbarToggler,
    CImage,
  },
    data() {
        return {
            navElemList: [
                { label: "HOME", link: "/" },
                { label: "STATISTICS", link: "/statistics" },
                { label: "prova", link: "/detailsTest" },

            ],  
            visible: false,
        };
    }
}

</script>

<style src="./Navbar.css" scoped></style>