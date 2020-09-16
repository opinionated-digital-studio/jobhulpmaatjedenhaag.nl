<template>
  <div class="jhm-card jhm-card--information">
    <div class="jhm-card__heading-container">
      <h2 class="h3 jhm-card__heading">Hoe ga je als maatje te werk?</h2>
      <JhmButton v-bind:to="to" class="jhm-card__button jhm-card__button--top" type="link" styling="white">{{ buttonText }}</JhmButton>
    </div>
    <div class="jhm-card__content">
      <slot />
    </div>
      <JhmButton v-bind:to="to" class="jhm-card__button jhm-card__button--bottom" type="link" styling="white">{{ buttonText }}</JhmButton>
  </div>
</template>

<style lang="scss">
.jhm-card--information {
  padding: emRhythm(4);
  background-color: $secondary-color;

  ul {
    list-style-type:square;
  }
} 

.jhm-card__heading-container {
  @include bp(md) {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
}

.jhm-card__button {
  margin-left: auto;
  margin-right: 0;
}

.jhm-card__button--top {
  display: none;

  @include bp(md) {
    display: block;
  }
}

.jhm-card__button--bottom {
  margin-bottom: 0;

  @include bp(md) {
    display: none;
  }
}



</style>

<script>
import JhmButton from "~/components/JhmButton.vue"
export default {
  name: "CardInformation",
  components: {
    JhmButton
  },
  props: {
    to: String, 
    buttonText: String
  }
}
</script>
