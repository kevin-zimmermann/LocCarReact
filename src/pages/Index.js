// import {Link} from "react-router-dom";
import Header from "../components/Header";
// import {useEffect, useState} from "react";
// import ErrorMessage from "../components/errorMessage";
// import Button from "../components/Button";
import Footer from "../components/Footer";
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import {faUser} from "@fortawesome/free-solid-svg-icons";
import loccarphoto from '../assets/img/pexels-pixabay-164634.jpg';


const Index = () => {

    return (
        <div className="min-h-screen flex flex-col">
            <Header/>
            <main className="flex-grow">
                <h3 className={"font-bold text-center text-5xl my-9"}>
                    LocCar votre agence de location de voiture !
                </h3>
                <div className={"flex items-center justify-center"}>
                    <div className={"w-9/12 h-auto m-auto justify-center content-center"}>
                        <img className={"h-25"} src={loccarphoto} alt="loccar-voiture"></img>
                        <p className={"font-bold text-2xl"}>À la recherche d'une solution de transport fiable et
                            flexible pour vos besoins personnels
                            ou
                            professionnels ? Ne cherchez plus ! AutoLiberté est là pour vous offrir une expérience
                            de
                            location de voiture exceptionnelle, adaptée à tous vos déplacements.</p>
                        <h4 className={"font-bold text-3xl my-9"}>
                            Large Sélection de Véhicules
                        </h4>
                        <p>Que vous ayez besoin d'une compacte économique pour vos trajets en ville, d'une berline
                            confortable pour vos voyages d'affaires, ou d'un SUV spacieux pour vos aventures en
                            famille,
                            notre flotte diversifiée a le véhicule parfait pour chaque occasion.</p>
                        <h4 className={"font-bold text-right text-3xl my-9"}>
                            Service Client Exceptionnel
                        </h4>
                        <p>Votre satisfaction est notre priorité. Notre équipe dévouée est à votre disposition pour
                            répondre à toutes vos questions et vous assister tout au long de votre expérience de
                            location. Nous nous engageons à rendre votre processus de location aussi simple et
                            agréable que possible.</p>

                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    );

};

export default Index;
