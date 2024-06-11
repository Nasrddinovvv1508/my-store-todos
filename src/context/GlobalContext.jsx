import { createContext, useReducer, useState } from "react";

export let GlobalContext = createContext();

function GlobalContextProvider({ children }) {

    let changeState = (state, action) => {
        let { type, payload } = action

        switch (type) {
            case `LOG_IN`:
                return { ...state, user: payload }
            case `LOG_OUT`:
                return { ...state, user: null }
            default:
                return state;
        }
    }

    let [state, dispatch] = useReducer(changeState, {
        user: null,
        products: [],
    })

    return (
        <GlobalContext.Provider value={{ ...state }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider