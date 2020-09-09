<template>
  <g-link
    v-if="type === 'link'"
    v-bind:to="to"
    class="jhm-button"
    v-bind:class="[buttonStyle, buttonSize]"
    ><slot
  /></g-link>
  <button
    v-else-if="type === 'submit'"
    v-bind:type="type"
    v-bind:value="to"
    v-bind:class="[buttonStyle, buttonSize]"
  >
    <slot />
  </button>
</template>

<style lang="scss">
.jhm-button {
  border: none;
  text-align: center;
  display: block;
  padding: emRhythm(2) emRhythm(3);
  background-color: $primary-color;
  margin: 0 auto emRhythm(3) auto;
  text-decoration: none;
  color: white;
  font-weight: bold;
  text-transform: lowercase;
}

.jhm-button--gray {
  background-color: $gray;
  color: black;
}

.jhm-button--outline {
  background: none;
  border: 2px solid $primary-color;
  color: $primary-color
}

.jhm-button--outline-secondary {
  background: none;
  border: 2px solid $secondary-color;
  color: $secondary-color;
}

.jhm-button--secondary {
  background-color: $secondary-color;
  color: white;
}

.jhm-button--white {
  background-color: white;
  color: $primary-color;
}

.jhm-button--large {
  @include setType(5, $ms-up1);
}
</style>

<script>
export default {
  name: "Button",
  props: {
    styling: String,
    to: String,
    size: String,
    type: String
  },
  computed: {
    buttonStyle: function() {
      const buttonPrefix = "jhm-button--";
      switch (this.styling) {
        case "white":
          return buttonPrefix + "white";
          break;
      }
    },

    buttonSize: function() {
      const buttonPrefix = "jhm-button--";
      switch (this.size) {
        case "large":
          return buttonPrefix + "large";
          break;
      }
    }
  }
};
</script>
