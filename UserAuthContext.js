import { createContext, useEffect, useState, useContext } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

import { auth } from "../firebase";

const UserAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
    const [user, setUser] = useState("");
    function SignUp(email, password) {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    function Login(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }

    useEffect(() => {
        const UnSubscribe = onAuthStateChanged(auth, (CurrentUser) => {
            setUser(CurrentUser);
        });
        return () => {
            UnSubscribe();
        }
    },[]);
    return (<UserAuthContext.Provider value={{user,SignUp, Login}}>{children}</UserAuthContext.Provider>)
}

export function UseUserAuth() {
    return useContext(UserAuthContext);
}