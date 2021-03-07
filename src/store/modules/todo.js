export default {
  state: () => ({
    listGames: []
  }),
  mutations: {
    addGame (state, game) {
      state.listGames.push(game)
    }
  },
  actions: {
    addGameToList (context, game) {
      context.commit('addGame', game)
    }
  }
}