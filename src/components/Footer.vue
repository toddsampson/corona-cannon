<template>
  <v-footer
    color="primary lighten-1"
    padless
  >
    <v-row
      justify="center"
      no-gutters
    >
      <v-btn
        v-for="link in links"
        :key="link"
        :href="link.url"
        color="white"
        text
        rounded
        class="my-2"
      >
        {{ link.name }}
      </v-btn>
      <v-col
        class="primary lighten-2 py-4 text-center white--text"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Corona Cannon</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      links: [
        {name: 'Home', url: '/'},
        {name: 'The Avram', url: '/models/avram'},
        {name: 'The Miller', url: '/models/miller'},
        {name: 'The Sampson', url: '/models/sampson'},
        {name: 'Contact Us', url: 'mailto:tsampson@cloudspace.com'},
      ],
    }),
  }
</script>