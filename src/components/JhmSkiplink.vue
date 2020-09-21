<template>
  <a class="jhm-skiplink" href="#main">Naar hoofdinhoud</a>
</template>

<style lang="scss">
.jhm-skiplink {
  position: absolute;
  overflow: hidden;
  height: 1px;
  width: 1px;
  clip: rect(1px, 1px, 1px, 1px);
  white-space: nowrap;
  z-index: 100000;
}

.jhm-skiplink:focus {
  left: 4%;
  padding: emRhythm(2) emRhythm(3);
  width: auto;
  position: absolute;
  height: auto;
  clip: auto;
}
</style>
<script>
export default {
  name: "JhmSkiplink"
};
</script>
