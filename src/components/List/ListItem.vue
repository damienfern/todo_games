<template>
  <div>
      <item v-for="(item, index) in items" :key="index" :name="item" />
  </div>
</template>

<script>
import Item from "./Item.vue"

export default {
  components: { Item },
  props: {
    items: {
      type: Array,
      default : () => ([])
    }
  }
}
</script>

<style>

</style>