<template>
  <div>
      <item v-for="item in items" :key="item.id" :game="item" />
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