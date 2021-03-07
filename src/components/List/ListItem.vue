<template>
  <div>
      <item v-for="item in items" :key="item.id" :game="item" />
  </div>
</template>

<script>
import Item from "./Item.vue"
import { mapState } from 'vuex'

export default {
  components: { Item },
  computed: {
    ...mapState({
      items: state => state.todo.listGames
    }),
  }
}
</script>

<style>

</style>