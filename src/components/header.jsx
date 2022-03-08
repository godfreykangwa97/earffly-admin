import React, { useEffect, useState, useRef } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

import { auth, db, logout } from "../services/firebase";
import { query, collection, getDocs, where } from "firebase/firestore";

import { Link, useLocation } from 'react-router-dom';
import UserImg from '../assets/img/photo_2021-11-11_08-27-42.jpg';


const clickOutsideMESS = (message_ref, message_toggle_ref) =>{
    document.addEventListener("mousedown", (e) => {
        if(message_toggle_ref.current && message_toggle_ref.current.contains(e.target)){
            message_ref.current.classList.toggle('active');
        } else {
            if (message_ref.current && !message_ref.current.contains(e.target)){
                message_ref.current.classList.remove('active');
            }
        }
    });
};

const clickOutsideNOT = (not_ref, not_toggle_ref) =>{
    document.addEventListener("mousedown", (e) => {
        if(not_toggle_ref.current && not_toggle_ref.current.contains(e.target)){
            not_ref.current.classList.toggle('active');
        } else {
            if (not_ref.current && !not_ref.current.contains(e.target)){
                not_ref.current.classList.remove('active');
            }
        }
    });
};

const clickOutsideUSER = (user_ref, user_toggle_ref) =>{
    document.addEventListener("mousedown", (e) => {
        if(user_toggle_ref.current && user_toggle_ref.current.contains(e.target)){
            user_ref.current.classList.toggle('active');
        } else {
            if (user_ref.current && !user_ref.current.contains(e.target)){
                user_ref.current.classList.remove('active');
            }
        }
    });
};

const Header = () => {

    const message_toggle_el = useRef(null);
    const message_content_el = useRef(null);

    const not_toggle_el = useRef(null);
    const not_content_el = useRef(null);

    const user_toggle_el = useRef(null);
    const user_content_el = useRef(null);

    clickOutsideMESS(message_content_el, message_toggle_el);
    clickOutsideNOT(not_content_el, not_toggle_el);
    clickOutsideUSER(user_content_el, user_toggle_el);


    return (

        <header className="header">
           <div className="header-holder space-between">
               <i className="fas fa-align-left"/>
               <nav className="navigation inline-flex">
                   <form action="" className="search-wrapper space-between">
                       <input type="search" placeholder="search" className="border-less"/>
                       <button className="icon-btn"><i className="fas fa-search text-main"/></button>
                   </form>
                   <Link to="/">Home</Link>
                   <div className="dropdown">
                       <button ref={message_toggle_el} className="icon-btn dropdown_toggle">
                           <i className="fas fa-envelope"/>
                           <span className="drop-toggle-badge">23</span>
                       </button>

                       <div ref={message_content_el} className="dropdown-menu">
                           <div className="message-drop">
                               <div className="message-item">
                                   <img src={UserImg} className="drop-avatar" alt=""/>
                                   <div className="message-body">
                                       <h5>name</h5>
                                       <p>Lorem ipsum dolor sit.</p>
                                   </div>
                               </div>
                               <div className="message-item">
                                   <img src={UserImg} className="drop-avatar" alt=""/>
                                   <div className="message-body">
                                       <h5>name</h5>
                                       <p>Lorem ipsum dolor sit.</p>
                                   </div>
                               </div>
                               <div className="message-item">
                                   <img src={UserImg} className="drop-avatar" alt=""/>
                                   <div className="message-body">
                                       <h5>name</h5>
                                       <p>Lorem ipsum dolor sit.</p>
                                   </div>
                               </div>
                               <div className="message-item">
                                   <img src={UserImg} className="drop-avatar" alt=""/>
                                   <div className="message-body">
                                       <h5>name</h5>
                                       <p>Lorem ipsum dolor sit.</p>
                                   </div>
                               </div>
                           </div>
                           <div className="dropdown-menu-footer">
                               <Link to="">see all</Link>
                           </div>
                       </div>

                   </div>
                   <div className="dropdown">
                       <button ref={not_toggle_el}  className="icon-btn dropdown_toggle">
                           <i className="fas fa-bell"/>
                           <span className="drop-toggle-badge">23</span>
                       </button>
                       <div  ref={not_content_el} className="dropdown-menu">
                           <div className="notification-drop">
                               <div className="notification-item">
                                  <div className="info">
                                      <h5>item</h5>
                                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                          <small><span>2 days ago</span></small>
                                      </p>
                                  </div>
                                  <i className="fas fa-comment-alt"/>
                               </div>
                           </div>
                           <div className="dropdown-menu-footer">
                               <Link to="">see all</Link>
                           </div>
                       </div>
                   </div>
                   <div className="dropdown">
                       <button ref={user_toggle_el} className="icon-btn dropdown_toggle">
                           <i className="fas fa-user-circle"/>
                       </button>
                       <div  ref={user_content_el} className="dropdown-menu">
                           <div className="drop-user-info">
                               <h1><Link to="/account">Godfrey Kangwa</Link></h1>
                               <p>master</p>
                           </div>
                           <div className="dropdown-list">
                               <Link to=""><i className="fas fa-envelope"/><span>Message</span></Link>
                               <Link to="/account"><i className="fas fa-user-circle"/><span>Account</span></Link>
                               <Link to="/account/settings"><i className="fas fa-cog"/><span>Settings</span></Link>
                               <Link to=""><i className="fas fa-shield"/><span>Create user</span></Link>
                               <button className="icon-btn" onClick="">
                                   <i className="fas fa-power-off"/><span>Logout</span>
                               </button>
                           </div>
                       </div>
                   </div>
               </nav>
           </div>
        </header>
    );
};
export default Header;