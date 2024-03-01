import React from "react";
import { NavLink } from "react-router-dom";


const Navbar =()=>{
    
    
    return(
        <>
        <div  className=  "Nav-bar" >
        <div className="logo">   
        <h2>My Web</h2>
            </div>
           <ul >
            <li>
                <NavLink  className="ul" activeClassName="active" to="/" >Home</NavLink>
            </li>
            <li>
                <NavLink  className="ul" activeClassName="active" to="/service" >Service</NavLink>
            </li>
            <li>
                <NavLink className="ul" activeClassName="active" to="/about">About</NavLink>
            </li>
            <li>
                <NavLink  className="ul" activeClassName="active" to="/contact">Contact</NavLink>
            </li>
            </ul>
           </div>
        </>
    )
}
export default Navbar;