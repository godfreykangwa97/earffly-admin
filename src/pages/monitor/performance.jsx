import React from 'react';
import {Link} from "react-router-dom";

//import Image from 'https://images.unsplash.com/photo-1638913660106-73b4bac0db09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'

const Performance = () => {
    return (
        <div className="performance">
            <div className="opening-nav inline-flex">
                <Link to="/">Dashboard</Link>
                <Link to="/monitor/performance">Performance</Link>
            </div>
           <div className="space-between">
               <h1>Insights</h1>

               <div className="inline-flex">
                   <Link to="/monitor/facebook"><i className="fab fa-facebook-f"/></Link>
                   <Link to="/monitor/twitter"><i className="fab fa-twitter"/></Link>
                   <Link to="/monitor/instagram"><i className="fab fa-instagram"/></Link>
                   <Link to="/monitor/youtube"><i className="fab fa-youtube"/></Link>
               </div>
           </div>
            <div className="overall-stat g-4 m-t-2">
                <div className="over-all-stat-card bg-light br-5 p-20">
                     <h5>Reach out</h5>
                    <div className="count">
                        <h1>34,657,789</h1>
                        <h4>56%</h4>
                        <p>Jan - March</p>
                    </div>

                </div>
                <div className="over-all-stat-card bg-light br-5 p-20">
                    <h5>Streams</h5>
                    <div className="count">
                        <h1>23M</h1>
                        <h4>86%</h4>
                        <p>Jan - March</p>
                    </div>

                </div>
                <div className="over-all-stat-card bg-light br-5 p-20">
                    <h5>Likes</h5>
                    <div className="count">
                        <h1>348K</h1>
                        <h4>56%</h4>
                        <p>Jan - March</p>
                    </div>

                </div>
                <div className="over-all-stat-card bg-light br-5 p-20">
                    <h5>Downloads</h5>
                    <div className="count">
                        <h1>100,000</h1>
                        <h4>56%</h4>
                        <p>Jan - March</p>
                    </div>

                </div>
            </div>
            <div className="table-holder m-t-2 bg-light p-20 br-5">
               <div className="space-between">
                   <h4>Per Item</h4>

                   <select name="" id="">
                       <option value="">Artist</option>
                       <option value="">Blog</option>
                       <option value="">Music</option>
                   </select>
               </div>
                <table className="per-item-table m-t-2 w-100">
                    <thead className="w-100">
                      <tr>
                          <th>Cover</th>
                          <th>Name</th>
                          <th>Category</th>
                          <th>Reach out</th>
                          <th>Likes</th>
                          <th>Comments</th>
                          <th>Downloads</th>
                          <th>Sells</th>
                      </tr>
                    </thead>
                    <tbody className="w-100">
                       <tr>
                           <td></td>
                           <td></td>
                           <td></td>
                           <td>blog</td>
                           <td>234,894</td>
                           <td>234,894</td>
                           <td>234,894</td>
                           <td>K23,457.00</td>
                       </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};
export default Performance;