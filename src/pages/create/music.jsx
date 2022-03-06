import React, {useState, useEffect} from 'react';

import {Link} from 'react-router-dom';


const CreateMusic = () => {
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

            <form  className="upload-form m-t-2">
                <div className="g-2">
                    <label htmlFor="cover">
                        <div className="cover">
                            {imagesURLs.map(imageSrc => <img src={imageSrc} alt=""/>)}
                            <input type="file" accept="images/*" onChange={onImageChange}  id="cover" hidden/>
                            <h4 className="text-main">Cover</h4>
                        </div>
                    </label>

                    <div className="detail bg-light br-5 p-20">
                        <div className="form-group">
                            <select name="category" id="">
                                <option value="single">Single</option>
                                <option value="album">Album</option>
                            </select>
                        </div>
                    </div>
                </div>
            </form>

        </div>
    );
};
export default CreateMusic;