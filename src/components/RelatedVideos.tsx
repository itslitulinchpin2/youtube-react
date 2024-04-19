import React from 'react'
import VideoCard from './VideoCard';
import { useYoutubeApi } from '../context/YoutubeApiContext'
import { useQuery } from '@tanstack/react-query';
export default function RelatedVideos({id}) {
    const {youtube} =  useYoutubeApi();
    const { error,isLoading,data:videos} = useQuery({
      queryKey:['videos'],
      queryFn : ()=> youtube.search(),
      staleTime:1000*60*5
        })
    
  return (
    <section>
    {isLoading && <p>Loading...</p>}
    {error && <p>Error!! Something is Wrong</p>}
     {videos && 
     <ul >
       {videos.map(video=><VideoCard type='list' key={video.id} video={video}/>)}
     </ul>}
       </section>
  )
}
