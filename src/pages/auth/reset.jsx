import React from "react";

import Logo from "../../assets/site/mark.png";


const Reset = () => {
    return (
        <div className="login-page">
           <div className="all-wrapper">
               <div className="form-holder">
                   <div className="opening text-center">
                       <img src={Logo} alt="Earfly"/>
                       <h3>Reset by email</h3>
                   </div>
                   <form action="">
                       <div className="form-group">
                           <input type="text" placeholder="Email address or username"/>
                       </div>
                       <div className="form-group">
                           <button type="submit" className="btn submit-btn">Login</button>
                       </div>
                   </form>
               </div>
               <div className="just-words">
                   <h1>Now resting</h1>
                   <h1>Your account</h1>
               </div>
           </div>
        </div>
    );
}
export default Reset;