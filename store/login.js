export const state = () => ({
  userInfo : {
    accessToken : '',
    refreshToken : '',
    fullName : '',
    userName : '',
    id : '0',
  }
})

export const getters = {
  getUser(state) {
    return state.userInfo
  },
}

export const mutations = {
  setUser(state, user) {
    state.userInfo = user
  },
}

export const actions = {
  saveUserInfo({ commit },payload) {
    commit('setUser', {
      accessToken: payload.accessToken,
      refreshToken: payload.refreshToken,
      fullName: payload.fullName,
      userName: payload.userName,
      id: payload.id,
    })
  },
}
export default {
  state,
  getters,
  mutations,
  actions,
}
