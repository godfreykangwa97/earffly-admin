import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from "../pages/dashboard";
import CreateBlog from "../pages/create/create-blog";
import Blog from "../pages/monitor/blog";
import CreateArtist from "../pages/create/artist";
import CreateMusic from "../pages/create/music";
import Performance from "../pages/monitor/performance";
import Artists from "../pages/monitor/artists";
import Chats from "../pages/chat/chat";
import Songs from "../pages/monitor/songs";
import UploadAlbum from "../pages/upload/album/album";
import Account from "../pages/profile/account";


const Wrapper = () => {
    return (
       <div className="holder">
           <Routes>
               <Routes>

                   <Route index path="/dashboard" component={<Dashboard/>}/>

                   <Route exact  path="/create/blog" element={<CreateBlog/>}/>

                   <Route exact path="/monitor/blog" element={<Blog/>}/>

                   <Route exact path="/create/artist" element={<CreateArtist/>}/>

                   <Route exact path="/create/music" element={<CreateMusic/>}/>


                   <Route exact path="/monitor/performance" element={<Performance/>}/>

                   <Route exact path="/monitor/artists" element={<Artists/>}/>


                   <Route exact path="/chat/chat" element={<Chats/>}/>


                   <Route exact path="/monitor/songs" element={<Songs />}/>

                   <Route exact path="/upload/album" element={<UploadAlbum />}/>

                   <Route exact path="/account" element={<Account />}/>


               </Routes>
           </Routes>
       </div>
    );
};
export default Wrapper;