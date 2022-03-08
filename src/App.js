import React from 'react';
import { BrowserRouter } from "react-router-dom";


import Wrapper from "./components/wrapper";

function App() {
  return (
    <div className="App">
       <BrowserRouter>
           <Wrapper/>
       </BrowserRouter>
    </div>
  );
}

export default App;
