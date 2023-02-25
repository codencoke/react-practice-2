import React from 'react';
import styles from './Header.module.css';
import CartButton from "./CartButton/CartButton";

const Header = (props) => {
    return (
        <>
            <div className={styles.header}>
                ReactMeals
                <CartButton/>
                 1
            </div>
            <div className={styles['main-image']}>
                <img src={process.env.PUBLIC_URL + '/meals.jpg'} alt={'meals'}/>
            </div>
        </>
    );
};

export default Header;
