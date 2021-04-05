<template>
    <div class="cards__container">
        <CardGame v-for="game in store.state.gamesList" 
                :key="game.id" 
                :name="game.name" 
                :image="game.background_image"
                :released="game.released"/>
        
    </div>
</template>

<script>
import CardGame from './CardGame'
import {inject} from 'vue'

export default {
    components:{
        CardGame
    },
    setup(){
        const store = inject('store')
        return{
            store
        }
    }
}
</script>

<style scoped>
.cards__container{
    /* border: 1px solid red; */
    width: 90%;
    margin: 2rem auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
   
    gap: 1.25rem;
}
</style>