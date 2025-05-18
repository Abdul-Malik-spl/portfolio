import React from 'react'
import './Project.css'
import bask from "./images/basket-pic.png"
import bank from "./images/bank-pic.png"
import rock from "./images/rock-pic.jpg"
import clock from './images/clock-pic.jpeg'
import fb from "./images/fb-pic.png"
import bmi from './images/bmi.jpg.jpeg'
import timer from './images/timer.jpg.jpeg'
import weather from './images/weather.jpg'
import  memory from "./images/memory.jpg"

let Projects=()=>{
   let state=[{name:"Digital Clock",
    paragraph:[
        ["Project Type", "Digital clock"],
        ["Technologies Used", "HTML, CSS, JavaScript"],
        ["Design Focus", "Clean and modern interface"],
        ["Styling Method", "Styled entirely with CSS"],
        ["Displayed Information", "Current date", "Month", "Year", "Day of the week", "Hours", "Minutes", "Seconds"],
        ["Functionality", "Provides real-time updates"],
        ["Purpose", "Showcases ability to create interactive web applications"],
        ["Core Technologies", "Fundamental web technologies"]
    ]
    ,
    link:"https://abdul-malik-spl.github.io/Digital-Clock",
    pic:clock,
},
{name:"Rock Papper Scissor game",
    paragraph:[
  ["Project Type", "Rock, Paper, Scissors Game"],
  ["Technologies Used", "HTML, CSS, JavaScript"],
  ["Gameplay", "Player vs. Computer"],
  ["Selection Method", "Player chooses rock, paper, or scissors by clicking a button"],
  ["Computer Choice", "Random selection of rock, paper, or scissors"],
  ["Result Display", "Outcome shown after both player and computer make selections"],
  ["Purpose", "Demonstrates interactive web application development"],
  ["Core Technologies", "Fundamental web technologies"]
],
    link:"https://abdul-malik-spl.github.io/rock-papper-scissors",
    pic:rock,
},
{name:"Little Basket",
paragraph:[
    ["Project Type", "Grocery Application"],
    ["Technologies Used", "React, Redux, CSS (without Bootstrap)"],
    ["Design Focus", "Fully responsive interface"],
    ["Styling Method", "Styled entirely with CSS"],
    ["Functionality", "Allows users to select products, manage their bucket list, and track quantity"],
    ["Cart Features", "Users can add items to cart, adjust quantity, and calculate total amount"],
    ["Favorites Feature", "Users can mark items as favorites by clicking the favorite icon"],
    ["Product Details", "Users can click on a product's picture to view individual details"],
    ["Purpose", "Showcases interactive web application development using React and Redux"]
  ]
,  
               link:"https://abdul-malik-spl.github.io/littleBasket",
               pic:bask,
   },{name:"Bank Task",
paragraph:[
    ["Project Type", "Banking Application"],
    ["Technologies Used", "React, Redux, CSS"],
    ["Design Focus", "Fully responsive interface"],
    ["Styling Method", "Styled entirely with CSS"],
    ["User Accounts", "Raj111 (password: 0101), Suresh112 (password: 5151), Mahesh113 (password: 5331)"],
    ["Banking Features", "Users can view bank details, perform credit and debit transactions"],
    ["Real-Time Updates", "Balance updates dynamically"],
    ["Transaction History", "Comprehensive history with timestamps (year, month, date, hour, minute, second)"],
    ["Purpose", "Showcases interactive web application development using React and Redux"]
  ]
  ,
    link:"https://abdul-malik-spl.github.io/bankTask/",
    pic:bank,
},{name:"Fb Task",
paragraph:[
    ["Project Type", "Facebook-Inspired Social Media Platform"],
    ["Technologies Used", "React, Redux, CSS"],
    ["Login Process", "Users enter Gmail and password to access the home page"],
    ["Home Page", "Initially empty with prompt to create a post"],
    ["Post Creation", "Users click a text box, write a message, and select a color template"],
    ["Color Templates", "Red, blue, green, white, radiant colors (e.g., flag colors)"],
    ["Post Submission", "Post button disabled until user enters text and selects a template"],
    ["Post Navigation", "Arrow appears when multiple posts are added"],
    ["User Interaction", "Like button for liking posts, comment button for submitting thoughts"],
    ["Navigation Features", "Home icon returns users to home page, message and friends icons display lists"],
    ["Inactive Icons", "TV and bell icons are present for design but not functional"],
    ["User Accounts & Credentials", "Abdul – abdul@gmail.com (Password: 12345), Raj – raj@gmail.com (Password: 54321), Kavi – kavi@gmail.com (Password: 01010)"],
    ["Purpose", "Showcases interactive web application development with user interaction features"]
  ]
,  
    link:"https://abdul-malik-spl.github.io/FbTask",
    pic:fb,
},
{
    name:"BMI Calculator",
paragraph:[
    ["Project Type", "BMI Calculator"],
    ["Technologies Used", "HTML, CSS, JavaScript"],
    ["Input Parameters", "Weight in kilograms, height in feet or inches"],
    ["Unit Selection", "Feet set as default, users can switch to inches"],
    ["Calculation", "BMI calculated upon user input"],
    ["Display Method", "Animated meter shows BMI result"],
    ["Personalized Advice", "Displayed below result with typewriting effect"],
    ["Design Focus", "Simple and visually engaging user interface"],
    ["Purpose", "Demonstrates interactive web application development"]
  ]
,  
    link:"https://abdul-malik-spl.github.io/bmi/train.html",
    pic:bmi,
},{
    name:"Timer",
paragraph:[
    ["Project Type", "Timer Application"],
    ["Technologies Used", "HTML, CSS, JavaScript"],
    ["Time Selection", "Users set minutes and seconds via dropdown menu"],
    ["Countdown Mechanism", "Starts in reverse upon clicking 'Start' button"],
    ["Animation Feature", "Triggers in the last 5 seconds for enhanced user experience"],
    ["Pause Functionality", "Timer can be paused using 'Stop' button"],
    ["Reset Functionality", "Timer resets to zero when 'Clear' button is clicked"],
    ["Input Restrictions", "Text box disabled while timer runs to prevent edits"],
    ["Reactivation", "Text box re-enabled after timer ends for a new setup"],
    ["Purpose", "Showcases interactive web application development"]
  ]
,  
    link:"https://abdul-malik-spl.github.io/stopwatch",
    pic:timer
},{
name:"weather app",
paragraph:[
    ["Project Type", "Weather Web Application"],
    ["Technologies Used", "React, Third-Party API"],
    ["API Limit", "Allows up to 100 free data requests per month"],
    ["Search Functionality", "Users can search for cities worldwide"],
    ["Real-Time Data", "Provides live weather updates including temperature, humidity, wind speed, and pressure"],
    ["Additional Metrics", "Displays UV index, sunrise, and sunset timings"],
    ["Visual Representation", "Indicates whether it is currently day or night in the selected city"],
    ["Wind Features", "Includes wind direction indicators"],
    ["Weather Icons", "Simplified icons for intuitive user experience"],
    ["User-Friendly Search", "Effortless global weather exploration"],
    ["Purpose", "Showcases interactive web application development"]
  ]
,  
link:"https://abdul-malik-spl.github.io/weather/",
pic:weather
},{
    name:"memory",
paragraph:[
    ["Project Type", "Memory Card Game"],
    ["Technologies Used", "HTML, CSS, JavaScript"],
    ["Card Setup", "12 cards arranged in 6 pairs"],
    ["Gameplay", "Players flip two cards at a time to match identical pairs"],
    ["Matching Mechanism", "Correct matches remain open, incorrect selections close again"],
    ["Challenge", "Tests memory and concentration"],
    ["Design Focus", "Clean and minimalistic interface"],
    ["Purpose", "Provides a fun and interactive experience"]
  ]
,  
    link:"https://abdul-malik-spl.github.io/memory-game/",
    pic:memory
}
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
                        <img src={a.pic} width="100%" style={{width:"150px"}}/>
                    </div>
                </div>
                
                  <div className="paragraph-div col-12 col-md-12 col-lg-6 col-xlg-6">
                     <div className="paragraph-size ">
                        <div className="para">
                           {
                                a.paragraph.map((word)=>{
                                  return <table class="table-para">
                                  
                                    <tbody>
                                    <tr><td className="table-ttl-data">{word[0]}</td><td>:</td><td>{word[1]}</td></tr>
                                  </tbody>
                                  </table>
                                })
                            }
                        </div>
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
                     <img src={a.pic} width="100%" style={{width:"150px"}}/>
                 </div>
             </div>
             
               <div className="paragraph-div col-12 col-md-12 col-lg-6 col-xlg-6">
                  <div className="paragraph-size ">
                  <div className="para">
                           {
                                a.paragraph.map((word)=>{
                                  return <table className="table-para ">
                                    <tbody>
                                    <tr><td className="table-ttl-data">{word[0]}</td ><td>:</td><td>{word[1]}</td></tr>
                                  </tbody>
                                  </table>
                                })
                            }
                        </div>
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