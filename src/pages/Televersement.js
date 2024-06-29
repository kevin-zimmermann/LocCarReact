import {Link} from "react-router-dom";
import Header from "../components/Header";
import {useEffect, useState} from "react";
import {useAuth} from "../security/AuthProvider";
import ErrorMessage from "../components/errorMessage";
import Button from "../components/Button";
import Footer from "../components/Footer";
import {API_ROUTE} from "../config";

const Televersement = () => {
    const [errors, setErrors] = useState([]);
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [files, setFiles] = useState([]);
    const [success, setSuccess] = useState([]);
    const handleSubmit = (event) => {
        event.preventDefault();
        if (files !== []) {
            const formData = new FormData();
            for(let i=0; i < files.length; i++){
                 formData.append(`files`, files[i]);
            }
            const sendFiles = async () => {
                await fetch(API_ROUTE + 'files/upload', {
                    method: 'POST',
                    headers: {
                        'Authorization': 'Bearer ' + token,
                    },
                    body: formData,
                })
                    .then(response => response.json())
                    .then(data => {
                        if (data.error) {
                            console.log(data.message)
                            setErrors(data)
                        }
                    })
                    .catch(error => {
                        // Gérez les erreurs
                        console.log(error);
                    });
                // setFiles(null)
            }
            sendFiles();

        } else {
            setErrors(["Vous n'avez pas envoyé de fichier"]);

        }


    }
    const handleFilesChange = (event) => {
        setFiles([...event.target.files]);
    };


    return (
        <div className="min-h-screen flex flex-col">
            <Header/>
            <main className="flex-grow">
                <h3 className={"font-bold text-center text-5xl my-9"}>Téleversement de vos fichiers </h3>

                <div className={"w-9/12 h-auto m-auto justify-center content-center"}>
                    <label htmlFor="dropzone-file"
                           className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                      stroke-width="2"
                                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                            </svg>
                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span
                                className="font-semibold">Click to upload</span> or drag and drop</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">JPEG or PDF (MAX.
                                10 Mo)</p>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <input id="dropzone-file" type="file" name="files" className="hidden" onChange={handleFilesChange} multiple/>
                            <Button
                                className={"bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded justify-center"}
                                type="submit" innerHTML={"Envoyer"}></Button>
                        </form>
                    </label>
                    <ErrorMessage messages={errors}/>
                </div>
            </main>
            <Footer/>
        </div>
    );

};

export default Televersement;




