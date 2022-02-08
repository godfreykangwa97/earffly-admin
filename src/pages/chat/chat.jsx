import React from 'react';
import {Link} from "react-router-dom";
import User from '../../assets/img/photo_2021-11-11_08-27-42.jpg';
import Logo from '../../assets/site/mark.png';
const Chats = () => {
    return (
        <div className="chats">
            <div className="opening-nav inline-flex">
                <Link to="/">Dashboard</Link>
                <Link to="/chat/chat">Chats</Link>
            </div>

            <div className="big-chat-holder bg-light m-t-2 br-5">
               <div className="big-chat-user-list">
                   <form action="" className="search-wrapper">
                       <input type="search" placeholder="users"/>
                   </form>
                   <div className="groups">
                       <div className="big-chat-user-group space-between">
                           <img src={Logo} className="big-chat-avatar" alt=""/>
                           <div className="big-chat-message">
                             <h5>Admins</h5>
                          </div>
                       </div>
                       <div className="big-chat-user-group space-between">
                           <img src={User} className="big-chat-avatar" alt=""/>
                           <div className="big-chat-message">
                               <h5>The hive</h5>
                           </div>
                       </div>
                   </div>
                   <div className="big-chat-users">
                       <div className="big-chat-user-item space-between">
                           <img src={User} className="big-chat-avatar" alt=""/>
                           <div className="big-chat-message">
                               <h5>name</h5>
                               <p>Lorem ipsum dolor sit amet.<span>2 min ago</span></p>
                           </div>
                       </div>
                       <div className="big-chat-user-item space-between">
                           <img src={User} className="big-chat-avatar" alt=""/>
                           <div className="big-chat-message">
                               <h5>name</h5>
                               <p>Lorem ipsum dolor sit amet.<span>2 min ago</span></p>
                           </div>
                       </div>
                       <div className="big-chat-user-item space-between">
                           <img src={User} className="big-chat-avatar" alt=""/>
                           <div className="big-chat-message">
                               <h5>name</h5>
                               <p>Lorem ipsum dolor sit amet.<span>2 min ago</span></p>
                           </div>
                       </div>
                       <div className="big-chat-user-item space-between">
                           <img src={User} className="big-chat-avatar" alt=""/>
                           <div className="big-chat-message">
                               <h5>name</h5>
                               <p>Lorem ipsum dolor sit amet.<span>2 min ago</span></p>
                           </div>
                       </div>
                       <div className="big-chat-user-item space-between">
                           <img src={User} className="big-chat-avatar" alt=""/>
                           <div className="big-chat-message">
                               <h5>name</h5>
                               <p>Lorem ipsum dolor sit amet.<span>2 min ago</span></p>
                           </div>
                       </div>
                   </div>
               </div>
                <div className="big-chat-message-holder">
                    <div className="message-heading space-between">
                        <i className="fas fa-bars"/>
                        <div className="chat-user-info">
                            <img src={User} className="big-chat-avatar" alt=""/>
                        </div>
                    </div>

                    <div className="message-body"></div>

                    <div className="form-holder">
                        <form action="" className="send-message">
                            <button className="icon-btn"><i className="fas fa-smile"/></button>
                            <textarea name="" id="" placeholder="type..."></textarea>
                            <button className="icon-btn"><i className="fab fa-telegram-plane"/></button>
                            <button className="icon-btn"><i className="fas fa-microphone"/></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Chats;