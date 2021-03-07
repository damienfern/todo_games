<template>
  <div>
    <input type="text" v-model="addGameTextInput" @keydown="searchGame()">
    <p class="search" v-for="oneGame in searchResults" :key="oneGame.id" @click="addGame(oneGame)"> {{ oneGame.name }}</p>
  </div>
</template>

<script>
import igdbApi from '../api/igdb'

let timeout = null

export default {
  data () {
    return {
      addGameTextInput: '',
      searchResults : []
    }
  },
   methods: {
    searchGame () {
      const that = this
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        if (this.addGameTextInput.length > 2) {
          console.log('SEARCHING');
          igdbApi.getGamesByName(this.addGameTextInput)
            .then((response) => {
              that.searchResults = response.data
            })
        }
      }, 800)
    },
    addGame (oneGame) {
      this.$store.dispatch('todo/addGameToList', oneGame)
      this.addGameTextInput = ''
      this.searchResults = []
    }
  },
}
</script>


<style scoped>
.search {
  background-color: blue;
  color: white;
  cursor: pointer;
}
</style>