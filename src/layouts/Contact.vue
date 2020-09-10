<template>
  <div class="layout">
    <JhmHeader />
    <div class="row jhm-container jhm-contact" id="main">
      <div class="column">
        <slot />
      </div>
    </div>

    <div class="row jhm-container">
      <div class="column large-6 jhm-anbi__container">
        <g-image class="jhm-anbi__logo" src="~/assets/anbi_zwart.jpg" /><span class="jhm-anbi__text"
          >JobHulpMaatje Den Haag is, via stichting SchuldHulpMaatje Den Haag,
          een ANBI erkende organisatie.</span
        >
      </div>
    </div>

    <div class="jhm-contact__panorama"></div>
    <JhmFooter />
  </div>
</template>

<style lang="scss">
.jhm-contact {
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

.jhm-anbi__logo {
  width: emRhythm(15);
  margin-bottom: emRhythm(2);

  @include bp(md) {
    margin-bottom: 0;
  }

  @include bp(lg) {
    width: emRhythm(20);
  }
}

.jhm-anbi__container {
  display: flex;
  margin-bottom: emRhythm(10);
  flex-wrap: wrap;

  @include bp(md) {
    flex-wrap: nowrap
  }
}

.jhm-anbi__text {
  margin: auto 0;

  @include bp(md) {
    margin: auto emRhythm(2) auto emRhythm(4); 
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
