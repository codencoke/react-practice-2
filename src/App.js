import React, {useState} from 'react';
import FoodContext from "./context/food-context";
import Header from "./components/Header/Header";
import MealsSummary from "./components/MealsSummary/MealsSummary";
import Menu from "./components/Menu/Menu";
import CartOpen from "./context/cart-open";
import Cart from "./components/Cart/Cart";

const App = (props) => {
    const [foodContext, setFoodContext] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    return (
        <FoodContext.Provider value={{foodContext, setFoodContext}}>
            <CartOpen.Provider value={{isOpen, setIsOpen}}>
                <Header/>
                <MealsSummary/>
                <Menu/>
                <Cart/>
            </CartOpen.Provider>
        </FoodContext.Provider>
    );
};

export default App;