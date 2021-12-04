
<template>
 <div>
   <h1>{{cardsview}}</h1>
         <h1>{{titleview}}</h1>
      <h1>{{events}}</h1>

   <v-btn @click="fetch()">Fetch Something</v-btn>
    <v-row>
      <v-col
        v-for="(data,n) in MyCards"
        :key="n"
        cols="12"
        sm="6"
        md="4"
        xs="2"
      >
        <MyCard :cardid="n"></MyCard>
        
      </v-col>
    </v-row>

    <h1></h1>

  </div>

</template>

<script>
// @ is an alias to /src
import MyCard from '../components/MyCard'

export default {
 name: 'Card',
 data(){
   return{
     titleview: this.$store.state.title,
   }
 },

computed:{
  myCards(){
    return this.$store.state.cards
  },
  title(){
    return this.$store.getters.bigTitle
  },
  eventsTrue(){
    return this.$store.state.events
  },
},
  name: 'Card',
  components: {
    MyCard,
  },
  methods:{
    fetch(){
      console.log('as')
    }
  },
  async  created(){
    this.$store.dispatch("fetchEvents")
      // axias.get('https://agenda-balaguer.herokuapp.com/api/event')
      // .then(res=>{console.log(res.data.values)
      // this.events=res.dta.values
      //   })
      // .catch(err=>{console.log(err)})
    }
  }
</script>
