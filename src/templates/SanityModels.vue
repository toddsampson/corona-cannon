<template>
  <Layout>
    <Hero :title="$page.model.title" :subtitle="$page.model.subtitle" :src="$page.model.displayImage.asset.url" />
    <p class="headline" style="background-color: red; padding: 20px;">Disclaimer: Everything on this site is provided “as is” without warranty or guarantee of effectiveness. <strong>A local hospital has a prototype Corona Cannon for testing, but we are still waiting for results.</strong> Be careful, <strong>the 254nm UV-C tubes used in this project are extremely dangerous!</strong> Use proper eye protection and ensure your skin is not exposed to the UV-C light at all times. Build and use at your own risk.</p>
    <v-content class="bodycontent">
      <v-container class="content">
        <v-row wrap>
          <block-content :blocks="$page.model._rawDescription" />
        </v-row>
        <v-row wrap>
          <v-col  class="col-12 col-md-8">
            <PartsList :parts='$page.model.productParts' />
          </v-col>
          <v-col class="col-12 col-md-4">
            <ToolList :tools='$page.model.tools' />
          </v-col>
        </v-row>
        <v-row wrap>
          <v-col>
            <p class="display-1" style="margin-top: 50px;">Build Process Steps</p>
          </v-col>
        </v-row>
        <v-row>
          <v-col wrap v-for="processStep in $page.model.processSteps" :key="processStep.name" class="col-12 col-md-6">
            <ProcessList :processStep='processStep' />
          </v-col>
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
      featuredModel
      _rawDescription
      displayImage {
        asset {
          url
        }
      }
      slug{
        current
      }
      tools
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
</page-query>

<script>
import Hero from '~/components/Hero.vue'
import PartsList from '~/components/PartsList.vue'
import ProcessList from '~/components/ProcessList.vue'
import ToolList from '~/components/ToolList.vue'

export default {
  components: {
    Hero,
    PartsList,
    ProcessList,
    ToolList,
  }
}
</script>
