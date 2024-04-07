import axios from 'axios';

export async function search(keywords){
    return axios.get(`/videos/${keywords ? 'trend' : 'keyword'}.json`)
    .then(res=>res.data.items)
   
  }