export default {
  namespaced: true,
  state: () => ({
    listGames: []
  }),
  mutations: {
    addGame(state, game) {
      game.done = false
      state.listGames.push(game)
    },
    deleteGame(state, game) {
      const updatedList = state.listGames.filter(item => item.id !== game.id)
      state.listGames = updatedList
    },
    changeGameStatus(state, game) {
      const element = state.listGames.filter(item => item.id === game.id)[0]
      element.done = !element.done
    }
  },
  actions: {
    addGameToList (context, game) {
      context.commit('addGame', game)
    },
    deleteGameFromList(context, game) {
      context.commit('deleteGame', game)
    },
    changeGameStatus(context, game) {
      context.commit('changeGameStatus', game)
    }
  }
}