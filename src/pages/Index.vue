<template>
  <Layout>
    <Hero :title="$page.page.title" :subtitle="$page.page.subtitle" :src="$page.page.featuredImage.asset.url" />
    <v-content>
      <v-container>
        <v-row wrap>
          <v-col cols="12">
            <h2 class="display-3 pt-7">Featured Models</h2>
            <ModelCardLayout />

            <block-content :blocks="$page.page._rawPageBody" />
          </v-col>
        </v-row>
        <v-row>
          <v-col class="col-12 col-md-6">
          <v-card min-height="100%">
            <a href="/en/getting-started/pre-made-layouts/" class="v-list-item--doc v-list-item v-list-item--link theme--light primary--text" tabindex="0">
              <v-avatar class="v-list-item__avatar red" style="height: 40px; min-width: 40px; width: 40px;">
                <v-icon aria-hidden="true" class="v-icon notranslate mdi mdi-alert theme--dark"></v-icon>
              </v-avatar>
              <div class="v-list-item__content">
                <div class="v-list-item__title"><strong>The Problem</strong></div>
                <div class="v-list-item__subtitle" style="white-space: normal;"><span>The rapid spread of the coronavirus has caused a shortage of masks that keep the medial professionals on the front lines safe.</span></div>
              </div>
              <div class="v-list-item__action">
                <v-icon aria-hidden="true" class="notranslate mdi mdi-arrow-right theme--light"></v-icon>
              </div>
            </a>
          </v-card>
          </v-col>
          <v-col class="col-12 col-md-6">
          <v-card min-height="100%">
            <a href="/en/getting-started/pre-made-layouts/" class="v-list-item--doc v-list-item v-list-item--link theme--light primary--text" tabindex="0">
              <v-avatar class="v-list-item__avatar green" style="height: 40px; min-width: 40px; width: 40px;">
                <v-icon aria-hidden="true" class="v-icon notranslate mdi mdi-head-lightbulb-outline theme--dark"></v-icon>
              </v-avatar>
              <div class="v-list-item__content">
                <div class="v-list-item__title"><span>The Solution</span></div>
                <div class="v-list-item__subtitle" style="white-space: normal;"><span>The Corona Cannon can be built in a large number of form factors for different uses. In all cases, the designs strove to</span></div>
              </div>
              <div class="v-list-item__action">
                <v-icon aria-hidden="true" class="notranslate mdi mdi-arrow-right theme--light"></v-icon>
              </div>
            </a>
          </v-card>
          </v-col>

        </v-row>
        <v-row wrap>

        </v-row>
      </v-container>
    </v-content>
  </Layout>
</template>

<page-query>
  query {
    page: sanityPage (id: "d073484d-0f1f-42e7-88f3-02cdb778bd80")
    {
      id
      title
      subtitle
      featuredImage {
        asset {
          url
        }
      }
    	_rawPageBody
      slug {
        current
      }
    }
  }

</page-query>

<script>
import Hero from '~/components/Hero.vue'
import ModelCardLayout from '~/components/ModelCardLayout.vue'

export default {
  components: {
    Hero,
    ModelCardLayout,
  }
}
</script>

<style lang="scss" scoped>

</style>
