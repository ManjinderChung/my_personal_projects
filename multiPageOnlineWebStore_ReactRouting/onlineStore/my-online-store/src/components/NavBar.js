import {Link } from "react-router-dom"
import React from "react";
//created a NavBar to display on all pages
const NavBar = () =>{
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/products">Products</Link>
        </nav>
    )
}

export default NavBar