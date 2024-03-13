
import './App.css';
import React, { useState } from 'react'
import JSONDATA from './data.json'

const App = () => {

  const [searchTerm,setSearchTerm] = useState("")
  return (
    <div className='app' >
      <div className='user' >
        
        <input type='Text' placeholder='Search Here ' onChange ={(event) => setSearchTerm(event.target.value) } />
        
        {/* {console.log(event.target.value)} */}
       {JSONDATA.filter((val) => {
        if(searchTerm ==="")
        {return (val);}
        else if(val.first_name.toLowerCase().includes(searchTerm.toLowerCase()))
        {return (val);}
       }).map((val,key) => {
        return <div className='data'><p> {val.first_name}</p> </div>
       })}
      </div>
    </div>
  )
}

export default App;

