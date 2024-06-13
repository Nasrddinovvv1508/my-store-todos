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
            case `AUTH_CHANGE`:
                return { ...state, isAuthChange: true }
            default:
                return state;
        }
    }

    let [state, dispatch] = useReducer(changeState, {
        user: null,
        products: [],
        total: 0,
        isAuthChange: false,
    })

    let [changeTotal, setChangeTotal] = useState(state.total);

    return (
        <GlobalContext.Provider value={{ ...state, changeTotal, setChangeTotal, dispatch }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider