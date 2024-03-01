import React from "react";

const Common =(props)=>{
    return(
        <>
        <div className="Homepage">
            <div className="heading">
            <div className="para">
             <h1>{props.name}<br/> <strong className="strong">My Web</strong></h1><br/>
             <p>We are a team of telented developers making websites</p><br/>
             <a href={props.link} >
             <button className="button">{props.btname}</button>
             </a>
             </div>
            </div> 
            <div className="image">
                <img src={props.imgsrc} alt="office"   height="350vh"  width="350vw" />
            </div>
        </div>

        </>
    )
}
export default Common;