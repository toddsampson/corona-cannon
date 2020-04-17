<template>
  <Layout>
    <Hero :title="$page.page.title" :subtitle="$page.page.subtitle" :src="$page.page.featuredImage.asset.url" />
    <v-content>
      <v-container>
        <v-row>
          <v-col class="col-12 col-md-6">
            <ProbSolution :isProblem="true" />
          </v-col>
          <v-col class="col-12 col-md-6">
            <ProbSolution :isProblem="false" />
          </v-col>
        </v-row>

        <v-row wrap>
          <v-col class="col12">
            <AboutTheProject />
          </v-col>
        </v-row>
        <v-row wrap>
          <v-col cols="12">
            <h2 class="display-3 pt-7">Featured Model</h2>
            <ModelCardFeaturedLayout />
          </v-col>
        </v-row>
        <v-row wrap>
          <v-col cols="12">
            <h2 class="display-3 pt-7">Models</h2>
            <ModelCardLayout />
            <!-- <block-content :blocks="$page.page._rawPageBody" /> -->
          </v-col>
        </v-row>
        <v-row wrap>
          <v-col class="col12">
            <HowItWorks />
          </v-col>
        </v-row>
        <v-row wrap>
          <v-col cols="12">
            <h3 class="display-2 pt-7">Created By</h3>
            <AvatarCardLayout />

            <h2 class="display-3 pt-7">Featured Model</h2>
          <ModelCardFeaturedLayout />
          </v-col>
        </v-row>
      </v-container>
    </v-content>
    <Footer />
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
import AboutTheProject from '~/components/AboutTheProject.vue'
import Hero from '~/components/Hero.vue'
import HowItWorks from '~/components/HowItWorks.vue'
import ModelCardLayout from '~/components/ModelCardLayout.vue'
import ModelCardFeaturedLayout from '~/components/ModelCardFeaturedLayout.vue'
import ProbSolution from '~/components/ProbSolution.vue'
import AvatarCardLayout from '~/components/AvatarCardLayout.vue'
import Footer from '~/components/Footer.vue'


export default {
  components: {
    AboutTheProject,
    Hero,
    HowItWorks,
    ModelCardFeaturedLayout,
    ModelCardLayout,
    ProbSolution,
    AvatarCardLayout,
    Footer,
  }
}
</script>

<style lang="scss" scoped>

</style>
