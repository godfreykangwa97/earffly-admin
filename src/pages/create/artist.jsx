import React from 'react';

import {Link} from 'react-router-dom';

const CreateArtist = () => {

    return (
        <div className="create-blog">
            <div className="opening-nav inline-flex">
                <Link to="/">Dashboard</Link>
                <Link to="/monitor/artists">Artists</Link>
                <Link to="/create/artist">Register artist</Link>
            </div>
            <div className="heading space-between m-t-2">
                <h4>Registering artists</h4>
                <Link to="/monitor/artists"><i className="fas fa-arrow-left"/><span>Back</span></Link>
            </div>

            <div className="reg-artist bg-light br-5 m-t-2 p-20">
                <div className="reg-grid g-2">
                    <form action="" className="gap-12">
                        <div className="g-2">
                            <div className="form-group">
                                <input type="text" placeholder="First name"/>
                            </div>
                            <div className="form-group">
                                <input type="text" placeholder="Last name"/>
                            </div>
                        </div>
                        <div className="g-2">
                            <div className="form-group">
                                <select name="gender" id="">
                                    <option value="">Gender</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <input type="text" placeholder="Artist name"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <input type="email" placeholder="Email address"/>
                        </div>

                        <div className="form-group inline-flex">
                           <button type="submit" className="btn submit-btn">Register</button>
                           <button type="reset" className="btn reset-btn">Cancel</button>
                        </div>
                    </form>
                    <div className="reg-text">
                        <h1>Registering</h1>
                        <h1>Artist</h1>
                    </div>
                </div>
            </div>

        </div>
    );
};
export default CreateArtist;