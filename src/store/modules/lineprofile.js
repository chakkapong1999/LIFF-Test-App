const state = {
  userId: '',
  displayName: '',
  email: '',
  pictureUrl: '',
  friendFlag: false
}
const getters = {
  getUserId: (state) => {
    return state.userId
  },
  getDisplayName: (state) => {
    return state.displayName
  },
  getEmail: (state) => {
    return state.email
  },
  getPictureUrl: (state) => {
    return state.pictureUrl
  }
}
const actions = {
  setUserId: ({ commit }, payload) => {
    commit('SET_USER_ID', payload)
  },
  setDisplayName: ({ commit }, payload) => {
    commit('SET_DISPLAY_NAME', payload)
  },
  setEmail: ({ commit }, payload) => {
    commit('SET_EMAIL', payload)
  },
  setPictureUrl: ({ commit }, payload) => {
    commit('SET_PICTURE_URL', payload)
  },
  setFriendFlag: ({ commit }, payload) => {
    commit('SET_FRIEND_FLAG', payload)
  }
}
const mutations = {
  SET_USER_ID (state, payload) {
    state.userId = payload
  },
  SET_DISPLAY_NAME (state, payload) {
    state.displayName = payload
  },
  SET_EMAIL (state, payload) {
    state.email = payload
  },
  SET_PICTURE_URL (state, payload) {
    state.pictureUrl = payload
  },
  SET_FRIEND_FLAG (state, payload) {
    state.friendFlag = payload
  }
}
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
