<template>
  <v-row>
    <v-col v-for="(model, index) in $static.models.edges" :key="index" class="col-12 col-md-4">
      <ModelCard :src="model.node.displayImage.asset.url" :title="model.node.title" :subtitle="model.node.subtitle" :slug="model.node.slug.current" />
    </v-col>
  </v-row>
</template>

<static-query>
query {
  models: allSanityModels(order: ASC, sortBy: "title") {
    edges {
      node {
        title
        subtitle
        featuredModel
        displayImage {
          asset {
            url
          }
        }
        slug{
          current
        }
      }
    }
  }
}
</static-query>

<script>
import ModelCard from '~/components/ModelCard.vue'
export default {
  components: {
    ModelCard,
  }
}
</script>


