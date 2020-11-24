//Import the firebase plugin
import firebase from '@/plugins/Firebase.js'

export const state = () => ({
  idToken: '',
  user: null,
  authData: null
})

// Decalere the mutations.
export const mutations = {
  authUser (state, userData) {
    state.idToken = userData.uid
    state.user = userData
  },
  clearAuth (state) {
    state.idToken = null
    state.userId = null
  },
  authupdate(state, data){
    //Update the user authdata
    state.authData = data
  }
}

// Decalre the actions to mutate the state.
export const actions = {
  Authdata({commit}, authData){
    //Commit to the state the changes
    commit('authupdate', authData)
  },
  signup ({ commit , state}, authData) {
    
    firebase.auth().createUserWithEmailAndPassword(state.authData.email, state.authData.password).then(
      user => {
        localStorage.setItem('token', user.uid)
        commit('authUser', user)
        return user.updateProfile({
          displayName: state.authData.name
        })
      },
      error => {
        throw new Error(error)
      }
    )
  },
  login ({ commit ,state}, authData) {
    firebase.auth().signInWithEmailAndPassword(state.authData.email, state.authData.password).then(
      user => {
        console.log(user)
        localStorage.setItem('token', user.uid)
        commit('authUser', {
          token: user.uid
        })
        // router.push('/')
      },
      error => {
        alert(error)
      }
    )
  },
  logout ({ commit }) {
    commit('clearAuth')
    localStorage.removeItem('userId')
    router.replace('/')
  }
}

// Decalre the getters, easy access to the state.
export const getters = {
  user (state) {
    return state.user
  },
  ifAuthenticated (state) {
    return state.idToken !== null
  }
}
