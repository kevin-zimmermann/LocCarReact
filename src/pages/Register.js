import InputField from "../components/InputField";
import {useState} from "react";
import ErrorMessage from "../components/errorMessage";
import {useNavigate} from "react-router-dom";
import Button from "../components/Button";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {API_ROUTE} from "../config";

const Register = () => {
    const Navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setconfPassword] = useState('');
    const [errors, setErrors] = useState([]);



    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };
    const handleConfPasswordChange = (event) => {
        setconfPassword(event.target.value);
    };


    const handleSubmit = async (event) => {
        event.preventDefault();

        console.log(password,email,confPassword)
        // const form = document.getElementById("form");
        // const formData = new FormData(form);
        const formData = {'email': email, 'password': password, 'confPassword': confPassword};

        await fetch('${API_URL}user/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData),
        })
            .then(response => {
                return response.json()
            })
            .then(data => {
                // Traitez la réponse
        console.log(data)
                if(data.error){
                    setErrors(data.message)
                }else{
                    setEmail("")
                    setPassword("");
                    setconfPassword("");
                    Navigate('/');
                }

            })
            .catch(error => {
                // Gérez les erreurs
                console.log(error);
            });

    };

    return (

        <div>
            <Header/>
            <h1 className={"font-bold text-center text-5xl mt-10"}>Inscription</h1>
            <div className={"h-screen flex items-center justify-center"}>
                <div className={"w-9/12 h-auto m-auto justify-center content-center"}>
                    <form id="form" onSubmit={handleSubmit}>
                        <InputField
                            placeholder={"email@email.com"}
                            className={"appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"}
                            label="Email:"
                            type="email"
                            value={email}
                            onChange={handleEmailChange}
                        />


                        <InputField
                            placeholder={"Votre mot de passe"}
                            className={"appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"}
                            label="Password:"
                            type="password"
                            value={password}
                            onChange={handlePasswordChange}
                        />
                        <InputField
                            placeholder={"Confirmer votre MDP"}
                            className={"appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"}
                            label=" Confirmer MDP:"
                            type="password"
                            value={confPassword}
                            onChange={handleConfPasswordChange}
                        />
                        <ErrorMessage messages={errors}/>

                        <Button
                            className={"bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded justify-center"}
                            value={"envoyer"} type="submit" innerHTML={"Envoyer"}></Button>
                    </form>
                </div>
            </div>
            <Footer/>
        </div>
    )
        ;
};

export default Register;
