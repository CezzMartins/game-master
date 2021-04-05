require('dotenv').config()

import axios from 'axios'
import { reactive } from 'vue'



const api_key = process.env.API_KEY_GAMES
const base_url = 'https://api.rawg.io/api/games?'

const state = reactive({
    gamesList: [],
    gameLastYear: [],
    gameName: '',    
    currentDate: '',
    lastDate: '',
    nextYearDate: '',
    
})


const actions = {
    async getGames(){
        let { data } = await axios.get(`${base_url}key=${api_key}&dates=2019-09-01,2019-09-30`)   
        return state.gamesList = data.results     
    },
    async searchGames(){
        const name = state.gameName.replace(' ', '-')
        let { data } = await axios.get(`${base_url}search=${name}&key=${api_key}`)   
        return state.gamesList = data.results 
    },

     
}

export default {
    state,
    actions,
}