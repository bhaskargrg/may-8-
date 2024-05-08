import React, { useState } from 'react'
import List from './List'
import data from './data'


function App() {
  const [datas, setDatas] = useState(data);
  const [isListVisible, setListVisible] = useState(true); 
  const handleClear=()=>{
     if (datas.length===0) {
      setDatas(data);
      setListVisible(true);
     } else {
      setDatas([]);
      setListVisible(false);
     }
  }
  return (
    <div>
      <section className="container">
        <h3> {datas.length > 0?<h3 style={{display:'inline-block'}}>{datas.length}</h3>:<h1>0</h1>} birthdays today</h3>
        <div>
          <List data={datas}/>
          <button onClick={handleClear}>{datas.length>0? <span>Remove List</span>:<span>Add List</span>}</button>
        
        </div>
      </section>
    </div>
  )
}

export default App