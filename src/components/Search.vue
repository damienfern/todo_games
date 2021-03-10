<template>
  <div>
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="addGameTextInput"
            label="Jeu à ajouter"
            @keydown="searchGame()"
            required
          ></v-text-field>
          <v-card
            v-for="oneGame in searchResults" :key="oneGame.id" @click="addGame(oneGame)"
            elevation="4"
          >
            <v-card-text>{{ oneGame.name }}</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
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


<style>
</style>