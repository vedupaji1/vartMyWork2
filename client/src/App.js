import React, { createContext } from 'react'; // For Creating Context, Context Is Used For Data Sharing
import Navbar from './Components/Navbar.jsx';
import MainTemp from './Components/MainTemp';
import PageFooter from './Components/PageFooter';
import Header from './Components/Header';
import {useState} from 'react';

let IsNavActive=createContext();
function App() {
  let [navActive,setNavActive]=useState(true);
  let headerDetails = {
    headerName: "MyWork",
    slogan: "Cholo Score Dekhe"
  }

  const changeNavFunc=(data)=>
  {
    setNavActive(data);
  }
  
  return (
    <>
      <Header headerName={headerDetails.headerName} slogan={headerDetails.slogan} isSlogan={false} />
      <IsNavActive.Provider value={{isActive:navActive,changeNavFunc:changeNavFunc}}>
      <Navbar/>
      <MainTemp/>  
      </IsNavActive.Provider>
      <PageFooter/>
    </>
  );
}

export default App;
export {IsNavActive};