import React from 'react'

const Menu = ({catItems, filtermenu}) => {
  return (
    <>
        <div className='Buttons'>
            {catItems.map((curelem , index)=>{
                return(
                <div className='button' key={index}>
                 <button onClick={()=> filtermenu(curelem)}>{curelem}</button>
                </div>
                )
            })}
            
            {/* <div className='button'>
                <button onClick={()=> filtermenu('Desi Food')}>Desi Food</button>
            </div>
            <div className='button'>
                <button onClick={()=> filtermenu('Chinese Food')}>Chinese Food</button>
            </div>
            <div className='button'>
                <button onClick={()=> filtermenu('Italian Food')}>Italian Food</button>
            </div>
            <div className='button'>
                <button onClick={()=> filtermenu('Pakistani Food')}>Pakistani Food</button>
            </div> */}
            {/* <div className='button'>
                <button  onClick={selectall}>All</button>
            </div> */}
        </div>
    </>
  )
}

export default Menu;
