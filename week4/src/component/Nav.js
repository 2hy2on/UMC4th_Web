import { Link } from 'react-router-dom';
import React from 'react';
import '../css/Nav.css';

const Nav = () => {
    return(
        <div>
            <div className='navbar'>
                <Link className="navbarMenu" to={"/"}>Main</Link>
                <Link className="navbarMenu" to={"/about"}>About</Link>
            </div>
        </div>
    );
}

export default Nav;