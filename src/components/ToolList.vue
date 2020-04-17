<template>
  <v-card>
    <v-card-title class="display-1">Tools Required</v-card-title>
    <v-card-text v-for="tool in tools" :key="tool">{{ tool }}</v-card-text>
  </v-card>
</template>

<script>
export default {
  props: ['tools']
}
</script>
