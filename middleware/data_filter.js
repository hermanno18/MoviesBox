
import axios from 'axios'

export default function ({ route }) {
    return axios.get('https://api.nuxtjs.dev/posts', {
      url: route.fullPath
    }).then( response => {
        console.log('teste passé', response)
    })
  }