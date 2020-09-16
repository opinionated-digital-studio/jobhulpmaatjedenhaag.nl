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
  <button
    v-else-if="type === 'button'"
    class="jhm-button"
    v-bind:class="[buttonStyle, buttonSize]"
    v-on:click.prevent="onButtonClick"
  >
    <slot />
  </button>
</template>

<style lang="scss">
.jhm-button {
  font-family: $font-sans;
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

  &:hover {
    background-color: darken( $primary-color, 10% )
  }

  @include bp(md) {
    display: inline-block;
    min-width: 15ex;
  }
}

.jhm-button--gray {
  background-color: $gray;
  color: black;

  &:hover {
    background-color: darken( $gray, 10% )
  }
}

.jhm-button--outline {
  background: none;
  border: 2px solid $primary-color;
  color: $primary-color;
}

.jhm-button--outline-secondary {
  background: none;
  border: 2px solid $secondary-color;
  color: $secondary-color;
}

.jhm-button--secondary {
  background-color: $secondary-color;
  color: white;

  &:hover {
    background-color: darken( $secondary-color, 10% )
  }
}

.jhm-button--white {
  background-color: white;
  color: $primary-color;

  &:hover {
    background-color: darken( white, 10% )
  }
}

.jhm-button--large {
  @include setType(5, $ms-up1);
}
</style>

<script>
export default {
  name: "JhmButton",
  props: {
    styling: String,
    to: String,
    size: String,
    type: String
  },
  computed: {
    buttonStyle: function() {
      return "jhm-button--" + this.styling;
    },

    buttonSize: function() {
      const buttonPrefix = "jhm-button--";
      switch (this.size) {
        case "large":
          return buttonPrefix + "large";
          break;
      }
    }
  },
  methods: {
    onButtonClick: function() {
      this.$emit("buttonClicked");
    }
  }
};
</script>
