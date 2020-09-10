<template>
  <div class="layout">
    <JhmHeader />
    <div class="row jhm-container jhm-main" id="main">
      <div class="column">
        <slot />
      </div>
    </div>

    <div class="jhm-contact__panorama"></div>
    <JhmFooter />
  </div>
</template>

<style scoped lang="scss">
.jhm-main {
  padding-top: emRhythm(3) !important;
  margin-bottom: emRhythm(5) !important;
}

.jhm-contact__panorama {
  background-image: url("../assets/jumbotron_c053b2f9.jpg");
  height: emRhythm(30);
  background-size: cover;
  background-position: top;
  width: 100%;

  @include bp(md) {
    height: emRhythm(50);
  }

  @include bp(lg) {
    height: emRhythm(55);
  }
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
