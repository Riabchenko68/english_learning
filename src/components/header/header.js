import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import './header.css';

const Header = ({ onUkrainianService, onGermanService }) => {

    let { pathname } = useLocation();

    return (
        <div className='header'>
            <div className="header-logo"> 
                <Link to={"/"}> 
                    <img src="./english.png" alt="logo-img" />
                </Link>
            </div>
            <div>
                <div className='header-play'>
                    <Link to={"/play"} className={pathname === '/play' ? 'active' : ''} >
                        <h3>
                            play
                        </h3>
                    </Link>
                </div>
                <div className='header-play'>
                    <Link to={"/"} className={pathname === '/' ? 'active' : ''} >
                        <h3>
                            back
                        </h3>
                    </Link>
                </div>
            </div>
            <div className='header-button'>
                <button className='header-button-german' onClick={onGermanService} />
                <button className='header-button-ukrainian' onClick={onUkrainianService} />
            </div>
        </div>
    )
}

export default Header;