import React, { useState } from 'react'
import SearchMovie from './SearchMovie'

const NavList =()=> {
  const [searchTerm,setSearchTerm]=useState("");
  return (
    <div className='d-flex justify-content-between'>
        <img className='logo'
        src="https://t3.ftcdn.net/jpg/05/90/75/40/360_F_590754013_CoFRYEcAmLREfB3k8vjzuyStsDbMAnqC.jpg" />
        <h1 className='text-white fw-semibold fs-1 heading'>TheaterBox</h1>
        <SearchMovie searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      </div>
  )
}

export default NavList