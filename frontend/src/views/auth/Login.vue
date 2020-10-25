<!--
* Copyright (c) 2020 Musa Ugurlu
* Author: Musa Ugurlu
* Date: 09/20/2020 6:11:40 pm
-->
<template>
    <!-- Hero Section Begin -->
    <section class="hero set-bg">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="hero__text">
                        <div class="section-title">
                            <h2>Login</h2>
                        </div>
                        <div class="login_form">
                            <form @submit.prevent="handleSubmit">
                                <p>&nbsp;</p>
                                <input type="text" name="email" placeholder="Email" v-model="email">
                                <input type="password" name="password" placeholder="Password" v-model="password">
                                <button type="submit" class="site-btn">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Hero Section End -->
</template>

<script>
import { mapActions } from 'vuex'
export default {
    data () {
        return {
            email: '',
            password: '',
            submitted: false
        }
    },
    computed: {
        loggedIn () {
            return this.$store.getters['auth/isLoggedIn'];
        }
    },
    created () {
        // reset login status
        this.$store.dispatch('auth/logout');
    },
    methods: {
        ...mapActions('alert', ['error', 'success']),
        handleSubmit () {
            this.submitted = true;
            const { email, password } = this;
            if (email && password) {
                this.$store.dispatch('auth/login', { email, password })
                    .then(() => { 
                        this.success("Successfully logged in.")
                        this.$router.push('/') 
                    })
                    .catch(err => { this.error(err.message) })
            }
        }
    }
}
</script>

<style scoped>
    .set-bg {
        background-image: url('../../assets/img/hero/library-bg.jpg');
    }
</style>