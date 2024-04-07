import React from 'react'
import { format, render, cancel, register } from 'timeago.js';
import * as date from '../util/date.js'
export default function VideoCard({video}) {
    const {title,thumbnails,channelTitle,publishedAt} = video.snippet;

    return(<li>
        <img className='w-full' src={thumbnails.medium.url} alt={title}/>
        <div>
            <p className='font-semibold my-2 line-clamp-2'>{title}</p>
            <p className='text-sm opacity-80'>{channelTitle}</p>
            <p className='text-sm opacity-80'>{date.formatAgo(publishedAt)}</p>
        </div>
    </li>)

}
