import { useNavigate} from "react-router-dom";
import Header from "../components/Header";
import {useAuth} from '../security/AuthProvider';
import {useEffect, useState} from "react";

import Footer from "../components/Footer";
import {API_ROUTE} from "../config";
import Files from "../components/Files";

const Profil = () => {
    const {userStatusInfo} = useAuth();
    const navigate = useNavigate();
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [files,setFiles] = useState(null);

    const getFiles = async () => {
        if (token) {
            await fetch(API_ROUTE + 'files/getFiles', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token,
                },
            }).then(response => {
                return response.json()
            })
                .then(data => {
                    console.log(data)
                    setFiles(data)
                })
                .catch(error => {
                    // Gérez les erreurs
                    console.log(error)
                })
        }
        ;
    }

    useEffect(() => {
        getFiles();
    }, []);

console.log(userStatusInfo)


    if (userStatusInfo === null) {
        return <div>Loading...</div>;
    } else {
        return (<div>
            <Header/>
            <div className="min-h-screen flex flex-col">
                <h1 className={"font-bold text-center text-5xl  my-9"}>Profil</h1>
                <h2 className={"font-bold text-center text-3xl  my-9"}> Bienvenue {userStatusInfo.email}  ! </h2>
                <div className={"w-9/12 h-auto m-auto justify-center"}>
                    <h3 className={"font-bold text-center text-5xl my-9"}>Vos fichiers </h3>
                {/* Mettre les fichiers */}
                    <Files files={files}/>
                </div>
            </div>
            <Footer/>
        </div>);
    }

};

export default Profil;
