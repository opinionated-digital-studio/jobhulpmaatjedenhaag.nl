<template>
  <div class="layout">
    <JhmHeader />
    <div class="row jhm-container jhm-main" id="main">
      <div class="column large-8">
        <slot />
      </div>
    </div>
    <JhmFooter />
  </div>
</template>

<style lang="scss">
.jhm-main {
  padding-top: emRhythm(3) !important;
  margin-bottom: emRhythm(8) !important;
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
