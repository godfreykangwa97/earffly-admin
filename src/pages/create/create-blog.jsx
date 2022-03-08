import React, {useState, useEffect} from 'react';


// Require Editor CSS files.
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";

import FroalaEditorComponent from "react-froala-wysiwyg";

import {Link} from 'react-router-dom';
import Sidebar from "../../components/sider";
import Header from "../../components/header";
import FloatingChat from "../chat/floating";

const CreateBlog = () => {
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
                    <div className="create-blog">
                        <div className="opening-nav inline-flex">
                            <Link to="/">Dashboard</Link>
                            <Link to="/monitor/blog">Blog</Link>
                            <Link to="/create/blog">Create blog</Link>
                        </div>
                        <div className="heading space-between m-t-2">
                            <h4>Creating blog</h4>
                            <Link to="/monitor/blog"><i className="fas fa-arrow-left"/><span>Back</span></Link>
                        </div>

                        <form action="" className="create-blog-form  m-t-2">
                            <label htmlFor="file">
                                <div className="Show-Image">
                                    {imagesURLs.map(imageSrc => <img src={imageSrc} alt=""/>)}
                                </div>
                            </label>

                            <div className="main-form-info">
                                <div className="g-1">
                                    <div className="form-group">
                                        <h5>Blog title</h5>
                                        <input type="text" className="input-gray input-p w-100" placeholder="Blog title"/>
                                    </div>
                                </div>
                                <div className="g-2">
                                    <div className="form-group">
                                        <h5>Category</h5>
                                        <input type="text" className="input-gray input-p w-100" placeholder="category"/>
                                    </div>
                                    <div className="form-group">
                                        <h5>Tags</h5>
                                        <input type="text" className="input-gray input-p w-100" placeholder="Tag" id="tags"/>
                                    </div>
                                </div>
                                <div className="g-1">
                                    <div className="form-group">
                                        <h5>Main content</h5>
                                        <FroalaEditorComponent tag='textarea'/>
                                    </div>
                                </div>
                                <div className="g-1">
                                    <div className="form-group inline-flex">
                                        <label htmlFor="file"><i className="fas fa-image"/></label>
                                        <label htmlFor="tags"><i className="fas fa-tag"/></label>
                                    </div>
                                </div>
                                <div className="g-1">
                                    <input type="file" accept="images/*" onChange={onImageChange} id="file" hidden/>
                                    <div className="form-group inline-flex">
                                        <button type="submit" className="btn submit-btn">Create</button>
                                        <button type="reset" className="btn reset-btn">Cancel</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <FloatingChat/>
        </div>

    );
};

export default CreateBlog;