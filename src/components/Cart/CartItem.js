import React, {useContext, useState} from 'react';
import FoodContext from "../../context/food-context";
import styles from './CartItem.module.css';
import stylesBasic from '../Basic/Input.module.css';

const CartItem = (props) => {
    const {foodContext, setFoodContext} = useContext(FoodContext);
    const [amount, setAmount] = useState(props.food.amount);

    const handleDec = () => {
        setAmount(prev => {
            return prev - 1;
        })
        props.setSum(prev => {
            return prev - props.food.price;
        });
    };

    const handleInc = () => {
        setAmount(prev => {
            return prev + 1;
        })
        props.setSum(prev => {
            return prev + props.food.price;
        });
    };

    return (
        <>
            <h2>{props.food.name}</h2>
            <div className={styles.summary}>
                <span className={styles.price}>${props.food.price}&nbsp;&nbsp;</span>
                <input className={styles.amount} value={`x ${amount}`}></input>
                <button className={`${styles.actions}`} onClick={handleDec}>-</button>
                <button className={`${styles.actions}`} onClick={handleInc}>+</button>
            </div>
        </>
    );
};

export default CartItem;