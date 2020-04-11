import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import DefaultLayout from '~/layouts/Default.vue'
import BlockContent from 'sanity-blocks-vue-component'

export default function (Vue, { appOptions, router, head, isClient }) {
  head.link.push({
    rel: 'stylesheet',
    href: 'https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css',
  })
  
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900',
  });
  
  const opts = {
    // icons: { iconfont: 'md' },
    // theme: { dark: true },
  }
  Vue.use(Vuetify)
  
  appOptions.vuetify = new Vuetify(opts);

  Vue.component('Layout', DefaultLayout)
  Vue.component('block-content', BlockContent);
}
