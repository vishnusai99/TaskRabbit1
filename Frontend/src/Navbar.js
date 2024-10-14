import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='flex justify-between p-2'>
        <div className=''>
            <Link to={"/"}>
            <h3 className='font-bold text-black text-xl cursor-pointer ' >Task Manager</h3>
            </Link>
        </div>
        <div>

        <Link to="/login"><p className='hover:underline'>Login</p></Link>
        </div>
    </div>
  )
}

export default Navbar