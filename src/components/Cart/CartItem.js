import React, {useContext} from 'react';
import FoodContext from "../../context/food-context";

const CartItem = (props) => {
    const {foodContext, setFoodContext} = useContext(FoodContext);

    return (
        <>
            <h2>{props.food.name}</h2>
            <p>{props.food.description}</p>
            <span>${props.food.price}</span>
        </>
    );
};

export default CartItem;