<template>
  <div>
    <input type="text" v-model="addGameTextInput" @keyup.enter="addGame()">
    <input type="button" value="Ajouter" @click="addGame()">
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
      if (this.addGameTextInput) {
        this.gamesList.push(this.addGameTextInput)
        this.addGameTextInput = ''
      }
    }
  },
  components: {
    ListItem
  } 
}
</script>

<style>
</style>
