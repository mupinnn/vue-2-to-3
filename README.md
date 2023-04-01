# Kompatibilitas Versi Pada Vue.js

Repositori ini dibuat untuk mencoba kompatibilitas fitur antara Vue 2 (`2.6` - `2.7`) dengan Vue 3.

## Referensi
- [Panduang Migrasi](https://v3-migration.vuejs.org/)
- [Daftar _Breaking Changes_](https://v3-migration.vuejs.org/breaking-changes/)

## Catatan

Dalam percobaan ini, saya menemukan bahwa Vue 3 masih mendukung penggunaan [Options API](https://vuejs.org/api/options-state.html) secara baik disamping fitur barunya; yaitu [Composition API](https://vuejs.org/api/composition-api-setup.html).

Saya mencoba menggabungkan kedua fitur tersebut seperti pada file [`App.vue` - Vue 3 ini](./apps/vue-3/src/App.vue) yang menggunakan _Composition API_ dan [`TodoForm.vue` - Vue 3 ini](./apps/vue-3/src/components/TodoForm.vue) yang masih menggunakan _Options API_ lawasnya. Begitu juga pada versi `2.7` yang mendapat _backport_ fitur _Composition API_. Selagi memperhatikan _breaking changes_ dan panduan migrasi dengan baik, saya kira membuat komponen yang mendukung ketiga versi Vue tersebut mungkin saja terjadi dan dapat didukung dengan pustaka seperti [vue-demi](https://github.com/vueuse/vue-demi/) untuk menjaga kompatibilitas antar versi.