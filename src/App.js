import React from 'react';
import FoodContext from "./context/food-context";
import Header from "./components/Header/Header";
import MealsSummary from "./components/MealsSummary/MealsSummary";

const App = () => {
    return (
        <FoodContext.Provider>
            <Header/>
            <MealsSummary/>
        </FoodContext.Provider>
    );
};

export default App;