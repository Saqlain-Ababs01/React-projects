import React from "react";
import Common from "./Common";
import home from "./images/home.gif"
const Home =()=>{
   return(
    <>
        <Common  
         name = "Grow your business  with" 
         link = "./service"
         btname = "Get Started"
         imgsrc = {home}
        />
    </>
   )

}
export default Home;