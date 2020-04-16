<template>
  <Layout>
    <Hero :title="$page.page.title" :subtitle="$page.page.subtitle" :src="$page.page.featuredImage.asset.url" />
    <v-content>
      <v-container>
        <v-row>
          <v-col class="col-12">
          <v-card min-height="100%">
            <a href="/en/getting-started/pre-made-layouts/" class="v-list-item--doc v-list-item v-list-item--link theme--light primary--text" tabindex="0">
              <v-avatar class="v-list-item__avatar red" style="height: 40px; min-width: 40px; width: 40px;">
                <v-icon aria-hidden="true" class="v-icon notranslate mdi mdi-alert theme--dark"></v-icon>
              </v-avatar>
              <div class="v-list-item__content">
                <div class="v-list-item__title dont"><strong>Warning - Use at your own risk</strong></div>
                <div class="v-list-item__subtitle" style="white-space: normal;"><span>254nm UV is dangerous.  UV radiation (UVR) used in most germicidal bulbs is harmful to both skin and eyes, and germicidal bulbs should not be used in any fixture or application that was not designed specifically to prevent exposure to humans or animals.  This Corona Cannon project is provided as is.  By using this site and information on it, you agree that you are 100% responsible for any and all damage to you or everything (humans, animals, things) in your surroundings.  <a href="https://lessonslearned.lbl.gov/Docs/2650/Germicidal%20lamp%20safety%20tips.pdf">Read more about UV safety</a>.</span></div>
              </div>
            </a>
          </v-card>
          </v-col>
        </v-row>
        <v-row wrap>
          <v-col cols="12">
            <h2 class="display-3 pt-7">Featured Models</h2>
            <ModelCardLayout />

            <block-content :blocks="$page.page._rawPageBody" />
          </v-col>
        </v-row>
        <v-row>
          <v-col class="col-12">
          <v-card min-height="100%">
            <a href="/en/getting-started/pre-made-layouts/" class="v-list-item--doc v-list-item v-list-item--link theme--light primary--text" tabindex="0">
              <v-avatar class="v-list-item__avatar red" style="height: 40px; min-width: 40px; width: 40px;">
                <v-icon aria-hidden="true" class="v-icon notranslate mdi mdi-bug theme--dark"></v-icon>
              </v-avatar>
              <div class="v-list-item__content">
                <div class="v-list-item__title" style="font-size: 140% !important;"><strong>The Problem</strong></div>
                <div class="v-list-item__subtitle" style="white-space: normal;font-size: 130% !important;"><span>The rapid spread of the coronavirus has caused a shortage of masks that keep the medial professionals on the front lines safe.</span></div>
              </div>
            </a>
          </v-card>
          </v-col>
          <v-col class="col-12">
          <v-card min-height="100%">
            <a href="/en/getting-started/pre-made-layouts/" class="v-list-item--doc v-list-item v-list-item--link theme--light primary--text" tabindex="0">
              <v-avatar class="v-list-item__avatar green" style="height: 40px; min-width: 40px; width: 40px;">
                <v-icon aria-hidden="true" class="v-icon notranslate mdi mdi-head-lightbulb-outline theme--dark"></v-icon>
              </v-avatar>
              <div class="v-list-item__content">
                <div class="v-list-item__title" style="font-size: 140% !important;"><strong>The Solution</strong></div>
                <div class="v-list-item__subtitle" style="white-space: normal;font-size: 130% !important;"><span>The Corona Cannon can be built in a large number of form factors for different uses. In all cases, the designs strove to:</span>

                  <ul class="mt-1">
                    <li>Use materials available at all major home goods stores (outside the UV lights themselves which must usually be ordered online)</li>
                    <li>Be able to be built in less than day</li>
                    <li>Be able to be built for under $100</li>
                  </ul>
                  </div>
              </div>
            </a>
          </v-card>
          </v-col>
        </v-row>



        <v-row wrap>
          <v-col cols="12">
            <h4 class="display-2 pt-7">How does it work?</h4>

            <p><strong>Update: We are awaiting test results from ___________</strong></p>

<img src="https://health.mil/-/media/Images/MHS/Photos/CDC-coronavirus.ashx?h=407&la=en&mw=720&w=720&hash=3DB38BA5F52E762419150762BFCF1CD044B01A29F38A7DFCB338A9CB6E2FC029">
<img src="https://upload.wikimedia.org/wikipedia/commons/1/1d/%D0%A4%D0%B8%D0%BB%D1%8C%D1%82%D1%80%D1%83%D1%8E%D1%89%D0%B0%D1%8F_%D0%BF%D0%BE%D0%BB%D1%83%D0%BC%D0%B0%D1%81%D0%BA%D0%B0_3%D0%9C_8210.jpg">
<img src="https://cdn.pixabay.com/photo/2020/03/28/15/28/coronavirus-4977460_1280.png">
<img src="https://p0.pxfuel.com/preview/742/944/24/dr-costume-treatment-an-injection.jpg">
            <p>Please use caution and read out warning above.  You are using at your own risk.</p>

// NOTE: Would be awesome to show exploded diagrams and ray-traced reflection images. If we did the files parametric, we could include the actual Fusion360 files themselves.

Corona Cannon Models

Micro -- 12" cube designed to let doctors sterilize their own mask safely in < 90 seconds

Avram -- larger corugated metal clam-style design for safely treating several objects at once

Miller -- tube designed for fast throughput

Sampson -- larger wooden design for safely treating several medium-sized objects at once

          </v-col>
        </v-row>



        <v-row wrap>
          <v-col cols="12">
            <h3 class="display-2 pt-7">Created By</h3>
            <AvatarCardLayout />

          </v-col>
        </v-row>


        <v-row wrap>
          <v-col cols="12">
            <h3 class="display-1 pt-7">Special Thanks</h3>
            <p>Special thanks to Fred, David, John, Eric, Mike/Orlando Health...</p>

          </v-col>
        </v-row>

        <v-row wrap>


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
import Hero from '~/components/Hero.vue'
import ModelCardLayout from '~/components/ModelCardLayout.vue'
import AvatarCardLayout from '~/components/AvatarCardLayout.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Hero,
    ModelCardLayout,
    AvatarCardLayout,
    Footer,
  }
}
</script>

<style lang="scss" scoped>

</style>
