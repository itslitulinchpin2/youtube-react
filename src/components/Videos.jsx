import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect,useState } from 'react';
import VideoCard from './VideoCard';

import { useQuery } from '@tanstack/react-query';
import { search } from '../api/youtube';
import FakeYoutube from '../api/fakeYoutube';
export default function Videos() {
    const {keywords} = useParams();
    //console.log(keywords);
    const [jsonData, setJsonData] = useState([]);
    const {isLoading, error, data:videos} = useQuery({
      queryKey:['videos',keywords],
      queryFn : ()=>{
        const youtube = new FakeYoutube();
        return youtube.search(keywords);
    }
  }
    )
  

  return (
    <div>
       
      <p>Videos/ {keywords ? `${keywords}에 대한 검색 결과` : '검색결과없음' }</p>
     {isLoading && <p>Loading...</p>}
     {error && <p>Error!! Something is Wrong</p>}
      {videos && 
      <ul>
        {videos.map(video=><VideoCard key={video.id} video={video}/>)}
        </ul>}
     
    </div>
  )
}
