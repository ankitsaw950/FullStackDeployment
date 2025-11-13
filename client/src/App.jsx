import { useState } from 'react'

import './App.css'
import { useEffect } from 'react'

function App() {
  const [data, setData] = useState('')
  useEffect(()=>{
   fetch("http://3.238.180.195:5000/api/message")
    .then((res)=>res.json())
    .then((data)=> setData(data.message))
  },[])

  return (
    <>
      <h1>This is the basic deployment tutorial step by step
      </h1>
      <h2>Data  from the server : {data}</h2>
    </>
  )
}

export default App
