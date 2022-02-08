import React, {useRef} from 'react';
import {Link} from 'react-router-dom';
import User from '../../assets/img/photo_2021-11-11_08-27-42.jpg';
const clickOutsideRef = (chat_ref, open_ref) =>{
    document.addEventListener("click", (e) => {
        if(open_ref.current && open_ref.current.contains(e.target)){
            chat_ref.current.classList.toggle('open');
        } else {
            if (chat_ref.current && !chat_ref.current.contains(e.target)){
                chat_ref.current.classList.remove('open');
            }
        }
    });
};
const FloatingChat = () => {

    const chat_toggle_el = useRef(null);
    const chat_content_el = useRef(null);

    clickOutsideRef(chat_content_el, chat_toggle_el);

    return (
        <div className="floating-chat">
            <div ref={chat_content_el} className="floating-chat-holder">
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
            <button ref={chat_toggle_el}><i className="fas fa-comment-alt"/></button>
        </div>
    );
};
export default FloatingChat;