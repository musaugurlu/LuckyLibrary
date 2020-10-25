<!--
* Copyright (c) 2020 Musa Ugurlu
* Author: Musa Ugurlu
* Date: 09/20/2020 3:46:10 pm
-->
<template>
    <div>
        Logging out...
    </div>
</template>
<script>

export default {
    mounted() {
        this.$store.dispatch('auth/logout');
        this.$store.dispatch('alert/success', 'You have successfully been logged out')
        this.$router.push("/");

    },
}
</script>