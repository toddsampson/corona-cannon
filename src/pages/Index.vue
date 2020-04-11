<template>
  <Layout>
    <v-content>
      <v-container>
        <v-row wrap>
          <v-col cols="12">
            <block-content :blocks="$page.page._rawPageBody" />
          </v-col>
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
      name
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
export default {
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
