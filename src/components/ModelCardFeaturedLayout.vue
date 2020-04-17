<template>
  <v-row>
    <v-col v-for="(model, index) in $static.models.edges" :key="index" class="col-12">
      <ModelCard :src="model.node.displayImage.asset.url" :title="model.node.title" :subtitle="model.node.subtitle" :slug="model.node.slug.current" />
    </v-col>
  </v-row>
</template>

<static-query>
query {
  models: allSanityModels(filter:{featuredModel:  {eq: true}}, order: ASC, sortBy: "title") {
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
        productParts {
          name
          quantity
          costPerItem
          urls
        }
        processSteps {
          name
          _rawDescription
          stepImage {
            asset {
              path
            }
          }
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


