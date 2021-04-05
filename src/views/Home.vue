<template>
  <div>
    <Header/>
    <SearchBar/>
    <CardsContainer/>
    <h3>{{ store.state.teste }}</h3>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import CardsContainer from '../components/CardsContainer'

import {inject} from 'vue'

export default {
  name: 'Home',
  components: {
    Header,
    SearchBar,CardsContainer
  },
  setup(){
    const store = inject('store')


    return{
      store
    }
  }
}
</script>
