import React from 'react'
import Card from './component/Card'

function App() {
  let arrObj=[
    { 
      title:"this is the title",
      text:"this is a paragraph",
      classD:"classOne"
    },
    { 
      title:"this is the title",
      text:"this is a paragraph",
      classD:"classOne"
    },
    { 
      title:"this is the title",
      text:"this is a paragraph",
      classD:"classOne"
    },
    { 
      title:"this is the title",
      text:"this is a paragraph",
      classD:"classOne"
    },
    { 
      title:"this is the title",
      text:"this is a paragraph",
      classD:"classOne"
    },
    { 
      title:"this is the title",
      text:"this is a paragraph",
      classD:"classOne"
    },
     { 
      title:"this is the title",
      text:"this is a paragraph",
      classD:"classOne"
    },
    { 
      title:"this is the title",
      text:"this is a paragraph",
      classD:"classOne"
    },
    { 
      title:"this is the title",
      text:"this is a paragraph",
      classD:"classOne"
    },
    { 
      title:"this is the title",
      text:"this is a paragraph",
      classD:"classOne"
    },
    { 
      title:"this is the title",
      text:"this is a paragraph",
      classD:"classOne"
    },
    { 
      title:"this is the title",
      text:"this is a paragraph",
      classD:"classOne"
    },
    ]

   
    
  return (
    <>
    <div className='appMap'>
   {arrObj.map((item,index)=>{
    return <Card cardkey={index} title={item.title} text={item.text} classD={item.classD}/>
   })}
    </div>
    </>
  )
}

export default App