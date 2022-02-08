import React from 'react';
import {Link} from "react-router-dom";

//import Image from 'https://images.unsplash.com/photo-1638913660106-73b4bac0db09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60.jpg'

const Songs = () => {
    return (
        <div className="monitor-blog">
            <div className="opening-nav inline-flex">
                <Link to="/">Dashboard</Link>
                <Link to="/monitor/songs">Songs</Link>
            </div>
            <div className="heading space-between m-t-2">
                <h4>All Songs</h4>
                <Link to="/create/artist"><i className="fas fa-plus-circle"/><span>Upload</span></Link>
            </div>

            <div className="table-holder bg-light br-5 p-20 m-t-2">
                <div className="space-between">
                    <form action="" className="search-wrapper space-between">
                        <input type="search" placeholder="search" className="border-less"/>
                        <button className="icon-btn"><i className="fas fa-search text-main"/></button>
                    </form>
                </div>
                <table className="blog-table w-100 m-t-2">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th><input type="checkbox"/></th>
                        <th>Cover</th>
                        <th>Title</th>
                        <th>Artist</th>
                        <th>Streams</th>
                        <th>Download</th>
                        <th>Sells</th>
                        <th>Status</th>
                        <th>Option</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <th><input type="checkbox"/></th>
                        <td><Link to="/monitor/view/article/:id"><img src={Image} className="table-avatar" alt=""/></Link></td>
                        <td>growing up in zambia</td>
                        <td>biography</td>
                        <td>23,000</td>
                        <td>23,000</td>
                        <td>23,000</td>
                        <td>Published</td>
                        <td className="inline-flex">
                            <i className="fas fa-edit"/>
                            <i className="fas fa-trash"/>
                        </td>
                    </tr>

                    </tbody>
                </table>
                <div className="space-between m-t-2">
                    <div className="inline-flex f-l">
                        <span className="btn btn-muted">First</span>
                        <span className="btn btn-muted">Last</span>
                    </div>
                    <ul className="pagination ">
                        <li className="plain">
                            <i  className="pagination-link fas fa-arrow-left"/>
                        </li>
                        <li className="pagination-itm">
                            <span className="pagination-link">1</span>
                        </li>
                        <li className="pagination-itm">
                            <span className="pagination-link">2</span>
                        </li>
                        <li className="pagination-itm active">
                            <span className="pagination-link">3</span>
                        </li>
                        <li className="plain">
                            <i  className="pagination-link fas fa-arrow-right"/>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    );
};
export default Songs;