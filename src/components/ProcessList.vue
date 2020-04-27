<template>
  <v-card>
    <v-img :src="`https://cdn.sanity.io/${processStep.stepImage.asset.path}?w=600`" />
    <v-card-title>{{ processStep.name }}</v-card-title>
    <div style="margin: 0 16px; padding-bottom: 20px;">
      <block-content :blocks="processStep._rawDescription" />
    </div>
    <!-- <v-card-text>{{ processStep._rawDescription }}</v-card-text> -->
  </v-card>
</template>

<script>
import BlockContent from 'sanity-blocks-vue-component'
export default {
  props: ['processStep']
}
</script>

<style lang="scss" scoped>
  li {
    padding-bottom: 20px;
  }
</style>
