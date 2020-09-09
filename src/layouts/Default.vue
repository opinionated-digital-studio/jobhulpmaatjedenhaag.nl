<template>
  <div class="layout">
    <JhmHeader />
    <div class="jhm-container" id="main">
      <slot />
    </div>
    <JhmFooter />
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
import JhmHeader from "~/components/JhmHeader.vue";
import JhmFooter from "~/components/JhmFooter.vue";

export default {
  components: {
    JhmHeader,
    JhmFooter
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
