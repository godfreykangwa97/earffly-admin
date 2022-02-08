import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Sidebar from "./sider";
import Main from "./main";
import FloatingChat from "../pages/chat/floating";
const Wrapper = () => {
    return (
       <div className="wrapper">
           <BrowserRouter>
               <Sidebar/>
               <Main/>
               <FloatingChat/>
           </BrowserRouter>
       </div>
    );
};
export default Wrapper;