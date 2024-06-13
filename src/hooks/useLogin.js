import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/firebase.config";

import { useGlobalContext } from "./useGlobalContext";

function useLogin() {
    let {} = useGlobalContext()
    let signInWithGoogle = async () => {
        const provider = new GoogleAuthProvider();

        try {
            

            let result = await signInWithPopup(auth, provider);
            let user = result.user;
            alert(`Succes`)
            console.log(user);
        } catch (error) {
            const errorMessage = error.message;
            alert(`Error`)
        }
    }

    return { signInWithGoogle };
}

export default useLogin