import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import DefaultLayout from '~/layouts/Default.vue'
import BlockContent from 'sanity-blocks-vue-component'

export default function (Vue, { appOptions, router, head, isClient }) {
  head.link.push({
    rel: 'stylesheet',
    href: 'https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css',
  });
  
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900',
  });

  head.meta.push({
    property: 'og:image',
    content: 'https://cdn.sanity.io/images/gqr3e19k/production/8e4cbd6028c62246c3539011f85090e7825ae969-2000x1333.jpg?w=1200',
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
