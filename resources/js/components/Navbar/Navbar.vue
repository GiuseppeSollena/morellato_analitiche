<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-navbar">
        <div class="container-fluid">

            <div class="blocco-logo">
                <div class="div-logo d-flex ">
                    <a href="https://www.morellato.com/">
                        <img class="img-logo"
                            src="https://cdn.morellato.com/media/images/logos/logo_morellato_footer_venice.png" alt="">
                    </a>
                </div>
            </div>

            <button class="navbar-toggler btn-menu" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                aria-label="Toggle navigation">
                <span><img class="img-menu" src="../../../img/icon-menu.png" alt=""></span>
            </button>

            <div class="collapse navbar-collapse blocco-section-btn " id="navbarNavAltMarkup">
                <div class="blocco-section d-flex">
                    <div class="navbar-nav" v-for="(elem, index) in navElemList" v-bind:key="index">
                        <a class="nav-link" :href=elem.link> {{ elem.label }} </a>
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