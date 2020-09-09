<template>
  <Layout>
    <h1 v-html="$page.main.title" />
    <VueRemarkContent />
  </Layout>
</template>

<style></style>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.main.title
    };
  }
};
</script>

<page-query>
  query Main ($id: ID!){
    main: main (id: $id) {
    title
    content
  }
}
</page-query>
