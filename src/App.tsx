
import Main from "./Pages/Main.tsx";
import React, { useEffect, useRef, useState } from "react";
import { NeatConfig, NeatGradient } from "@firecms/neat";
import MyComponent from "./Components/GradientCanvas/GradientBackground.tsx";
import './App.css';


function App() {

 
  return (
  
   
<>
      <MyComponent/>
    <div className="App">
      <Main />
    </div>
</>

    
  )
}

export default App;
