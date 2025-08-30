import React from 'react'
import "./Header.scss"
import logo from "../../netflixlog.png"
import { Link } from 'react-router-dom'
import { ImSearch } from 'react-icons/im'
const Header = () => {
  return (
    <nav className="header">
        <img src ={logo} alt="netfliximg" />
        
        <div>
        <Link to="tvshows">TVSHOWS</Link>
        <Link to="movies">Movies</Link>
        <Link to="recently added">Recently Added</Link>
        <Link to="list">List</Link>
        </div>

        <ImSearch/>
    </nav>
  )
}

export default Header