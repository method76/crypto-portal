import shortid from 'shortid'
import Vue from 'vue'

export const state = () => ({
  title: '',
  author: '',
  contents: ''
})

export const mutations = {
  set (state, msg) {
    state.contents = msg
  },
}
