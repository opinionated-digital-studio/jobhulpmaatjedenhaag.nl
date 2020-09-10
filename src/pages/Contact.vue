<template>
  <Layout>
    <h1>Contact</h1>
    <h2 class="h3">Stichting JobHulpMaatje Den Haag</h2>
    <address>
      <span>Burgemeester van Karnebeeklaan 10</span><br />
      <span>2585 BB Den Haag</span><br />
      <a href="mailto:info@jobhulpmaatjedenhaag.nl"
        >info@jobhulpmaatjedenhaag.nl</a
      >
    </address>

  </Layout>
</template>

<style lang="scss">
address {
  margin-bottom: emRhythm(1, $ms-up1);
  @include setType(5, $ms-up1);

  @media (min-width: 56.25em) {
    margin-bottom: emRhythm(1, $ms-up2);
    @include setType(6, $ms-up2);
  }
}
</style>

<script>
import Layout from "~/layouts/Contact.vue"
export default {
  metaInfo: {
    title: "Contact"
  },
  components: {
    Layout
  }
};
</script>
