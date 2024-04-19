import axios from 'axios';

export default class FakeYoutubeClient{


      async  search(){
        console.log('fake search');
        return axios.get(`/videos/keyword.json`)
        // .then(res=>res.data.items)
        // .then(items=> items.map((item)=>({...item,id:item.id.videoId})))
      }

      async videos(){
        return axios.get('/videos/trend.json')
        //.then(res=>res.data.items)
      }
      async channels(){
        return axios.get('/videos/channel.json')
        //.then(res=>res.data.items)
      }
}