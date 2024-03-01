import React, { useState } from "react";

const Contact =()=>{
    const [data, setdata] = useState({
         fullname: "",
         phone : "",
         email: "",
         message: ""
    });
    const InputEvent = (event)=>{
       const { name, value} = event.target;
       setdata((preval)=>{
             return{
                ...preval,
                [name]: value,
             }
       })
    }
      const onsubmit =(e)=>{
         e.preventDefault();
         alert(`My name is ${data.fullname} My phone number is ${data.phone} and my email is ${data.email} My message is ${data.message}`)
         setdata({
            fullname: "",
            phone: "",
            email: " ",
            message: ""
        });
    }
    

    
    return(
        <>
        <div className="contact-body">
            <div className="contact-form">
 <form  className="form"  onSubmit={onsubmit}> 
          <h3>Contact Us</h3>
     <div className="input">
            <label for="fname">First Name</label><br/>
          <input type="text" name="fullname"  placeholder="Enter Your name.."  onChange={InputEvent}   value={data.fullname}  required/>
          </div>
          <div className="input">
              <label for="lname">Phone Number</label><br/>
              <input type="text"  name="phone" onChange={InputEvent} placeholder="Enter Your PhoneNumber.." value={data.phone}  required/>
              </div>
              <div className="input">
               <label for="country">Email Address</label><br/>
               <input type="text"  name="email" onChange={InputEvent} placeholder= "Enter Your Email Address.."
               value={data.email} required />
                </div>
                <div className="input">
            <label for="message">Subject</label><br/>
            <textarea type="text" name="message" onChange={InputEvent} placeholder="Write your message.." 
            value={data.message} rows="5"  cloumns = '10' required></textarea>
             </div>
             <div className="input">
               <button className="form-button" >Submit</button>
                </div>
            </form> 
            </div>
            </div>
       

        </>
    )

}
export default Contact;