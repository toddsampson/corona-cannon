<template>
  <v-card min-height="100%" style="margin-top: 25px;">
    <div class="v-list-item--doc v-list-item">
      <v-avatar :class="`v-list-item__avatar ${iconColor}`" style="height: 40px; min-width: 40px; width: 40px;">
        <v-icon :class="`v-icon notranslate mdi ${icon} theme--dark`"></v-icon>
      </v-avatar>
      <div class="v-list-item__content">
        <div class="v-list-item__title"><span class="display-1">{{ title }}</span></div>
        <div class="v-list-item__subtitle" style="white-space: normal;"><span class="headline">{{ bodyText }}</span></div>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      title: "The Solution",
      bodyText: "An easy to build, open source UV sterilizer that anyone can build using off-the-shelf parts. We call it the Corona Cannon.",
      icon: "mdi-head-lightbulb-outline",
      iconColor: "green",
    }
  },
  props: ['isProblem'],
  mounted() {
    if (this.isProblem === true) {
      this.title = "The Problem";
      this.bodyText = "The rapid spread of the coronavirus has caused a shortage of masks that keep the medical professionals on the front lines safe.";
      this.icon = "mdi-alert";
      this.iconColor = "red";
    }
  }
}
</script>
