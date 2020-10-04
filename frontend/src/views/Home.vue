<template>
  <div>
    <page-header />
    <page-hero />
    <page-category />
    <page-footer />
  </div>
</template>

<script>
// @ is an alias to /src
import PageHeader from "@/components/viewparts/Header.vue";
import PageHero from "@/components/viewparts/Hero.vue";
import PageCategory from "@/components/viewparts/Category.vue";
import PageFooter from "@/components/viewparts/Footer.vue";

export default {
    name: "Home",
    components: {
        PageHeader,
        PageHero,
        PageCategory,
        PageFooter,
    },
};
</script>
