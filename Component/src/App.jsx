import { useState } from 'react';
import Card from './component/Card';
import Display from './component/Display';
import {arrObj} from './arrayDB';

function App() {

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
  );
};

export default App;