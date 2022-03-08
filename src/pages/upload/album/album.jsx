import React, {useEffect, useState} from "react";

import {Link} from "react-router-dom";
import Header from "../../../components/header";
import Sidebar from "../../../components/sider";
import FloatingChat from "../../chat/floating";

const UploadAlbum = () =>{

    const [images, setImages] = useState([]);
    const [imagesURLs, setImagesURLs] = useState([]);

    useEffect(() => {
        if (images.length < 1) return;
        const newImageUrls = [];
        images.forEach(image => newImageUrls.push(URL.createObjectURL(image)));
        setImagesURLs(newImageUrls);
    }, [images]);
    function onImageChange(e) {
        setImages([...e.target.files]);
    }

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
                            <Link to="/upload/album">album</Link>
                        </div>
                        <div className="heading space-between m-t-2">
                            <h4>Uploading album</h4>
                            <Link to="/monitor/music"><i className="fas fa-arrow-left"/><span>Back</span></Link>
                        </div>

                        <form className="form-holder m-t-2">
                            <div className="g-2">
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="title"
                                        placeholder="Song title"
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="artist"
                                        placeholder="Artist"
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="artist"
                                    placeholder="who featured in the song"
                                />
                            </div>
                            <div className="form-group">
                                <select name="genre" >
                                    <option>Genre</option>
                                    <option value="funk">funk</option>
                                </select>
                            </div>
                            <div className="g-2">
                                <div className="show-cover flex justify-center align-center">
                                    <label htmlFor="cover" className="btn bordered-btn">Select cover</label>
                                    {imagesURLs.map(imageSrc => <img src={imageSrc} alt=""/>)}
                                </div>
                                <div className="add-song flex flex-column justify-center align-center">
                                    <label htmlFor="song" className="btn bordered-btn">Add song</label>
                                    <small>Mp3 or Wave formats, maximum size of 12MB</small>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="description">
                                    <textarea name="" id="" cols="30" rows="10"></textarea>
                                </div>
                            </div>
                            <div className="g-2 p-c">
                                <div className="form-group">
                                    <input type="text" placeholder="Produced by"/>
                                </div>
                                <div className="form-group">
                                    <input type="text" placeholder="holder of copyright"/>
                                </div>
                            </div>
                            <div className="form-group text-right">
                                <input
                                    type="file"
                                    name="title"
                                    accept="images/*"
                                    onChange={onImageChange}
                                    placeholder="Song title"
                                    id="cover"
                                    hidden
                                />
                                <input
                                    type="file"
                                    name="title"
                                    accept="images/*"
                                    id="song"
                                    hidden
                                />
                                <button className="btn submit-btn">Upload</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <FloatingChat/>
        </div>
    );

};
export default UploadAlbum;