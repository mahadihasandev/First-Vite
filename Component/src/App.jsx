import React, { useState } from 'react'
import Card from './component/Card'
import Display from './component/Display'

function App() {
  let arrObj=[
    { 
      title:"this is the title",
      text:"this is a paragraph",
      classD:"classOne",
      type:"true"
    },
    { 
      title:"this is the title",
      text:"this is a paragraph",
      classD:"classOne",
      type:"false"
    },
    { 
      title:"this is the title",
      text:"this is a paragraph",
      classD:"classOne",
      type:"true"
    },
    { 
      title:"this is the title",
      text:"this is a paragraph",
      classD:"classOne",
      type:"false"
    },
    { 
      title:"this is the title",
      text:"this is a paragraph",
      classD:"classOne",
      type:"true"
    },
    { 
      title:"this is the title",
      text:"this is a paragraph",
      classD:"classOne",
      type:"true"
    },
     { 
      title:"this is the title",
      text:"this is a paragraph",
      classD:"classOne",
      type:"true"
    },
    { 
      title:"this is the title",
      text:"this is a paragraph",
      classD:"classOne",
      type:"false"
    },
    { 
      title:"this is the title",
      text:"this is a paragraph",
      classD:"classOne",
      type:"true"
    },
    { 
      title:"this is the title",
      text:"this is a paragraph",
      classD:"classOne",
      type:"true"
    },
    { 
      title:"this is the title",
      text:"this is a paragraph",
      classD:"classOne",
      type:"falsea"
    },
    { 
      title:"this is the title",
      text:"this is a paragraph",
      classD:"classOne",
      type:"true"
    },
    ]

   let [texts,setText]=useState("")
    
  return (
    <>
    <Display texts={texts}/>
    <div className='appMap'>
   {arrObj.map((item,index)=>{
    return <Card setText={setText} cardkey={index} title={item.title} text={item.text} classD={item.classD} type={item.type}/>
    
   })}
   
    </div>
    
    </>
  )
}

export default App