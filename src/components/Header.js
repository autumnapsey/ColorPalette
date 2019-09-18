// @flow
import React from 'react';
import {Link} from "react-router-dom";
import ReactSVG from 'react-svg';
import styles from './Header.css';
import NewEngenLogo from '../../design/NewEngen-Logo.svg';
import CartIcon from '../../design/CartIcon.svg';
import CartCounter from './CartCounter';

const Header = () => (
    <div className={styles.header}>
        <div className={styles.newEngen}>
            <Link to="/">
                <ReactSVG src={NewEngenLogo} />
            </Link>
        </div>
        <div className={styles.cart}>
            <Link to="/cart">
                <CartCounter />
                <ReactSVG src={CartIcon} />
            </Link>
        </div>
    </div>
);

export default Header;