<template>
  <Layout>
    <v-content class="bodycontent">
      <v-container class="content">
        <v-row justify="center" wrap>
          <h1>{{ $page.model.name }}</h1>
          <block-content :blocks="$page.model._rawBlurb" />
        </v-row>
      </v-container>
  </layout>
</template>

<page-query>
  query Model ($path: String!) {
    model: sanityModel (path: $path)
    {
      id
      name
      _rawBlurb
      slug {
        current
      }
    }
  }
</page-query>
