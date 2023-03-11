<template>
    <!-- <nav class="navbar navbar-expand-lg navbar-light bg-navbar div-principale-nav">
        <div class="container-fluid container2">
            
            <div class="blocco-logo ">
                <a href="https://www.morellato.com/">
                        <img class="img-logo"
                            src="https://cdn.morellato.com/media/images/logos/logo_morellato_footer_venice.png" alt="">
                </a>
            </div>

            <button class="navbar-toggler btn-menu" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                aria-label="Toggle navigation">
                <span><img class="img-menu" src="../../../img/icon-menu.png" alt=""></span>
            </button>

            <div class="collapse navbar-collapse blocco-section-btn bg-navbar" id="navbarNavAltMarkup">
                <div class="blocco-section d-flex">
                    <div class="navbar-nav" v-for="(elem, index) in navElemList" v-bind:key="index">
                        <router-link class="nav-link" :to=elem.link> {{ elem.label }}</router-link>
                    </div>
                </div>
                <div class="blocco-btnLogin">
                        <login-btn></login-btn>
                </div>

                <div class="blocco-flagLang">
                    <flag-lang></flag-lang>
                </div>
            </div>
        </div>

    </nav> -->

    <CNavbar expand="lg" color-scheme="light" class="bg-navbar">
        <CContainer fluid>
            <CNavbarBrand href="#">Navbar</CNavbarBrand>
            <CNavbarToggler aria-label="Toggle navigation" aria-expanded={visible} @click="visible = !visible" />
            <CCollapse class="navbar-collapse" :visible="visible">
                <CNavbarNav v-for="(elem, index) in navElemList" v-bind:key="index">
                    <CNavItem>
                        <CNavLink>
                            <router-link class="nav-link" :to=elem.link> {{ elem.label }}</router-link>
                        </CNavLink>
                    </CNavItem>
                </CNavbarNav>
            </CCollapse>
        </CContainer>
    </CNavbar>
</template>

<script>
import {CNavbarBrand,CNavbar,CNavbarNav,CNavItem,CNavLink,CContainer,CCollapse,CNavbarToggler} from "@coreui/vue";
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
  },
    data() {
        return {
            navElemList: [
                { label: "HOME", link: "/" },
                { label: "STATISTICS", link: "/statistics" },

            ],  
            visible: true,
        };
    }
}

</script>

<style src="./Navbar.css" scoped></style>