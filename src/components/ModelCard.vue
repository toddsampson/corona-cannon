<template>
  <v-card class="modelcard" :to="`/models/${slug}`">
    <v-img
      :src="src"
      class="white--text align-end"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
      height="300px">
      <v-card-title v-text="title" class="display-2"></v-card-title>
    </v-img>
    <p class="headline">{{ subtitle }}</p>
  </v-card>
</template>

<script>
export default {
  props: [
    'title',
    'subtitle',
    'src',
    'slug',
  ]
}
</script>

<style lang="scss" scoped>
.modelcard {
  margin: 0 0 40px 0;
}
</style>
