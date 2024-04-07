import React from 'react'
import { useParams } from 'react-router-dom'
export default function Videos() {
    const {keywords} = useParams();
    console.log(keywords);
    
  return (
    <div>
        <h1>골때리네</h1>
      <p>Videos/ {keywords ? `${keywords}에 대한 검색 결과` : '검색결과없음' }</p>
     
    </div>
  )
}
