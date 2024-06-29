import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from "./pages/Login";
import Register from "./pages/Register";
import Index from "./pages/Index";
import Profil from "./pages/Profil";
import {Deconnexion} from "./components/deconnexion";
import {ProtectedRoutes} from "./security/ProtectedRoutes";
import User from "./pages/User";
import {AuthProvider} from "./security/AuthProvider";
import Televersement from "./pages/Televersement";
;


const App = () => {

    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Index/>}/>
                    <Route path="/" element={<Index/>}/>
                    <Route exact path='/' element={<ProtectedRoutes needToConnect={true} needToNotConnect={false}/>}>
                        <Route exact path="/televersement" element={<Televersement/>}/>
                        <Route exact path='/deconnexion' element={<Deconnexion/>}/>
                        <Route exact path='/profil' element={<Profil/>}/>
                    </Route>
                    <Route exact path='/' element={<ProtectedRoutes needToConnect={false} needToNotConnect={true}/>}>
                        <Route path="register" element={<Register/>}/>
                        <Route path="login" element={<Login/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </AuthProvider>

    );
};

export default App;
