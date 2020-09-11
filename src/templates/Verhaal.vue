<template>
  <Layout>
    <h1 v-html="$page.verhaal.title" />
    <VueRemarkContent />
  </Layout>
</template>

<style></style>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.verhaal.title
    };
  }
};
</script>

<page-query>
  query Verhaal ($id: ID!){
    verhaal: verhaal (id: $id) {
    title
    content
  }
}
</page-query>
