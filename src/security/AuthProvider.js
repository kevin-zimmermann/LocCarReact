import {createContext, useContext, useEffect, useState} from "react";
import {API_ROUTE} from "../config";

// Créer le contexte Auth avec une valeur par défaut
const AuthContext = createContext({userStatusInfo: null});

export const AuthProvider = ({children}) => {
    const [userStatusInfo, setUserStatusInfo] = useState(null);
     const [token, setToken] = useState(localStorage.getItem('token'));
    const isUser = async () => {
        if (token) {
            await fetch(API_ROUTE +'auth/profile', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token,
                },
            }).then(response => {
                return response.json()
            })
                .then(data => {
                    // console.log(data)
                    if (data.message) {
                        setUserStatusInfo(false);
                    } else {
                        setUserStatusInfo(data);
                        console.log(data)
                    }
                })
                .catch(error => {
                    // Gérez les erreurs
                    console.log(error)
                })
        }
        ;
    }

    useEffect(() => {
        isUser();
    }, []);

    return (
        <AuthContext.Provider value={{userStatusInfo}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth doit être utilisé à l\'intérieur de AuthProvider');
    }
    return context;
};





