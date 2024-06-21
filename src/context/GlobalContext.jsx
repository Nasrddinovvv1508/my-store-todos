import { createContext, useEffect, useReducer, useState } from "react";
import { produce } from "immer";

export let GlobalContext = createContext();

function stateFromLocalStorage() {
    return (
        JSON.parse(localStorage.getItem(`mystore`)) || {
            user: null,
            products: [],
            total: 0,
            totalPrice: 0,
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
            case `CHANGE_TOTAL_PRICE`: {
                return { ...state, totalPrice: payload }
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

    // increase and decrease
    let increaseAmount = (id) => {
        function toggleItem(state, id) {
            return produce(state, draft => {
                const product = draft.products.find(item => item.id === id)
                product.amount = product.amount + 1
            })
        }

        let result = toggleItem(state, id);
        dispatch({ type: `ADD_PRODUCT`, payload: result.products })
    }

    let decreaseAmount = (id) => {
        function toggleItem(state, id) {
            return produce(state, draft => {
                const product = draft.products.find(item => item.id === id)
                product.amount = product.amount - 1
                if (product.amount <= 1) {
                    deleteProduct(id)
                }
            })
        }

        let result = toggleItem(state, id);
        dispatch({ type: `ADD_PRODUCT`, payload: result.products })
    }

    // calculate
    function calculateTotal() {
        let counter = 0;
        let counterPrice = 0

        state.products.forEach((item) => {
            counter += item.amount;
            counterPrice += item.price * item.amount;
        });

        dispatch({ type: `CHANGE_TOTAL`, payload: counter })
        dispatch({ type: `CHANGE_TOTAL_PRICE`, payload: counterPrice })
    }

    useEffect(() => {
        calculateTotal();
    }, [state.products])

    useEffect(() => {
        localStorage.setItem(`mystore`, JSON.stringify(state));
    }, [state])

    return (
        <GlobalContext.Provider value={{ ...state, dispatch, addProducts, deleteProduct, increaseAmount, decreaseAmount, }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider