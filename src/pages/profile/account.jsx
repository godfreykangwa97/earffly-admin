import React from "react";
import {Link} from "react-router-dom";
import Sidebar from "../../components/sider";
import Header from "../../components/header";
import FloatingChat from "../chat/floating";

const Account = () => {
    return (
        <div className="wrapper">
            <Sidebar/>
            <div className="main">
                <Header/>
               <div className="main-content p-s-2">
                   <div className="account">
                       <div className="opening-nav inline-flex">
                           <Link to="/">Dashboard</Link>
                           <Link to="/account">Account</Link>
                       </div>
                       <div className="information m-t-2 p-20">
                           <div className="av flex flex-column justify-center align-center">
                               <div className="names text-center">
                                   <h1>Godfrey kangwa</h1>
                                   <p>role</p>
                                   <p>godfreykangwa97@gmail.com</p>
                               </div>
                           </div>
                           <div className="details m-t-2">
                               <div className="g-35-65">
                                   <div className="contacts">
                                       <h4>Contacts</h4>
                                       <div className="email">
                                           <h5>email</h5>
                                           <p>email address</p>
                                       </div>
                                       <div className="phone">
                                           <h5>Phone</h5>
                                           <p>phone number</p>
                                       </div>
                                       <div className="socials">
                                           <h5>Social media</h5>
                                           <ul>
                                               <li><a href=""><i className="fab fa-facebook-f"/><span className="m-l-20">facebook</span></a></li>
                                               <li><a href=""><i className="fab fa-twitter"/><span className="m-l-20">twitter</span></a></li>
                                               <li><a href=""><i className="fab fa-instagram"/><span className="m-l-20">instagram</span></a></li>
                                               <li><a href=""><i className="fab fa-linkedin-in"/><span className="m-l-20">linked in</span></a></li>
                                           </ul>
                                       </div>
                                   </div>
                                   <div className="personal">
                                       <h4>Creditials</h4>
                                       <div className="g-2">
                                           <p>first name</p>
                                           <p>last name</p>
                                       </div>
                                       <div className="gender">
                                           <p>gender</p>
                                       </div>
                                       <div className="role">
                                           <p>role</p>
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
            </div>
            <FloatingChat/>
        </div>

    );
};
export default Account;