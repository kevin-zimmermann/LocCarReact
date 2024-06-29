import {Link} from "react-router-dom";
import Header from "../components/Header";
import {useEffect, useState} from "react";
import {useAuth} from "../security/AuthProvider";
import ErrorMessage from "../components/errorMessage";
import Button from "../components/Button";
import Footer from "../components/Footer";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";

const Index = () => {

    const {userStatusInfo} = useAuth();


    return (
        <div className="min-h-screen flex flex-col">
            <Header/>
            <main className="flex-grow">
                <h3 className={"font-bold text-center text-5xl my-9"}>
                    LocCar votre agence de location de voiture !
                </h3>
                <div className={"h-screen flex items-center justify-center"}>
                    {/*<div className={"w-9/12 h-auto m-auto justify-center content-center"}>*/}
                    {userStatusInfo ? (

                        <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden font-medium font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
<span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
    <Link to="/televersement" className="mx-1">
        <FontAwesomeIcon icon={faUser} className="text-xl text-white"/> - Televersement
    </Link>
</span></button>
                    ) : (
                        <button
                            class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                            <span
                                class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Purple to blue
                            </span>
                        </button>

                    )}


                </div>
                {/*</div>*/}
            </main>
            <Footer/>
        </div>
    );

};

export default Index;
