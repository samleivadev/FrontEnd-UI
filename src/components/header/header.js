import Logo from '../../assets/metaCT-Logo.png'
import { NavLink } from 'react-router-dom';
import React from 'react';
import style from '../header/header.module.css';

const Header = () => {
    return(
        <div className={style.header}>
            <div className={style.logo}>
                <img src={Logo} alt="bug" height={100} />
            </div>
            <ul className={style.menus}>
                <NavLink className={style.menu} to='/'>Home</NavLink>
                <NavLink className={style.menu} to='/kiosk'>Kiosk</NavLink>
                <NavLink className={style.menu} to='/kindle'>Kindle</NavLink>
            </ul>
        </div>
    );
}

export default Header;