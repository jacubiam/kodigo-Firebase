import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "../firebase";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const UserContext = ({children}) => {
    const auth = getAuth(app);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    /* const navigate = useNavigate(); */

    useEffect(() => {

        const authen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                console.log(`Logged`);
            } else {
                /* navigate('/login'); */
                console.log(`Signed out`);
            }
            setLoading(false);
        });

        return () => {
            authen();
        };

    }, [auth]);

    return (
        <AuthContext.Provider value={{user, loading}}>
            {children}
        </AuthContext.Provider>
    );

};
