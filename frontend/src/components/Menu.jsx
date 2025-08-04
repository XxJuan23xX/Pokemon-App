import React from 'react'
import Navbar from './Navbar'

const Menu = () => {
  return (
    <div className="flex flex-col min-h-screen" style={{ backgroundColor: '#849fa6' }}>
      {/* Navbar en la parte superior */}
      <Navbar />
    <div>
      Hola soy el menu
    </div>
    </div>
  )
}

export default Menu
