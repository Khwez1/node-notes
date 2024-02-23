import { createStore } from 'vuex'
import router from '@/router'
import axios from 'axios'
axios.defaults.withCredentials = true

const baseUrl = 'http://localhost:6969'

export default createStore({
  state: {
    friends: null,
    loggedIn: false
  },
  getters: {
  },
  mutations: {
    setFriends(state, value) {
      state.friends = value
    },
    setLogged(state,payload){
      state.loggedIn = payload
    }
  },
  actions: {
    async getFriends({ commit }) {
      try {
        let { data } = await axios.get(baseUrl + '/friends')
        commit('setFriends', data)
      } catch (error) {
        console.error('Error getting friends:', error)
      }
    },
    async postFriends({ dispatch }, addFriend) {
      try {
        const response = await axios.post(baseUrl + '/friends', addFriend)
        console.log(response.data)
        // If you need to update friends after posting, you can dispatch getFriends
        dispatch('getFriends')
      } catch (error) {
        console.error('Error posting friend:', error)
      }
    },
    async deleteFriend({commit}, name) {
      console.log(name)
      await axios.delete(baseUrl + '/friends/' + name)
      window.location.reload()
    },
    async editFriend ({commit}, update){
      await axios.patch(baseUrl+'/friends/'+ update.id, update)
      window.location.reload()
    },
    async registerUser({commit}, newUser){
      console.log(newUser);
      let {data} = await axios.post(baseUrl + '/users', newUser)
      alert(data.msg)
      window.location.reload()
    },
    async loginUser({commit}, currentUser){
      let {data} = await axios.post(baseUrl + '/login', currentUser)
      $cookies.set('jwt', data.token)
      alert(data.msg)
      router.push('/')
      window.location.reload()
      commit('setLogged', true)
      // window.location.reload()
    },
    async logOut(context){
      let cookies = $cookies.keys()
      console.log(cookies)
      $cookies.remove('jwt')
      window.location.reload()
      // let { data } = await axios.delete(baseUrl + '/logout')
      // alert(data.msg)
    }
  },
  modules: {
  }
})
