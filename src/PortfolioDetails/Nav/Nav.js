import React from 'react'
import './Nav.css'
let Nav=()=>{


    return(
        <div id="nav">
<nav className="navbar">
    <div className="container">
        <div className="row">
            <div className="logo col-4 col-md-4 col-lg-4 col-xlg-4"><a href="#Contact">Contact</a></div>
            <ul className="list-Items  col-8 col-md-8 col-lg-8 col-xlg-8">
                <li><a href="#Banner">Home</a></li>
            <li><a href="#Projects">Projects</a></li>
            <li><a href="#Skills">Skils</a></li></ul>
        </div>
    </div>
</nav>
        </div>
    )
}
export default Nav