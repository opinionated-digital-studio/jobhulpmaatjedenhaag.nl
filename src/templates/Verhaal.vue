<template>
  <Layout>
    <div class="jhm-container center-on-small left-on-medium row">
      <div class="column medium-2">
        <div class="jhm-side__img-container">
          <g-image
            class="jhm-side__img"
            :alt="$page.verhaal.thumbalt"
            :src="processedThumb()"
          />
        </div>
      </div>
      <div class="column medium-9 medium-offset-1 large-pull-1 large-7 jhm-verhaal__content">
        <h1 v-html="$page.verhaal.title" />
        <VueRemarkContent />
        <g-link to="/verhalen">← Terug naar verhalen</g-link>
      </div>
    </div>
  </Layout>
</template>

<style lang="scss">
.jhm-verhaal__content {
  padding: emRhythm(12) emRhythm(5) emRhythm(5) emRhythm(5) !important;
  background-color: white;
  transform: translateY(calc(3.75em * -1));

  @include bp(md) {
    transform: translateY(emRhythm(4));
    padding: emRhythm(5) !important;
  }
}

.jhm-side__img-container {
  z-index: 2;
  border: 3px solid white;
  margin-top: emRhythm(5);
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  width: emRhythm(20);
  margin: emRhythm(5) auto 0 auto;
  height: emRhythm(20);

  @include bp(md) {
    margin: emRhythm(5) 0 0 0;
    height: inherit;
    padding-bottom: 100%;
    width: 100%;
  }

  @include bp(lg) {
    transform: translateX(-3rem);
  }
}

.jhm-side__img {
  left: 0;
  width: 100%;
  position: absolute;
}
</style>

<script>
import Layout from "~/layouts/Verhaal.vue";
export default {
  metaInfo() {
    return {
      title: this.$page.verhaal.title
    };
  },
  components: {
    Layout
  },
  methods: {
    processedThumb() {
      return require("~/assets/thumbs/" + this.$page.verhaal.thumb);
    }
  }
};
</script>

<page-query>
  query Verhaal ($id: ID!){
    verhaal: verhaal (id: $id) {
    title
    content
    category
    thumb
    thumbalt
  }
}
</page-query>
