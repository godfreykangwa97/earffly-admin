import React, {useRef, useState} from 'react';
import {Link} from 'react-router-dom';
import User from '../../assets/img/photo_2021-11-11_08-27-42.jpg';

const FloatingChat = () => {



    const [isActive, setActive] = useState("false");

    const handleToggle = () => {
        setActive(!isActive);
    };

    return (
        <div className="floating-chat">
            <div  className={`floating-chat-holder ${isActive ? "" : "open"}`}>
               <div className="chat-heading">
                   <h4>Chat</h4>
                   <span>
                       <i className="fas fa-users"/>
                       <Link to="/chat/chat">All</Link>
                   </span>

               </div>
                <div className="chat-list">
                    <form action="" className="search-wrapper">
                        <input type="search" placeholder="find user"/>
                    </form>
                   <div className="chat-user-list">
                       <div className="chat-user-item inline-flex">
                           <img src={User} className="chat-avatar" alt=""/>
                           <div className="chat-small-body inline-flex">
                               <h5>Name</h5>
                               <i className="fas fa-circle"/>
                           </div>
                       </div>
                       <div className="chat-user-item inline-flex">
                           <img src={User} className="chat-avatar" alt=""/>
                           <div className="chat-small-body inline-flex">
                               <h5>Name</h5>
                               <i className="fas fa-circle"/>
                           </div>
                       </div>
                       <div className="chat-user-item inline-flex">
                           <img src={User} className="chat-avatar" alt=""/>
                           <div className="chat-small-body inline-flex">
                               <h5>Name</h5>
                               <i className="fas fa-circle"/>
                           </div>
                       </div>
                       <div className="chat-user-item inline-flex">
                           <img src={User} className="chat-avatar" alt=""/>
                           <div className="chat-small-body inline-flex">
                               <h5>Name</h5>
                               <i className="fas fa-circle"/>
                           </div>
                       </div>
                       <div className="chat-user-item inline-flex">
                           <img src={User} className="chat-avatar" alt=""/>
                           <div className="chat-small-body inline-flex">
                               <h5>Name</h5>
                               <i className="fas fa-circle"/>
                           </div>
                       </div>
                   </div>
                </div>
                <div className="chat-body"></div>
            </div>
            <button onClick={handleToggle}><i className="fas fa-comment-alt"/></button>
        </div>
    );
};
export default FloatingChat;