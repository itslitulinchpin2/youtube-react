import axios from 'axios';

export default class FakeYoutube{
    constructor(){

    }
    
    async search(keywords){

        return keywords ? this.#searchByKeyWord() : this.#mostPopular();
       
       
      }

      //MOCK data에서만 사용하므로 매개변수 keywords 필요없음
      async  #searchByKeyWord(){
        return axios.get(`/videos/keyword.json`)
        .then(res=>res.data.items)
        .then(items=> items.map((item)=>({...item,id:item.id.videoId})))
      }

      async #mostPopular(){
        return axios.get('/videos/trend.json')
        .then(res=>res.data.items)
      }
}