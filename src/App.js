import React, { useState } from "react";
import { DefaultContext } from "./Context";
import { useEffect } from "react";

//импортируем стили
import "./App.css";

import { Header } from "./components/header";
import { Content } from "./components/content";
import { Footer } from "./components/footer";

export default function App() {
  const [fan, setFan] = useState("");
  const [theme, setTheme] = useState(JSON.parse(localStorage.getItem('theme')));

  const handleCreateFan = ({ name }) => {
    setFan(name);
  };
  
  const handleSetDarkTheme = ()=>{
    setTheme("theme-dark");
    localStorage.setItem('theme', JSON.stringify(theme))
  }
  const handleSetLightTheme = ()=>{
    setTheme("theme-red");
    localStorage.setItem('theme', JSON.stringify(theme))

  } 
  console.log(theme)

  useEffect(()=>{
    localStorage.setItem('theme', JSON.stringify(theme))
  })
  

  return (
    <DefaultContext.Provider value={{ handleCreateFan }}>
      <Header fan={fan} theme = {theme}
        handleSetDarkTheme = {handleSetDarkTheme}
        handleSetLightTheme = {handleSetLightTheme}  
        />
      <hr />
      <Content />
      <Footer/>
    </DefaultContext.Provider>
  );
}
