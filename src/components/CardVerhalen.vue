<template>
  <g-link :to="path" class="jhm-card jhm-card--verhalen">
    <div class="jhm-card__img-container">
      <g-image class="jhm-card__img" src="~/assets/caa_7704-min.jpg" alt="Een portret van JobHulpMaatje Najib"/>
    </div>
    <div class="jhm-card__content">
      <div class="jhm-card__subheading-container">
        <h3 class="h6 jhm-card__subheading"> {{ category }} </h3>
        <font-awesome class="fa-icon jhm-subheading__arrow" :icon="['fas', 'arrow-alt-circle-right']" size="2x" />
      </div>
      <h2 class="h3 jhm-card__heading">{{ title }}</h2>
    <slot />
    </div>
  </g-link>
</template>

<style lang="scss">
.jhm-card {
  display: block;
  background-color: white;
  text-decoration: none;
}

.jhm-card__content {
  padding: emRhythm(4);
  padding-top: emRhythm(3);
}

.jhm-card__heading {
  @include bp(lg) {
    margin-bottom: emRhythm(2) !important;
  }
}

.jhm-card__subheading-container {
  display: flex;
  justify-content: space-between;
  margin-bottom: emRhythm(1);
}

.jhm-card__subheading {
  height: 100%;
  margin: auto 0 !important;
  text-transform: uppercase;
  font-weight: normal !important;
}

.jhm-subheading__arrow {
  color: $secondary-color;
}

.jhm-card__img-container {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: emRhythm(35);

  @include bp(lg) {
    height: emRhythm(45);
  }
}

.jhm-card__img {
  width: 100%;
  position: absolute;
}
</style>

<script>
export default {
  name: "CardVerhalen",
  props: {
    title: { type: String },
    category: { type: String, default: "Nieuws" },
    path: { type: String }
  }
};
</script>
