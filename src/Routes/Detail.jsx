import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react';

const Detail = () => {
  const {id} = useParams()
  const [data, setData] = useState([])
  const url = `https://jsonplaceholder.typicode.com/users/${id}`
  
  useEffect(() => {
    axios(url)
    .then(res => setData([res.data]))
  }, [])
 
  return (
    <>
      <h1 className='details'>Detail Dentist</h1>
      <table>
          <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>
          </thead>
          <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>{item.website}</td>
            </tr>
          ))}
        </tbody>
       </table>
    </>
  )
}

export default Detail