import React from "react";

import Logo from "../../assets/site/mark.png";
import {Link} from "react-router-dom";

const Login = () => {
    return (
        <div className="login-page">
            <div className="form-holder">
                <div className="opening text-center">
                    <img src={Logo} alt="Earfly"/>
                    <h3>Login into account</h3>
                </div>
                <form action="">
                    <div className="form-group">
                        <input type="text" placeholder="Email address or username"/>
                    </div>

                    <div className="form-group">
                        <input type="password" placeholder="Password"/>
                    </div>

                    <div className="form-group">
                        <button type="submit" className="btn submit-btn">Login</button>
                    </div>
                </form>
                <div className="form-group text-center">
                    <h1>- OR -</h1>
                    <p>Forgot password <Link to="">reset</Link></p>
                </div>
            </div>
        </div>
    );
}
export default Login;