import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/site/mark.png';
import UserImg from '../assets/img/photo_2021-11-11_08-27-42.jpg';
const  Sidebar = () => {
    return (
        <aside className="sidebar">
           <div className="sidebar-logo-holder">
               <Link to="/"><img src={Logo} className="logo" alt="logo"/></Link>
           </div>
            <div className="sidebar-user-bar inline-flex">
                <div className="avatar">
                   <Link to="/account"><img src={UserImg} className="sidebar-avatar" alt="username"/></Link>
                </div>
                <div className="sidebar-name">
                    <h4>Name</h4>
                    <h5 className="text-main">username</h5>
                </div>
            </div>
            <div className="sidebar-navigation">
               <Link to="/"><i className="fas fa-home"/><span>Dashboard</span></Link>
               <Link to="/chat/chat"><i className="fas fa-comment-alt"/><span>Chat</span></Link>
               <Link to="/"><i className="fas fa-calendar"/><span>Calendar</span></Link>
               <Link to="/"><i className="fas fa-bell"/><span>Notification</span></Link>
                <div className="nav-tab">
                    <h5>Monitor</h5>
                    <div className="nav-list">
                        <Link to="/monitor/artists" ><i className="fas fa-users"/><span>Artists</span></Link>
                        <Link to="/monitor/blog"><i className="fas fa-layer-group"/><span>Blog</span></Link>
                        <Link to="/monitor/songs"><i className="fas fa-file-audio"/><span>Songs</span></Link>
                        <Link to="/monitor/performance"><i className="fas fa-chart-pie"/><span>Performance</span></Link>
                        <Link to="/monitor/performance"><i className="fas fa-shield"/><span>User</span></Link>
                    </div>
                </div>
               <div className="nav-tab">
                   <h5>Create</h5>
                   <div className="nav-list">
                       <Link to="/create/artist"><i className="fas fa-user"/><span>Artist</span></Link>
                       <Link to="/create/blog"><i className="fas fa-book-reader"/><span>Blog</span></Link>
                       <Link to="/create/music"><i className="fas fa-music"/><span>Music</span></Link>
                   </div>
               </div>
            </div>
        </aside>
    );
}
export default Sidebar;