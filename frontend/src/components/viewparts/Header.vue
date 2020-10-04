<!--
* Copyright (c) 2020 Musa Ugurlu
* Author: Musa Ugurlu
* Date: 09/20/2020 1:10:36 am
-->
<template>
    <!-- Header Section Begin -->
    <header class="header">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-3 col-md-3">
                    <div class="header__logo">
                        <a href="/"><img src="/img/LuckyLibraryLogo.png" alt=""></a>
                    </div>
                </div>
                <div class="col-lg-9 col-md-9">
                    <div class="header__nav">
                        <nav class="header__menu mobile-menu">
                            <ul>
                                <router-link tag="li" to="/"><a>Home</a></router-link>
                                <router-link tag="li" to="/books" :class="isActive('/book') ? 'active' : ''"><a>Books</a></router-link>
                                <router-link tag="li" to="/categories" :class="isActive('/categor') ? 'active' : ''"><a>Categories</a></router-link>
                                <router-link tag="li" to="/branches" :class="isActive('/branch') ? 'active' : ''"><a>Branches</a></router-link>
                            </ul>
                        </nav>
                        <div class="header__menu__right">
                            <router-link v-if="loggedIn" to="/auth/logout" class="primary-btn"><i class="fa fa-user"></i> Logout</router-link>
                            <router-link v-else to="/auth/logout" class="primary-btn"><i class="fa fa-user"></i> Login</router-link>
                        </div>
                    </div>
                </div>
            </div>
            <div id="mobile-menu-wrap"></div>
        </div>
    </header>
    <!-- Header Section End -->
</template>

<script>
export default {
    methods: {
        isActive(path) {
            return this.$route.path.indexOf(path) === 0;
        }
    },

    mounted() {
        if(this.$route.name !== "Home" && this.$route.name !== "Book" ) {
            const elem = document.getElementsByClassName("header")[0];
            elem.setAttribute("style", "background-image: url('/img/hero/library-bg.jpg');");
        }
    },

    computed: {
        loggedIn () { 
            return this.$store.state.auth.status.loggedIn;
        }
    },
}
</script>