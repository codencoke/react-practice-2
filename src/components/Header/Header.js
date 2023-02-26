import React, {useContext, useEffect, useState} from 'react';
import styles from './Header.module.css';
import CartButton from "./CartButton/CartButton";
import FoodContext from "../../context/food-context";

const Header = (props) => {
    const {foodContext} = useContext(FoodContext);

    const [sum, setSum] = useState(0);

    useEffect(() => {
        let temp = 0;
        foodContext.forEach(food => {
            if (food.amount) {
                temp += +food.amount;
            }
        })
        setSum(temp);
        console.log("triggered", foodContext.length);
    }, [foodContext]);

    return (
        <>
            <div className={styles.header}>
                ReactMeals
                <CartButton sum={sum}/>
                ..
            </div>
            <div className={styles['main-image']}>
                <img src={process.env.PUBLIC_URL + '/meals.jpg'} alt={'meals'}/>
            </div>
        </>
    );
};

export default Header;
