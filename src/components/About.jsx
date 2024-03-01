import React from "react";
import Common from "./Common";
import contact from "./images/download.jpeg";

const About =()=>{
    return(
        <>
         <Common  name = "Welcome to about page" 
         link = "./contact"
         btname = "Contact us"
         imgsrc = {contact}
         />
        </>
    )

}
export default About;