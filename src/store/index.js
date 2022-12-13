import Vue from 'vue'
import Vuex from 'vuex'
import {
  lineprofile
} from './modules'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    lineprofile
  }
})
