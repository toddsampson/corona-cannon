<template>
<v-card
  class="modelcard" :to="`/models/${slug}`"
  >
    <v-img
      class="white--text align-end"
      height="300px"
      :src="src"
    >
      <v-card-title class="display-2">{{ title }}</v-card-title>
    </v-img>

    <v-card-text class="text--primary">
      <div class="headline">{{ subtitle }}</div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="orange"
        text
      >
        Explore
      </v-btn>
    </v-card-actions>
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
