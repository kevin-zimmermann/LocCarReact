
// // - page connecté (téléversement)
// // - page publique (index, etc ...)
// // - page bloqué au connecté (connexion , inscription ...)

import  {Navigate, Outlet} from 'react-router-dom';
import {useAuth} from './AuthProvider';


export const ProtectedRoutes = ({needToConnect, needToNotConnect}) => {
    const { userStatusInfo } = useAuth();

    const isAuthenticated = userStatusInfo ? true : false;


    if (isAuthenticated === null) {
        return <div>Loading...</div>;
    }else {
        if (needToConnect && !isAuthenticated && !needToNotConnect) {
            return <Navigate to="/"/>;
        } else if (!needToConnect && isAuthenticated && needToNotConnect) {
            return <Navigate to="/"/>;
        } else {
            return (<Outlet/>);
        }
    }

};
