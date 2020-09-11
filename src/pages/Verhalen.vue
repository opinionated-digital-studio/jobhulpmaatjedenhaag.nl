<template>
  <Layout>
    <div class="jhm-container row">
      <div class="column">
        <h1>Verhalen</h1>
      </div>
    </div>
    <div class="jhm-verhalen__container">
      <div class="jhm-container row">
        <div class="column medium-6 large-4">
          <CardVerhalen v-for="edge in $page.verhalen.edges" :key="edge.node.id"
          :title="edge.node.title" :category="edge.node.category" :path="edge.node.path">
          {{ edge.node.excerpt }}
        </CardVerhalen
          >
        </div>
      </div>
    </div>
  </Layout>
</template>

<style lang="scss">
.jhm-verhalen__container {
  background-color: $secondary-color;
  padding-top: emRhythm(6);
  padding-bottom: emRhythm(8);
}
</style>

<script>
import Layout from "~/layouts/Verhalen.vue";
import CardVerhalen from "~/components/CardVerhalen.vue";

export default {
  metaInfo: {
    title: "Verhalen"
  },
  components: {
    Layout,
    CardVerhalen
  }
};
</script>

<page-query>
query{
  verhalen: allVerhaal{
		edges{
      node{
        id
        title
        path
        category
        excerpt
        content
      }
    }
  }
}
</page-query>
