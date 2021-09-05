import Vuex from 'vuex'
import  login from './login.js';
const createStore = () => {
  return new Vuex.Store({
    modules: {
      login,
    },
  })
}

export default createStore
