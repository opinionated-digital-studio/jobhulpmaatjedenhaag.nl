<template>
  <div class="layout">
    <JhmHeader />
    <div class="row jhm-container" id="main">
      <div class="column large-6">
        <slot />
      </div>
    </div>
    <JhmFooter />
  </div>
</template>

<style lang="scss">
#main {
  padding-top: emRhythm(3);
}
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
