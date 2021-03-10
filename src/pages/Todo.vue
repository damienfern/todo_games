<template>
  <div>
    <search />
    <h1>Ma liste</h1>
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
