<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
    created() {
        this.$http.interceptors.response.use(undefined, function (err) {
            return new Promise(function () {
                if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
                    this.$store.dispatch('auht/logout')
                }
                throw err;
            });
        });
    },
    computed: {
        ...mapState({
            show: state => state.alert.show
        })
    },
    watch: {
        show() {
            if (this.show) {
                switch (this.$store.state.alert.type) {
                    case 'success':
                        this.$toasted.success(this.$store.state.alert.message, {icon: 'check-circle'})
                        break;
                    case 'error':
                        this.$toasted.error(this.$store.state.alert.message, {icon: 'times-circle'})
                        break;
                    case 'info':
                        this.$toasted.info(this.$store.state.alert.message, {icon: 'info-circle'})
                        break;
                    case 'warning':
                        this.$toasted.warning(this.$store.state.alert.message, {icon: 'exclamation-circle'})
                        break;
                    default:
                        this.$toasted.show(this.$store.state.alert.message, {icon: 'info-circle'})
                        break;
                }
            }
            this.hideAlert();
        }
    },
    methods: {
        ...mapMutations('alert', ['hideAlert'])
    },
}
</script>