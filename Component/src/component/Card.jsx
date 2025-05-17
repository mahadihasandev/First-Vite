import React from 'react'
import "./Card.css"

function Card({cardkey,title,text,classD}) {
  return (
    <>
    <div className='main' value={cardkey}>
    <h1 className={classD}>{title}</h1>
    <p>{text}</p>
    <button>Click</button>
    </div>
    </>
  )
}

export default Card