import React from 'react'


const Items = ({list, callForm}) => {
  return (
    <>
        <div className='menu-items'>
                 {list.map((curelem)=>{
                  const { id, name, category, image, price, description} = curelem
                       return(
                        <div className='items' key={id}  category ={category}>
                        <div className='image'>
                          <img  src={image}  alt='pics' height="100%" width="100%"/>
                          </div>
                          <div className=' details'>
                          <div className='heading'>
                            <h2>{name}</h2>
                            <p>{description}</p>
                            </div>
                            <div className='price-button'>
                             <h2> {price}</h2> <button onClick={callForm} >Order Now</button>  </div> <br/>
                           <p> "price may vary as selected dish" </p>
                          
                          </div>
                        </div>
                       )
                 })}  
        </div>
    </>
  )
}

export default Items
