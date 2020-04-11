<template>
  <v-parallax
    dark
    :src="src"
    height="640"
  >
    <v-row
      align="center"
      justify="center"
    >
      <v-col class="text-center" cols="12">
        <h1 class="display-4 font-weight-thin mb-4">{{ title }}</h1>
        <div style="max-width: 700px; margin:0 auto;">
          <h4 class="subheading display-1" style="line-height: 1.5em;">{{ subtitle }}</h4>
        </div>
      </v-col>
    </v-row>
  </v-parallax>
</template>

<script>
export default {
  props: [
    'title',
    'subtitle',
    'src',
  ]
}
</script>
