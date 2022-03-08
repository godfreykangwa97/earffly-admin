import React from "react";

import {Link} from "react-router-dom";
import BigChart from "../data/big-chart";
import BrowserData from "../data/browser-usage-data";
import UserImg from '../assets/img/photo_2021-11-11_08-27-42.jpg';
import Sidebar from "../components/sider";
import Header from "../components/header";
import FloatingChat from "./chat/floating";
const Dashboard = () => {
    return (
        <div className="wrapper">
            <Sidebar/>
            <div className="main">
                <Header/>
               <div className="main-contents p-s-2">
                   <div className="dashboard">
                       <div className="static-cards">
                           <div className="static-grid g-4">
                               <div className="static-card space-between bg-light br-5 p-20">
                                   <div className="counter">
                                       <h1>23K+</h1>
                                       <h3>visitors</h3>
                                   </div>
                                   <i className="fas fa-suitcase fa-2x"/>
                               </div>
                               <div className="static-card space-between bg-light br-5 p-20">
                                   <div className="counter">
                                       <h1>23</h1>
                                       <h3>Recent music</h3>
                                   </div>
                                   <i className="fas fa-music fa-2x"/>
                               </div>
                               <div className="static-card space-between bg-light br-5 p-20">
                                   <div className="counter">
                                       <h1>100</h1>
                                       <h3>Streams</h3>
                                   </div>
                                   <i className="fas fa-stream fa-2x"/>
                               </div>
                               <div className="static-card space-between bg-light br-5 p-20">
                                   <div className="counter">
                                       <h1>10</h1>
                                       <h3>Blog</h3>
                                   </div>
                                   <i className="fas fa-blog fa-2x"/>
                               </div>
                           </div>
                       </div>

                       <div className="graphs m-t-2">
                           <div className="graphs-grid g-graph">
                               <div className="big-graph bg-light br-5 p-20">
                                   <BigChart/>
                               </div>
                               <div className="breakdown bg-light br-5 p-20">
                                   <div className="activity-card space-between">
                          <span>
                               <i className="fas fa-heart"/>
                               <p>Likes</p>
                          </span>
                                       <span>
                               <h5>60</h5>
                           </span>
                                   </div>
                                   <div className="activity-card space-between">
                          <span>
                               <i className="fas fa-users"/>
                               <p>Artists</p>
                          </span>
                                       <span>
                               <h5>65%</h5>
                           </span>
                                   </div>
                                   <div className="activity-card space-between">
                           <span>
                               <i className="fas fa-play"/>
                               <p>Plays</p>
                           </span>
                                   </div>
                                   <div className="activity-card space-between">
                          <span>
                               <i className="fas fa-download"/>
                               <p>Downloads</p>
                          </span>
                                   </div>
                                   <div className="activity-card space-between">
                           <span className="centered">
                               <i className="fas fa-shopping-cart"/>
                               <p>Sells</p>
                           </span>
                                   </div>
                               </div>
                           </div>
                       </div>

                       <div className="trending m-t-2">
                           <div className="trending-grid tr-grid">
                               <div className="trending-songs bg-light p-20 br-5">
                                   <div className="heading space-between">
                                       <h5>Trending songs</h5>
                                       <Link to=""><i className="fas fa-arrow-right"/></Link>
                                   </div>

                                   <table className="trending-songs-table">
                                       <thead>
                                       <tr className="">
                                           <th>Title</th>
                                           <th>Artist</th>
                                           <th>Plays</th>
                                           <th>Download</th>
                                           <th><i className="fas fa-share-alt"/></th>
                                       </tr>
                                       </thead>
                                       <tbody>
                                       <tr>
                                           <td>Call</td>
                                           <td>Mic</td>
                                           <td>23M</td>
                                           <td>200,00</td>
                                           <td className="inline-flex">
                                               <i className="fab fa-facebook-f"/>
                                               <i className="fab fa-twitter"/>
                                           </td>
                                       </tr>
                                       <tr>
                                           <td>Call</td>
                                           <td>Mic</td>
                                           <td>23M</td>
                                           <td>200,00</td>
                                           <td className="inline-flex">
                                               <i className="fab fa-facebook-f"/>
                                               <i className="fab fa-twitter"/>
                                           </td>
                                       </tr>
                                       <tr>
                                           <td>Call</td>
                                           <td>Mic</td>
                                           <td>23M</td>
                                           <td>200,00</td>
                                           <td className="inline-flex">
                                               <i className="fab fa-facebook-f"/>
                                               <i className="fab fa-twitter"/>
                                           </td>
                                       </tr>
                                       <tr>
                                           <td>Call</td>
                                           <td>Mic</td>
                                           <td>23M</td>
                                           <td>200,00</td>
                                           <td className="inline-flex">
                                               <i className="fab fa-facebook-f"/>
                                               <i className="fab fa-twitter"/>
                                           </td>
                                       </tr>
                                       <tr>
                                           <td>Call</td>
                                           <td>Mic</td>
                                           <td>23M</td>
                                           <td>200,00</td>
                                           <td className="inline-flex">
                                               <i className="fab fa-facebook-f"/>
                                               <i className="fab fa-twitter"/>
                                           </td>
                                       </tr>
                                       </tbody>
                                   </table>
                               </div>
                               <div className="trending-artists bg-light p-20 br-5">
                                   <div className="heading space-between">
                                       <h5>Trending songs</h5>
                                       <Link to="" className="btn">All</Link>
                                   </div>
                                   <table className="trending-artists-table">
                                       <thead>
                                       <tr className="">
                                           <th>Avatar</th>
                                           <th>Artist</th>
                                           <th>Skill</th>
                                           <th>Rating</th>
                                       </tr>
                                       </thead>
                                       <tbody>
                                       <tr>
                                           <td><img src={UserImg} className="table-avatar" alt=""/></td>
                                           <td>Mic</td>
                                           <td>Raper</td>
                                           <td className="text-main">
                                               <i className="fas fa-star"/>
                                               <i className="fas fa-star"/>
                                               <i className="fas fa-star"/>
                                               <i className="fas fa-star"/>
                                               <i className="fas fa-star"/>
                                           </td>
                                       </tr>
                                       <tr>
                                           <td><img src={UserImg} className="table-avatar" alt=""/></td>
                                           <td>Mic</td>
                                           <td>Raper</td>
                                           <td className="text-main">
                                               <i className="fas fa-star"/>
                                               <i className="fas fa-star"/>
                                               <i className="fas fa-star"/>
                                               <i className="fas fa-star"/>
                                               <i className="fas fa-star"/>
                                           </td>
                                       </tr>
                                       <tr>
                                           <td><img src={UserImg} className="table-avatar" alt=""/></td>
                                           <td>Mic</td>
                                           <td>Raper</td>
                                           <td className="text-main">
                                               <i className="fas fa-star"/>
                                               <i className="fas fa-star"/>
                                               <i className="fas fa-star"/>
                                               <i className="fas fa-star"/>
                                               <i className="fas fa-star"/>
                                           </td>
                                       </tr>
                                       <tr>
                                           <td><img src={UserImg} className="table-avatar" alt=""/></td>
                                           <td>Mic</td>
                                           <td>Raper</td>
                                           <td className="text-main">
                                               <i className="fas fa-star"/>
                                               <i className="fas fa-star"/>
                                               <i className="fas fa-star"/>
                                               <i className="fas fa-star"/>
                                               <i className="fas fa-star"/>
                                           </td>
                                       </tr>
                                       <tr>
                                           <td><img src={UserImg} className="table-avatar" alt=""/></td>
                                           <td>Mic</td>
                                           <td>Raper</td>
                                           <td className="text-main">
                                               <i className="fas fa-star"/>
                                               <i className="fas fa-star"/>
                                               <i className="fas fa-star"/>
                                               <i className="fas fa-star"/>
                                               <i className="fas fa-star"/>
                                           </td>
                                       </tr>
                                       </tbody>
                                   </table>
                               </div>
                           </div>

                       </div>

                       <div className="browser-usage m-t-2 bg-light br-5  p-20">
                           <h5>Browser usage</h5>
                           <div className="usage-grid g-1">
                               <div className="pie-chart">
                                   <BrowserData/>
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
export default Dashboard;