import React from "react";
import { Link } from 'react-router-dom';
import NavBar from "./NavBar";
import "./Header.css";

const Header = () => {
    return(
        <header className="col-sm-12 col-md-4 col-lg-3 py-5 header">
            <div className="row">
                <Link to="/" className="link-logo"><h1 className="col-sm-12 title"><span className="s1">My</span><span className="s2">super</span><span className="s3">hero</span><span className="s4">app</span></h1></Link>
                <NavBar />
            </div>    
        </header>
    )
}

export default Header;