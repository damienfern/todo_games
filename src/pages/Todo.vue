<template>
  <div>
    <input type="text" v-model="addGameTextInput" @keyup.enter="addGame()">
    <list-item :items="gamesList" />
  </div>
</template>

<script>
import ListItem from '../components/List/ListItem.vue'

export default {
  data () {
    return {
      addGameTextInput: '',
      gamesList : ['Uno', 'Dos']
    }
  },
  methods: {
    addGame () {
      this.gamesList.push(this.addGameTextInput)
      this.addGameTextInput = ''
    }
  },
  components: {
    ListItem
  } 
}
</script>

<style>
</style>
