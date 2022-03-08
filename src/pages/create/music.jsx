import React, {useState, useEffect} from 'react';

import {Link} from 'react-router-dom';
import Sidebar from "../../components/sider";
import Header from "../../components/header";
import FloatingChat from "../chat/floating";


const CreateMusic = () => {

    return (
        <div className="wrapper">
            <Sidebar/>
            <div className="main">
                <Header/>
                <div className="main-contents p-s-2">
                    <div className="create-music">
                        <div className="opening-nav inline-flex">
                            <Link to="/">Dashboard</Link>
                            <Link to="/monitor/music">Music</Link>
                            <Link to="/create/music">Upload music</Link>
                        </div>
                        <div className="heading space-between m-t-2">
                            <h4>Uploading music</h4>
                            <Link to="/monitor/music"><i className="fas fa-arrow-left"/><span>Back</span></Link>
                        </div>

                        <div className="music-upload-option flex flex-column justify-center align-center">
                            <Link to="/upload/album">Album</Link>
                            <Link to="/upload/single">Single</Link>
                        </div>

                    </div>
                </div>
            </div>
            <FloatingChat/>
        </div>

    );
};
export default CreateMusic;