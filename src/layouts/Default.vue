<template>
  <v-app class="layout">
    <!-- <v-app-bar
    app
    dark
    extended
    extension-height="200vh"
    src="https://cdn.sanity.io/images/gqr3e19k/production/8e4cbd6028c62246c3539011f85090e7825ae969-2000x1333.jpg"
    shrink-on-scroll>
      <v-toolbar-title>{{ $static.metadata.siteName }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-tabs right       style="background: none;"
>
        <v-tab>
          <g-link class="nav__link" to="/">Home</g-link>
        </v-tab>
        <v-tab>
          <g-link class="nav__link" to="/about/">About</g-link>
        </v-tab>
      </v-tabs>
    </v-app-bar> -->
        <slot />
  </v-app>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>


<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

</style>
