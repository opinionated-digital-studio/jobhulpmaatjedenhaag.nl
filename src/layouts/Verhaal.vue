<template>
  <div class="layout">
    <JhmHeader />
    <div class="jhm-verhaal" id="main">
      <slot />
    <div class="jhm-verhaal__bluestrip"></div>
    </div>
    <JhmFooter />
  </div>
</template>

<style lang="scss">
.jhm-verhaal {
  margin-bottom: emRhythm(5);
  position: relative;
}

.jhm-verhaal__bluestrip {
  position: absolute;
  top: 0;
  width: 100%;
  height: emRhythm(45);
  background-color: $secondary-color;
  z-index: -1;
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
