import React from 'react'
import { useYoutubeApi } from '../context/YoutubeApiContext'
import { useQuery } from '@tanstack/react-query';

export default function ChannelInfo({id,name}) {
  const {youtube} =  useYoutubeApi();
  const { error,isLoading,data:url} = useQuery({
    queryKey:['channel'],
    queryFn : ()=> youtube.channelImageURL(id)
  })
  
    return (
    <div>
      {url && <img src={url} alt={name}/>}
      {console.log(url)}

      <p>{name} is the chanenel name!!!!!!</p>
    </div>
  )
}
