import React from "react";


function Card(props){
    return(
  <>
  <div className="card-body">
    <div className='card'>
    <img src={props.imgsrc}  alt="img" /> 
    <h3>{props.title}</h3>
    <p>{props.para}</p>
       <a href='https://www.netflix.com/pk/' target='blank'>
       <button className="btn">Watch now</button>
       </a>
    </div>
    </div>
  </>)
  }

export default Card;