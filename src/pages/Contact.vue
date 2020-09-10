<template>
  <Layout>
    <h1>Contact</h1>
    <h2 class="h3">Stichting JobHulpMaatje Den Haag</h2>
    <address class="jhm-address">
      <span class="jhm-address__item">Burgemeester van Karnebeeklaan 10</span><br />
      <span class="jhm-address__item">2585 BB Den Haag</span><br />
      <a class="jhm-address__item" href="mailto:info@jobhulpmaatjedenhaag.nl"
        >info@jobhulpmaatjedenhaag.nl</a
      >
    </address>
  </Layout>
</template>

<style lang="scss">
.jhm-address {
  margin-bottom: emRhythm(3);
}

.jhm-address__item {
  @include setType(5, $ms-up1);

  @media (min-width: 56.25em) {
    @include setType(7, $ms-up2);
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
