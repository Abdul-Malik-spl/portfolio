import React from 'react'
import './Footer.css'
import {FaInstagram,FaGithub,FaFacebook,FaWhatsapp} from 'react-icons/fa'
let Footer=()=>{
    let date=new Date()
    let year=date.getFullYear()

    return(<div id="Contact">
        <div className="Contact-div"><h1>CONTACT</h1></div>
        <div className="container footer-content ">
            <div className="row">
       <div className="mail-left col-6 ">click the mail : <a href="abdulmalikspl@gmail.com">abdulmalikspl@gmail.com </a></div>
            <div className="social-m row col-6">
                <div className="col-12 col-md-3 "><a href="https://www.instagram.com/abd_spl" target="_blank"><FaInstagram className="ins"/></a></div>
                <div className="col-12 col-md-3 col-lg-3 col-xlg-3" title="not update"><a href="#" target="_blank"><FaFacebook className="fb"/></a></div>
                <div className="col-12 col-md-3 col-lg-3 col-xlg-3"><a href="https://wa.me/9047718854" target="_blank"><FaWhatsapp className="wapp"/></a></div>
                <div className="col-12 col-md-3 col-lg-3 col-xlg-3"><a href="https://github.com/Abdul-Malik-spl" target="_blank"><FaGithub className="git"/></a></div>
                </div>
            </div>
        </div>
<div className="copy-r"><div className="container">&copy; {year}</div></div>
        </div>)
}
export default Footer