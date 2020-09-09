<template>
  <div class="jhm-footer">
    <div class="jhm-container">
      &#169; {{$static.metadata.siteName}}
    </div>
  </div>
</template>

<style lang="scss">
.jhm-footer {
  position: relative;
  padding: emRhythm(2);
  background-color: black;
  color: white;
  transform: translateY(emRhythm(6));
}

.jhm-footer::after {
  content: '';
  width: 100%;
  height: emRhythm(6);
  position: absolute;
  top: calc(#{emRhythm(6)} * -1);
  left: 0;
  background-color: #212b5e;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='282' height='282' viewBox='0 0 20 20'%3E%3Cg %3E%3Cpolygon fill='%234ebab1' points='20 10 10 0 0 0 20 20'/%3E%3Cpolygon fill='%234ebab1' points='0 10 0 20 10 20'/%3E%3C/g%3E%3C/svg%3E");
}
</style>

<script>
export default {
  name: "Footer",
};
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
