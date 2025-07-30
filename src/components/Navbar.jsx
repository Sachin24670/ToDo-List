import React from 'react'

const Navbar = () => {
  return (
  <nav className="flex justify-between bg-purple-600 py-3">
    <div className="logo">
      <span className='font-bold text-1xl mx-9'>MyTasks</span>
    </div>

    <ul className="flex gap-7  mx-8 " >
      <li className='cursor-pointer hover:font-bold transition-all duration-150'>Home</li>
      <li className='cursor-pointer hover:font-bold transition-all duration-150'>MyTasks</li>
      </ul>
      
  </nav>
  )
}

export default Navbar
