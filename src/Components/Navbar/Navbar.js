import React from 'react'
import MovieIcon from '@material-ui/icons/Movie';
import "./Navbar.css"
import { Link } from 'react-router-dom';
function Navbar() {
    return (
        <div className = "header">
        <div className="name">
        <div className = "title"> 
        <Link to = "/">       
        <span >
           FIND FUN
        </span>
        </Link> 
        </div>
        <div className = "icon">
        <MovieIcon />
        </div>
        </div>
        <div className = "register">
      <div className = "signup">
        <span >
            <Link to = "/signup">
           Sign Up
           </Link>
        </span>
        </div>
        <div className = "signin">
            <Link to = "/signin">
            Sign In
            </Link>   
        </div>
        </div>
      </div>
    )
}

export default Navbar
