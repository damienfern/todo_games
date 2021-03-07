<template>
  <div>
    <search />
    <list-item />
  </div>
</template>

<script>
import ListItem from '../components/List/ListItem.vue'
import Search from '../components/Search.vue'

export default { 
  components: {
    ListItem,
    Search
  } 
}
</script>

<style>
</style>
