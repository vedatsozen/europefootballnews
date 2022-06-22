import React from 'react'

export default function News({title, newsdetail}) {
  return (
    <div id='newscard'>
        
    <h1 className='news'>{title}</h1>
        
    <p>{newsdetail}</p>

    <a href="detailpage.js">Click to see details of news</a>
        
    </div>
  )
}
