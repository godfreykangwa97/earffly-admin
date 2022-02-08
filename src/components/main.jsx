import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from "./header";

import Dashboard from "../pages/dashboard";
//monitor pages
import Blog from "../pages/monitor/blog";
import Performance from "../pages/monitor/performance";
import Artists from "../pages/monitor/artists";
import Songs from "../pages/monitor/songs";
//create pages
import CreateBlog from "../pages/create/create-blog";
import CreateArtist from "../pages/create/artist";
import CreateMusic from "../pages/create/music";
//apps
import Chats from "../pages/chat/chat";



const Main = () => {
    return (
        <main className="main">
            <Header/>
           <div className="main-contents  p-s-2">
               <Switch>
                   <Route exact path="/" component={Dashboard}>
                      <Dashboard/>
                   </Route>
                   <Route exact  path="/create/blog" component={CreateBlog}>
                       <CreateBlog/>
                   </Route>
                   <Route exact path="/monitor/blog" component={Blog}>
                       <Blog/>
                   </Route>
                   <Route exact path="/create/artist" components={CreateArtist}>
                       <CreateArtist/>
                   </Route>
                   <Route exact path="/create/music" components={CreateMusic}>
                       <CreateMusic/>
                   </Route>
                   <Route exact path="/monitor/performance" components={Performance}>
                       <Performance/>
                   </Route>
                   <Route exact path="/monitor/artists" components={Artists}>
                       <Artists/>
                   </Route>
                   <Route exact path="/chat/chat" components={Chats}>
                       <Chats/>
                   </Route>
                   <Route exact path="/monitor/songs" components={Songs}>
                       <Songs/>
                   </Route>
               </Switch>
           </div>
        </main>
    );
};
export default Main;