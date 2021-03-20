<template>
  <v-card>
    <v-img
        contain
        height="90"
        :src="cover.url"
    >
      <template v-slot:placeholder>
        <v-progress-circular
            indeterminate
            color="grey lighten-5"
        ></v-progress-circular>
      </template>
    </v-img>
    <v-card-title>
      {{ game.name }}
      <v-chip
          style="margin-left: 5px;"
          v-show="game.done"
          color="green"
      >Terminé
      </v-chip>
    </v-card-title>
    <v-card-text>
      <p>{{ game.storyline }}</p>
      Plus de détails : <a :href="game.url">{{ game.url }}</a>
    </v-card-text>
    <v-card-actions>
      <v-btn
          color="deep-purple lighten-2"
          text
          @click="deleteMeFromList(game)"
      >
        Supprimer
      </v-btn>
      <v-btn
          color="deep-purple lighten-2"
          text
          @click="changeGameStatus(game)"
      >
        <span v-if="!game.done"><v-icon>mdi-check</v-icon> Marquer comme terminé </span>
        <span v-else><v-icon>mdi-close</v-icon> Annuler </span>
      </v-btn>
      <!-- <v-checkbox
        :label="game.done ? 'Fait' : 'A faire'"
        @change="changeGameStatus(game)"
        :value="game.done"
      ></v-checkbox> -->
    </v-card-actions>
  </v-card>
</template>

<script>
import {mapActions} from 'vuex'
import igdbApi from '@/api/igdb'

export default {
  props: {
    game: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      cover: {
        url: null
      }
    }
  },
  created() {
    const that = this
    igdbApi.getUrlCoverByCoverID(this.game.cover)
        .then((response) => {
          that.cover = {
            url: 'https://' + response.data[0].url
          }
        })
  },
  methods: {
    ...mapActions({
      // `mapActions` also supports payloads:
      deleteMeFromList: 'todo/deleteGameFromList',
      changeGameStatus: 'todo/changeGameStatus'
    }),
  }
}
</script>

<style>

</style>