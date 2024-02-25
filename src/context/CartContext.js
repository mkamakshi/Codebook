import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../reducers";

const cartInitialState = {
    total: 0,
    productList:[]
}

const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [state, dispatch] = useReducer(cartReducer, cartInitialState);

    function addToCart(product){
        const updatedList = state.productList.concat(product);
        const updatedTotal = state.total + product.price;
       

        dispatch({
            type: "ADD_TO_CART",
            payload: {
                products: updatedList,
                total: updatedTotal
            }
        })
    }
    function removeFromCart(product){
        const updatedList = state.productList.filter(item => item.id !== product.id);
        const updatedTotal = state.total - product.price;

        dispatch({
            type: "REMOVE_FROM_CART",
            payload: {
                products: updatedList,
                total: updatedTotal
            }
        })
    }

    function clearCart(){
        dispatch({
            type: "CLEAR_CART",
            payload: {
                products: [],
                total: 0
            }
        })
    }

 
    const value = {
        state, 
        total: state.total,
        products: state.productList,
        addToCart,
        removeFromCart,
        clearCart
       
    }
    

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    const context = useContext(CartContext);
    return context;
}