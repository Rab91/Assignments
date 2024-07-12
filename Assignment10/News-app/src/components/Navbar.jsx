import React from 'react'
import Searchbar from './Searchbar'

const Navbar = () => {

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid d-flex justify-content-around">
        <a className="navbar-brand" href="#">
        <img 
        src="https://cdn-icons-png.flaticon.com/512/1759/1759492.png" width="50" height="50" className="p-1 d-inline-block align-text-top"/>
            News Bucket
        </a>
        <Searchbar />
    </div>
  </nav>
  )
}

export default Navbar