import React, {  useState } from 'react';
import "./Res.css";
import Header from './Header';
import Menu from './Menu';
import Items from './Items';
import Footer from './Footer';
import menu_items from './Fdata';
import Form from './Form';
// import Footer from './Footer';



const allvalues = [...new Set (menu_items.map((curelem)=>{
        return  curelem.category;
})) , 'All']


const App = () => {
  const [list, setlist] = useState(menu_items);
  const [catItems, setcatItems] = useState(allvalues)

  const filtermenu =(category)=>{
    if(category === "All")
    {
      setlist(menu_items);
    }
    else{
        const update_menu = menu_items.filter((curelem)=>{
            return  curelem.category === category;
          })
          setlist(update_menu)
        }
        setcatItems(allvalues)
  }

  const callForm =()=>{
    return(
      
      <>
         <Form/>
      </>
    )
  }
  
 
  return (
    <>
       <Header/>
       <Menu 
        filtermenu={filtermenu}
        catItems = {catItems}
        />
       <Items
        list={list}
        callForm = {callForm}
        />
       <Footer/>
    </>
  )
}

export default App
