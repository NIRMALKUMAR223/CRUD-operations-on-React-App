import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div className='bg-gray-200 text-center w-screen'>
      <Link to='/form'><button className='bg-green-500 text-white rounded-2xl p-2 w-24 text-2xl m-3'>Student</button></Link>
      <Link to='/details'><button className='bg-red-500 text-white rounded-2xl p-2 w-24 text-2xl m-3'>Record</button></Link>
    </div>
  )
}

export default Home
