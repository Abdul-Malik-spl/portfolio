import React from 'react'
import './Project.css'
import bask from "./images/basket-pic.png"
import bank from "./images/bank-pic.png"
import rock from "./images/rock-pic.jpg"
import clock from './images/clock-pic.jpeg'
import fb from "./images/fb-pic.png"


let Projects=()=>{
   let state=[{name:"Digital Clock",
    paragraph:"This project is a digital clock built using HTML, CSS, and JavaScript. The design focuses on a clean and modern interface, styled entirely with CSS. The clock displays the current date, month, year, day of the week, as well as hours, minutes, and seconds, providing real-time updates. This project showcases my ability to create interactive web applications with fundamental web technologies.",
    link:"https://abdul-malik-spl.github.io/Digital-Clock",
    pic:clock,
},{name:"Rock Papper Scissor game",
    paragraph:"This project is built using HTML, CSS, and JavaScript. It’s a Rock, Paper, Scissors game that you play against the computer. You choose one of the three options—rock, paper, or scissors—by clicking the corresponding button. Once you make your selection, the computer will also choose its option, and the result will be displayed below.   ",
    link:"https://abdul-malik-spl.github.io/rock-papper-scissors",
    pic:rock,
},{name:"Little Basket",
               paragraph:"This project is a small grocery application built with React and Redux. It is fully responsive and designed using only CSS, without Bootstrap. The app allows users to select products, check their bucket list to see how many items they have selected, view the total quantity, and calculate the total amount. Users can add items to their cart or decrease the quantity as needed. They can also mark items as favorites by clicking the favorite icon. Additionally, they can click on a product's picture to view individual product details.",
               link:"https://abdul-malik-spl.github.io/littleBasket",
               pic:bask,
   },{name:"Bank Task",
    paragraph:"This project is a simple banking application built with React and Redux. It is fully responsive and designed using only CSS. The app features three user accounts: User 1 (Raj111, password: 0101), User 2 (Suresh112, password: 5151), and User 3 (Mahesh113, password: 5331). After logging in, users can view their bank details and access options for credit and debit transactions. The application displays real-time balance updates, as well as a comprehensive transaction history. Each transaction includes details such as the year, month, date, hour, minute, and second, along with the respective debit or credit information.",
    link:"https://abdul-malik-spl.github.io/bankTask/",
    pic:bank,
},{name:"Fb Task",
    paragraph:"in this Facebook-inspired project, users start on a login page where they need to enter their Gmail and password to access the home page. After logging in, the home page is initially empty, with a message asking the user to create a post. To create a post, the user can click a text box, write a message, and select a color template. The available templates include red, blue, green, white, and radiant colors, such as flag colors. The 'Post' button is disabled until the user enters text and selects a template. Once the post is submitted, it appears on the home page If the user adds multiple posts, an arrow appears on the right, allowing them to navigate through different pages of posts. Each post on the home page has like and comment buttons, allowing users to interact with the content. The like button adds a like to the post, and the comment button opens a comment box where users can submit their thoughts.The home icon is functional, allowing users to return to the home page from other sections, such as the message or friends list. The message and friends icons display a list of other users. Other icons like the TV and bell icons are present for design purposes but are not functional.The following are the users and their login credentials 1. Abdul – abdul@gmail.com (Password: 12345) 2. Raj – raj@gmail.com (Password: 54321) 3. Kavi – kavi@gmail.com (Password: 01010)",
    link:"https://abdul-malik-spl.github.io/FbTask",
    pic:fb,
},
]
    return(
        <div id="Projects">
            <div className="project-head"><h1>PROJECTS</h1></div>
           
            <div className="container">
                <div className="row">
                {state.map((a,b)=>{
                return   a.name!="Fb Task"? <div className="basket-card col-12 col-md-12 col-lg-12 col-xlg-6 ">
            
               
               <div className="card-set">
                <div className="row gap-set">
                <div className="img-div col-12 col-md-12 col-lg-6 col-xlg-6 ">
                    <div className="img-height">
                        <img src={a.pic} width="100%" style={{height:"150px"}}/>
                    </div>
                </div>
                
                  <div className="paragraph-div col-12 col-md-12 col-lg-6 col-xlg-6">
                     <div className="paragraph-size ">
                        <p className="para">{a.paragraph}</p>
                     </div>
                  </div>
                  <div className="container line-cart"></div>
                <div className="link col-12 col-md-12 col-lg-12 col-xlg-12 ink-end">
                    
                    <a href={a.link}>View Project</a>
                
                </div>
               </div>
             </div>
             </div>:<div className="basket-card col-12 col-md-12 col-lg-12 col-xlg-12 ">
            
               
            <div className="card-set">
             <div className="row gap-set">
             <div className="img-div col-12 col-md-12 col-lg-6 col-xlg-6 ">
                 <div className="img-height">
                     <img src={a.pic} width="100%" style={{height:"150px"}}/>
                 </div>
             </div>
             
               <div className="paragraph-div col-12 col-md-12 col-lg-6 col-xlg-6">
                  <div className="paragraph-size ">
                     <p className="para">{a.paragraph}</p>
                  </div>
               </div>
               <div className="container line-cart"></div>
             <div className="link col-12 col-md-12 col-lg-12 col-xlg-12 ink-end">
                 
                 <a href={a.link}>View Project</a>
             
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