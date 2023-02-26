import React, {useContext} from 'react';
import styles from './HeaderCartButton.module.css';
import CartIcon from "./CartIcon";
import Badge from "./Badge";
import CartOpen from "../../../context/cart-open";

const CartButton = (props) => {
    const {isOpen, setIsOpen} = useContext(CartOpen);

    const handleClick = (evt) => {
        evt.preventDefault();
        setIsOpen(true);
        console.log(isOpen);
    }

    return (
        <>
            <div className={styles.button} onClick={handleClick}>
                <CartIcon className={`${styles.icon} ${styles.icon}`}/>
                Your Cart
                <Badge sum={props.sum}/>
            </div>
        </>
    );
};

export default CartButton;
