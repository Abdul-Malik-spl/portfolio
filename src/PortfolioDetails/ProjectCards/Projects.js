import React from 'react'
import './Project.css'
import bask from "./images/basket-pic.png"
import bank from "./images/bank-pic.png"


let Projects=()=>{
   let state=[{name:"Little Basket",
               paragraph:"this task little grocery project,",
               link:"https://abdul-malik-spl.github.io/littleBasket",
               pic:bask,
   },{name:"Bank Task",
    paragraph:"paragraph for bank will update",
    link:"https://abdul-malik-spl.github.io/bankTask/",
    pic:bank,
},]
    return(
        <div id="Projects">
            <div className="project-head"><h1>PROJECTS</h1></div>
           
            <div className="container">
                <div className="row">
                {state.map((a,b)=>{
                return    <div className="basket-card col-12 col-md-6 col-lg-6 col-xlg-4">
                <div className="inside-card row">
                 <div className="col-6 col-md-6 col-lg-6 col-xlg-6">
                    <h2>{a.name}</h2>
                    <p className="para-card">{a.paragraph}</p>
                    
                    <div className="btn-cards col-12 col-md-12 col-lg-12 col-xlg-12">
                        {a.link!=""?<button><a href={a.link}>View Project</a></button>:<button disabled><a href={a.link}>will update</a></button>}
                    </div>

                 </div>
                 <div className="col-6 col-md-6 col-lg-6 col-xlg-6 img-back">
                    <div className="imgag-size">
                   <img src={a.pic} alt="project" width="100%"/>
                   </div>
                   
                 </div>
                </div>
             </div>
            })}
                </div>
            </div>
        </div>
    )
}
export default Projects