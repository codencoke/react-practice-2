import React, {useContext, useState} from 'react';
import styles from './Cart.module.css'
import FoodContext from "../../context/food-context";
import CartItem from "./CartItem";
import CartOpen from "../../context/cart-open";
import ReactDOM from "react-dom";
import stylesModal from "../Basic/Modal.module.css";

const Modal = (props) => {
    return (
        <>
            <div className={stylesModal.backdrop} onClick={props.onClick}></div>
            <div className={stylesModal.modal}>
                <CartModal/>
            </div>
        </>
    );
}

const CartModal = (props) => {
    const {foodContext} = useContext(FoodContext);
    const {setIsOpen} = useContext(CartOpen);

    let tempSum = 0;
    foodContext.forEach(food => {
        if (food.amount) {
            tempSum += +(food.price * food.amount);
        }
    });

    const [sum, setSum] = useState(tempSum);


    return (
        <div className={styles.cartItems}>
            {foodContext.map(food => {
                if (food.amount) {
                    return <CartItem key={food.id} food={food} setSum={setSum}/>
                }
                return '';
            })}
            <div className={styles.total}>
                Total: ${sum.toFixed(2)}
                <button onClick={() => {
                    setIsOpen(false)
                }}>cancel
                </button>
                <button>order</button>
            </div>
        </div>
    );
}

const Cart = (props) => {

    const {isOpen, setIsOpen} = useContext(CartOpen);

    return (
        <>
            {isOpen && ReactDOM.createPortal(<Modal
                onClick={(evt) => {
                    evt.preventDefault();
                    setIsOpen(false);
                }}/>, document.getElementById('modal-root'))}
        </>
    );
};

export default Cart;