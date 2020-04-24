<template>
  <v-card>
    <v-img :src="`https://cdn.sanity.io/${processStep.stepImage.asset.path}?w=600`" />
    <v-card-title>{{ processStep.name }}</v-card-title>
    <block-content :blocks="processStep._rawDescription" />
    <!-- <v-card-text>{{ processStep._rawDescription }}</v-card-text> -->
  </v-card>
</template>

<script>
import BlockContent from 'sanity-blocks-vue-component'
export default {
  props: ['processStep']
}
</script>
