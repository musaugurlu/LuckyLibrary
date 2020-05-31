<template>
    <nav class="navbar has-shadow">
        <div class="container">
            <div class="navbar-brand">
                <a class="navbar-item" th:href="@{/}">
                    <img src="/img/logo.png" />
                </a>
            </div>
            <div class="navbar-end">
                <router-link class="navbar-item" to="/">Home</router-link>
                <router-link class="navbar-item" to="/books">Books</router-link>
                <router-link class="navbar-item" to="/authors">Branches</router-link>
                <router-link class="navbar-item" to="/my-account">My Account</router-link>
            </div>
        </div>
    </nav>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Navbar extends Vue {
}
</script>