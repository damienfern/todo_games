<template>
  <p>
    {{ game.name }}
    <input type="button" value="Supprimer" @click="deleteMeFromList(game)" />
    <input type="checkbox" :value="game.done" @input="changeGameStatus(game)"/>
    </p>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    game: {
      type: Object,
      required: true
    }
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