<template>
  <v-card>
    <v-img :src="`https://cdn.sanity.io/${processStep.stepImage.asset.path}?w=600`" />
    <v-card-title>{{ processStep.name }}</v-card-title>
  </v-card>
</template>

<script>
export default {
  props: ['processStep']
}
</script>
