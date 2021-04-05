<template>
  <form class="search__form">
      <input type="text" class="search__input" placeholder="Search Here..." v-model="store.state.gameName">
      <button class="search__btn" @click.prevent="store.actions.searchGames()"><img src="@/assets/icons/search.svg" alt="search button" ></button>
  </form>
</template>

<script>
import { inject } from 'vue'
export default {
  setup(){
    const store = inject('store')
    return{ store }
  }
}
</script>

<style scoped>
.search__form{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4rem;
  opacity: 0.8;
  transition: all 0.3s ease;
}
.search__form:hover{
  opacity: 1;
}
.search__input{
  height: 80%;
  width: 40%;
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  outline: none;
  border: none;
  font-size: 18px;
  padding: 0 1rem;
}
.search__input:focus{
  border: 1px solid var(--purple);
  box-shadow: 0px 0px 5px var(--purple);
}
.search__btn{
  background-color: var(--purple);
  border: none;
  height: 80%;
  width: 10%;
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  outline: none;
  transition: all 0.3s ease;
} 
.search__btn img{
  color: var(--white);
  height: 50%;
}
.search__btn:hover{
  background-color: var(--blue);
  box-shadow: 0px 0px 5px var(--blue-dark);
  cursor: pointer;
}
.search__btn:active{
  background-color: white;
  border: 1px solid var(--purple)
}
</style>