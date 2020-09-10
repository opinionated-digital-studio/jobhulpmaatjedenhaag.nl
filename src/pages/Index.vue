<template>
  <Layout>
    <JumbotronFront/> 
  </Layout>
</template>

<script>
import Layout from "~/layouts/Index.vue";
import JumbotronFront from "~/components/JumbotronFront.vue";

export default {
  metaInfo: {
    title: "Stichting JobHulpMaatje Den Haag: Samen werkt 't"
  },
  components: {
    Layout,
    JumbotronFront
  }
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
