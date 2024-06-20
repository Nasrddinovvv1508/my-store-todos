import { createContext, useEffect, useReducer, useState } from "react";
import { produce } from "immer";

export let GlobalContext = createContext();

function stateFromLocalStorage() {
    return (
        JSON.parse(localStorage.getItem(`mystore`)) || {
            user: null,
            products: [],
            total: 0,
            isAuthChange: false,
        }
    );
}

function GlobalContextProvider({ children }) {

    let changeState = (state, action) => {
        let { type, payload } = action

        switch (type) {
            case `LOG_IN`:
                return { ...state, user: payload }
            case `LOG_OUT`:
                return { ...state, user: null }
            case `AUTH_CHANGE`:
                return { ...state, isAuthChange: true }
            case `ADD_PRODUCT`: {
                return { ...state, products: payload }
            }
            case `CHANGE_TOTAL`: {
                return { ...state, total: payload }
            }
            default:
                return state;
        }
    };

    let [state, dispatch] = useReducer(changeState, stateFromLocalStorage());

    // add selecter product
    let addProducts = (prod) => {

        if (state.products.find((product) => product.id == prod.id)) {
            function toggleItem(state, prod) {
                return produce(state, draft => {
                    const product = draft.products.find(item => item.id === prod.id)
                    product.amount = product.amount + prod.amount
                })
            }

            let result = toggleItem(state, prod);
            dispatch({ type: `ADD_PRODUCT`, payload: result.products })

        } else {
            dispatch({ type: `ADD_PRODUCT`, payload: [...state.products, prod] })
        }

    }

    // delete product
    let deleteProduct = (id) => {
        let deletedProducts = state.products.filter(
            (product) => product.id !== id
        ); 

        dispatch({ type: `ADD_PRODUCT`, payload: deletedProducts })
    }

    // calculate
    function calculateTotal() {
        let counter = 0;

        state.products.forEach((item) => {
            counter += item.amount
        });

        dispatch({ type: `CHANGE_TOTAL`, payload: counter })
    }

    useEffect(() => {
        calculateTotal();
    }, [state.products])

    useEffect(() => {
        localStorage.setItem(`mystore`, JSON.stringify(state));
    }, [state])

    return (
        <GlobalContext.Provider value={{ ...state, dispatch, addProducts, deleteProduct }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider