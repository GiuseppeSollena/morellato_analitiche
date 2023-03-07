<template>
    <nav class="navbar navbar-expand-lg bg-navbar">
        <div class="container-fluid">
            <div class="div-logo d-flex justify-content-center align-items-center">
                <a href="https://www.morellato.com/">
                    <img class="img-logo" src="https://cdn.morellato.com/media/images/logos/logo_morellato_footer_venice.png" alt="">
                </a>
            </div>
            <!-- <button class="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <i class="fas fa-bars"></i>
            </button> -->
            <div class="collapse navbar-collapse blocco-section" id="navbarNavAltMarkup">
                <div class="navbar-nav bg-navbar" v-for="(elem, index) in navElemList" v-bind:key="index">
                    <!-- <a class="nav-link active" aria-current="page" href="#">Home</a>
                    <a class="nav-link" href="#">Statistics</a>
                    <a class="nav-link" href="#">Altro</a> 
                    <div class="position-absolute top-5 end-0 btnLogin"><login-btn></login-btn></div>   -->
                    <a class="nav-link" :href=elem.link >{{ elem.label }}</a>
                    <div class="position-absolute top-5 end-0 btnLogin"><login-btn></login-btn></div> 
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
    export default{
        data(){
            return{
                navElemList:[
                    { label: "HOME", link: "/"},
                    { label: "STATISTICS", link: "/statistics"},

                ]
            };
        }
    }
</script>

<style src="./Navbar.css" scoped></style>