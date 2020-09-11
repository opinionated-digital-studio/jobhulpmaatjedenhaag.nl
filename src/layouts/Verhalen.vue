<template>
  <div class="layout">
    <JhmHeader />
    <div class="jhm-verhalen" id="main">
      <slot />
    </div>
    <JhmFooter />
  </div>
</template>

<style lang="scss">
.jhm-verhalen {
  padding-top: emRhythm(3);
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
