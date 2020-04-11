import DefaultLayout from '~/layouts/Default.vue'
import BlockContent from 'sanity-blocks-vue-component'
export default function (Vue, { router, head, isClient }) {
  Vue.component('Layout', DefaultLayout)
  Vue.component('block-content', BlockContent)
}
