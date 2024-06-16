// import { useCallback } from "react"
import { auth } from "../firebase/firebase.config"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { useGlobalContext } from "./useGlobalContext"

function useRegister() {
    let { dispatch } = useGlobalContext();


    let registerWithEmailAndPassword = async (userData) => {
        try {
            let result = await createUserWithEmailAndPassword(auth, userData.email, userData.password)
            await updateProfile(auth.currentUser, {
                displayName: userData.displayName,
            })
            let userCredential = result.user
            console.log(userCredential);

            dispatch({ type: `LOG_IN`, payload: userCredential });

        } catch (error) {
            console.log(error.message);
        }
        console.log(auth);
    }

    return { registerWithEmailAndPassword }
}

export { useRegister }