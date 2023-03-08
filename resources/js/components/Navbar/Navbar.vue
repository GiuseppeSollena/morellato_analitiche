<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-navbar div-principale-nav">
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
                        <!-- <a class="nav-link" :href=elem.link> {{ elem.label }} </a> -->
                        <router-link class="nav-link" :to=elem.link> {{ elem.label }}</router-link>
                    </div>
                </div>
                <div class="blocco-btnLogin">
                        <login-btn></login-btn>
                </div>
            </div>
        </div>

    </nav>
</template>

<script>
export default {
    data() {
        return {
            navElemList: [
                { label: "HOME", link: "/" },
                { label: "STATISTICS", link: "/statistics" },

            ]
        };
    }
}

</script>

<style src="./Navbar.css" scoped></style>