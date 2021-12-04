import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cards:[
      {title: "one", description:"Not Vegan",stars:"one"},
      {title: "two", description:"Vegan",stars:"five"},
      {title: "three", description:"Not Vegan",stars:"four"},
      {title: "four", description:"Vegan",stars:"three"},
      {title: "five", description:"Vegan",stars:"one"},
      {title: "six", description:"Not Vegan",stars:"two"},
      {title: "seven", description:"Not Vegan",stars:"five"},
      {title: "eight", description:"Not Vegan",stars:"two"}
    ],
    title:"Hello Wolrd",
    events:[],
    },
  mutations: {
    set_events(state, payload){
      state.events=payload
    }
  },
  actions: {
    fetchEvents({commit}){
      console.log("fetchEvents")
   axios.get('https://agenda-balaguer.herokuapp.com/api/event')
   .then(res=>{
      //this.events=res.data.values
      const payload = res.data.values
      console.log(payload)
        commit('set_events',payload)
        })
      .catch(err=>{console.log(err)})
    }
  },
  
  getters:{
    bigTittle(state){
      return state.title.toUpperCase()
    }
  }
})
