import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Service from "./Service";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";
import './index.css';
import "./Cards.css";
import Footer from "./Footer";

function App() {
 return(
  <>
  <Navbar/>
    <Routes>
      <Route path="/"        element={<Home/>}/>
      <Route path="/service"  element={<Service/>}/>
      <Route path="/about"    element={<About/>}/>
      <Route path="/contact"  element={<Contact/>}/>
    </Routes>
    <Footer/>
   
  </>
 )
}
export default App;
