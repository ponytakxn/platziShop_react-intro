import { useState } from 'react';

const initialState = {
    cart: [],
}

const useInitialState = () => {
    const [state, setState] = useState(initialState);
    const [toggleOrders, setToggleOrders] = useState(false);

    const addToCart = (payload) => {
        setState({
            ...state,
            cart: [...state.cart, {...payload, idCart: state.cart.length+1}]
        });
    };

    const removeFromCart = (payload) => {
        setState({ 
            ...state,
            cart: state.cart.filter(items => items.id !== payload.id),
        });
    }

    return {
        state,
        addToCart,
        removeFromCart,
        toggleOrders,
        setToggleOrders
    }
}

export default useInitialState;