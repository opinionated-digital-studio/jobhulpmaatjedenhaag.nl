<template>
  <input
    type="hidden"
    name="sunnyspotted"
    v-model="value"
    @input="sunnyspotted"
    value=""
  />
</template>

<script>
export default {
  name: "InputSunnyspotted",

  data() {
    return {
      value: "" 
    };
  },
  methods: {
    sunnyspotted: function() {
      this.$emit("sunnyspotted", this.value);
    }
  }
};
</script>
