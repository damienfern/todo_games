export default {
  namespaced: true,
  state: () => ({
    listGames: []
  }),
  mutations: {
    addGame(state, game) {
      state.listGames.push(game)
    },
    deleteGame(state, game) {
      const updatedList = state.listGames.filter(item => item.id !== game.id)
      state.listGames = updatedList
    }
  },
  actions: {
    addGameToList (context, game) {
      context.commit('addGame', game)
    },
    deleteGameFromList(context, game) {
      context.commit('deleteGame', game)
    }
  }
}