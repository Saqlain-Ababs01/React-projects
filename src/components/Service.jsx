import React from "react";
import Card from "./Card";
import Sdata from "./Service-data";


const Service =()=>{
    return(
        <>
        <div className="service-body">
        <div className="service">
  <h1>Our Services 💁</h1>
  </div>
  <div className='Carts'>
         {Sdata.map((val , index , array) => {
            return(
                <Card
                key = {val.id}
                imgsrc = {val.imgsrc}
                title = {val.heading}
                para = {val.para}
                />
            )
        })} 
        </div>
        </div>
    </>
    )
}
export default Service;