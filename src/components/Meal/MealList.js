import React from 'react';
import styles from './AvailableMeals.module.css';
import MealItem from "./MealItem";

const MealList = (props) => {
    return (
        <ul className={styles.meals}>
            {props.meals.map(meal => {
                return <MealItem meal={meal} key={meal.id}/>;
            })}
        </ul>
    );
};

export default MealList;
