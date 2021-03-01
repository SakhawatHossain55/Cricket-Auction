import React from 'react';
import logo from '../../bangladesh cricket logo.png';
const Header = () => {
    return (

        <nav className="container navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img width={"100px"} src={logo} alt="" />
                </a>
                <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Other players</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="#">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>

    );
};


export default Header;