import React from 'react';
import styles from './HeaderCartButton.module.css';
import CartIcon from "./CartIcon";

const CartButton = (props) => {
    return (
        <div className={styles.button}>
            <CartIcon className={styles.icon}/>
            Your Cart
        </div>
    );
};

export default CartButton;
