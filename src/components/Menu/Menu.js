import React from 'react';
import styles from '../Basic/Card.module.css';
import MealList from "../Meal/MealList";
import {DUMMY_MEALS} from "../../context/dummy-meals";

const Menu = (props) => {
    return (
        <div className={styles.card}>
            <MealList meals={DUMMY_MEALS}/>
        </div>
    );
};

export default Menu;
