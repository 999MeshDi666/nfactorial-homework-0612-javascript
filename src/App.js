import React, { useState } from "react";
import { DefaultContext } from "./Context";
import { ThemeContext } from "./Context";
import { useEffect } from "react";

//импортируем стили
import "./App.css";

import { Header } from "./components/header";
import { Content } from "./components/content";
import { Footer } from "./components/footer";

export default function App() {
  const [fan, setFan] = useState("");
  const [theme, setTheme] = useState(JSON.parse(localStorage.getItem('theme')) || "theme-dark");

  const handleCreateFan = ({ name }) => {
    setFan(name);
  };
  
 
  const handleSetTheme = ()=>{
    theme === "theme-dark"? setTheme("theme-red") : setTheme("theme-dark");
    // console.log(theme)
    // localStorage.setItem('theme', JSON.stringify(theme))
  } 
  console.log(theme)

  useEffect(()=>{
    localStorage.setItem('theme', JSON.stringify(theme))
  }, [theme])
  

  return (
    <ThemeContext.Provider value = {{handleSetTheme}}>
      <DefaultContext.Provider value={{ handleCreateFan }}>
        <Header fan={fan} theme = {theme}/>
        <hr />
        <Content theme={theme}/>
        <Footer/>
      </DefaultContext.Provider>
      
    </ThemeContext.Provider>
    
  );
}
