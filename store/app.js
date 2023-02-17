export const state = () => ({

})

export const actions = {
  setGlobalSwiper({commit}, {payload}) {
    commit('setSwiper', payload)
  },
  updateActiveIndex({commit}, {payload}) {
    commit('setActiveIndex', payload)
  }
}

export const mutations = {
  setSwiper(state, data) {
    state.swiper = data.swiper
  },
  setActiveIndex(state, data) {
    state.activeIndex = data.index
  }
}

export const getters = {
  swiper(state) {
    return state.swiper
  },
  activeIndex(state) {
    return state.swiper ? state.swiper.activeIndex : 0
  }
}
