import React, {useContext, useReducer} from 'react';
import styles from './MealItem.module.css';
import stylesInput from '../Basic/Input.module.css';
import stylesCart from '../Header/CartButton/HeaderCartButton.module.css';
import FoodContext from "../../context/food-context";

const MealItem = (props) => {
    const amountReducer = (state, action) => {
        if (action.type === 'DEFAULT') {
            return {value: action.value};
        }
        return {value: 1};
    }

    const [amount, dispatchAmount] = useReducer(amountReducer, {value: 1});

    const {foodContext, setFoodContext} = useContext(FoodContext);

    const changeHandler = (evt) => {
        dispatchAmount({type: 'DEFAULT', value: evt.target.value});
    }

    const handleAdd = (evt) => {
        evt.preventDefault();
        const newItem = {
            name: props.meal.name,
            price: props.meal.price,
            amount: +amount.value,
            id: props.meal.id
        }
        let flag = false;
        foodContext.forEach((food, i) => {
            if (food.id === newItem.id) {
                setFoodContext(prev => {
                    prev[i].amount += +newItem.amount;
                    prev = [...prev, {dummy:'dummy'}];
                    return prev;
                })
                flag = true
            }
        })
        if (!flag) {
            setFoodContext(prev => {
                prev = [...prev, newItem];
                return prev;
            })
        }
        console.log(foodContext);
    }

    return (
        <li>
            <div className={styles.meal}>
                <h3>{props.meal.name}</h3>
                <p className={styles.description}>{props.meal.description}</p>
                <p className={styles.price}>${props.meal.price}</p>
                <form className={stylesInput.input}>
                    <label htmlFor={'amount-' + props.meal.id}>Amount</label>
                    <input id={'amount-' + props.meal.id} value={amount.value} onChange={changeHandler}
                           type={'number'}/>
                    <button className={stylesCart.button} onClick={handleAdd} type={"submit"}>+ Add</button>
                </form>
            </div>
        </li>
    );
};

export default MealItem;
