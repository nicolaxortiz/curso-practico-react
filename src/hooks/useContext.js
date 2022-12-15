import React from "react";

const initialState = {
    cart: [],
}

const useInitialState = () => {
    const [state, setState] = React.useState(initialState);
    const [totalprice, setTotalprice] = React.useState(0)
    const [page, setPage] = React.useState(1);

    const addToCart = (product) => {
        setState({
            ...state,
            cart: [...state.cart, product]
        })
        setTotalprice(totalprice + product.price);
        console.log(state);
    }

    const deleteToCart = (Product) => {
        const newState = state.cart.filter((item) => {
            return item.key != Product.key
        });

        setState({
            ...state,
            cart: newState
        })

        setTotalprice(totalprice - Product.price)

    }

    return{
        state,
        addToCart,
        totalprice,
        deleteToCart,
        page,
        setPage
    }
}

export {useInitialState}