import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default" | "plain"
declare module "/Users/rojsiroj/Projects/VueSchool/4-nuxt-fundamental/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}