import { NavLink } from 'react-router-dom';
import React from 'react';
import style from '../header/header.module.css';

const Header = () => {
    return(
        <div className={style.header}>
            <h2>Control Tower</h2>
            <ul>
                <NavLink className={style.menu} to='/'>Home</NavLink>
                <NavLink className={style.menu} to='/kiosk'>Kiosk</NavLink>
            </ul>
        </div>
    );
}

export default Header;