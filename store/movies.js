import axios from 'axios'

export const state = () => ({
    inTheSpotlight: []
})

export const getters = {
    getCounter(state) {
        return state.counter
    }
}

export const mutations = {
    add(state, playload) {
        state[playload.listKey].push(playload.item)
    },
    remove(state, playload) {
        state[playload.listKey].splice(state[playload.listKey].indexOf(state[playload.listKey].find(item => { return item.id === playload.itemId })), 1)
    }
}

export const actions = {
    async fetchMoviesInTheSpotlight({ state }) {
        let datas = []
        await axios.get('https://api.nuxtjs.dev/posts',)
            .then(response => {
                datas = response.data
            })

        return datas;
    }
}