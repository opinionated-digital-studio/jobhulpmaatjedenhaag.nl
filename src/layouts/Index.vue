<template>
  <div class="layout">
    <JhmHeader />
    <div id="main">
      <slot />
    </div>
    <JhmFooter />
  </div>
</template>

<style>
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
