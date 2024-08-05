import { useEffect, useState } from 'react'
import axios from 'axios'

import './App.css'

function App() {
  const url = 'https://jsonplaceholder.typicode.com/users'
  const [data, setData] = useState([])

   const getData = async () => {
    try {
      const response = await axios.get(url)
      setData(response.data)
    } catch (error) {
      console.log(error)
    }
   }

   useEffect( () => {
    getData(), []
   })

  return (
    <div>

      <div className='grid grid-cols-4 text-2xl font-black'>
      <h2> ID </h2>
      <h2>NAME</h2>
      <h2>USERNAME</h2>
      <h2>EMAIL ADDRESS</h2>
      </div>
    {data.map((item) => (
      // eslint-disable-next-line react/jsx-key
      <div className='grid grid-cols-4 border-violet-950 border-solid border-2 p-2 m-2'>
      <p  key={item.id}>{item.id}</p>
      <div>
        <p>{item.name}</p>
      </div>
      <div>
        <p>{item.username}</p>
      </div>
      <div>
        <p>{item.email}</p>
      </div>
      </div>
    ))}
    </div>
    
  )
   }

export default App
