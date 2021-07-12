import React from 'react'
import MovieIcon from '@material-ui/icons/Movie';
import "./Navbar.css"
import { Link } from 'react-router-dom';
import Search from '../Pages/Search/Search';
function Navbar() {
    return (
        <div className = "header">
        <div className="name">
        <div className = "title"> 
        <Link to = "/">       
        <span style = {{color: "white" }} >
           FIND FUN
        </span>
        </Link> 
        </div>
        <div className = "icon">
        <MovieIcon />
        </div>
        </div>
        <div className  = "search" >
            <Search />
        </div>
        <div className = "register">
      <div className = "signup">
      <Link to = "/signup">
        <span style = {{color: "white"}}>
           Sign Up
       </span>
       </Link>
        </div>
        <div className = "signin">
            <Link to = "/signin">
            <span style = {{color: "white"}}>
            Sign In
            </span>
            </Link>   
        </div>
        </div>
      </div>
    )
}

export default Navbar
