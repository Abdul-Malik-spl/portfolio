import React from 'react'
import './Banner.css'
import pic from '../image/image3.jpg'
let Banner=()=>{

//this is a test change
//this is a test change
    return(
        <div id="Banner">
            <div className="Banner-Content container">
                <div className="row row-content">
                    <div className="squeare-content col-4 col-md-4 col-lg-4 col-xlg-4">
                        <img src={pic} width="100%" height="100%"/>
                         </div>
                         
                         <div className="col-12 col-md-12 col-lg-12 col-xlg-12 btn-banner">
                            {/* <button className=""> */}
                                <a className="resume-btn" href={`${process.env.PUBLIC_URL}/AbdulMalikResume.pdf`} download="AbdulMalikResume.pdf">Resume Download</a>
                            {/* </button> */}
                            </div>
                </div>
                {/* <div className="typewriter"><h1>Abdul Malik</h1></div> */}
                <div className="dot1"></div>
            </div>
        </div>
    )
}
export default Banner