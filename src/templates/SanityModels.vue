<template>
  <Layout>
    <Hero :title="$page.model.title" :subtitle="$page.model.subtitle" :src="$page.model.displayImage.asset.url" />
    <v-content class="bodycontent">
      <v-container class="content">
        <v-row justify="center" wrap>
          <block-content :blocks="$page.model._rawDescription" />
        </v-row>
      </v-container>
    </v-content>
  </layout>
</template>

<page-query>
  query Model ($path: String!) {
    model: sanityModels (path: $path)
    {
      title
      subtitle
      _rawDescription
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
</page-query>

<script>
import Hero from '~/components/Hero.vue'

export default {
  components: {
    Hero,
  }
}
</script>
