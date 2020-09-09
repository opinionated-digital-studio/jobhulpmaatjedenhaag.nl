<template>
  <div class="layout">
    <Header />
    <div class="jhm-container" id="main">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<style>
a:focus,
button:focus {
  background-color: yellow;
  color: black;
  outline: 3px solid yellow;
}
</style>

<script>
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";

export default {
  components: {
    Header,
    Footer
  }
};
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
