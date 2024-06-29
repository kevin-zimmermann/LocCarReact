import {useState} from "react";
import {useNavigate} from "react-router-dom";
import InputField from "../components/InputField";
import ErrorMessage from "../components/errorMessage";
import Button from "../components/Button";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {API_ROUTE} from "../config";


const Login = () => {

    const navigate = useNavigate();

    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState([]);



    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = {'email': email, 'password': password};


        async function fetchData(){
            const response = await fetch(API_ROUTE + 'auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                // credentials: 'include',
                body: JSON.stringify(formData),
            })
            const data = await response.json();
                    console.log(data)
                    if (data.error) {
                        setErrors(data.message)
                    } else {
                        if (data.access_token) {
                            localStorage.setItem('token', data.access_token);
                        }
                        setEmail("")
                        setPassword("");
                        window.location.href = '/';
                        navigate('/');
                    }

        }
        fetchData();

    };

    return (
        <div>
            <Header/>
            <main>
                <h1 className={"font-bold text-center text-5xl mt-10"}>Connexion</h1>
                <div className={"h-screen flex items-center justify-center"}>
                    <div className={"w-9/12 h-auto m-auto justify-center content-center"}>
                        <form onSubmit={handleSubmit}>
                            <InputField
                                placeholder={"email"}
                                className={"appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"}
                                label="email:"
                                type="email"
                                value={email}
                                onChange={handleEmailChange}
                            />

                            <InputField
                                placeholder={"Password"}
                                className={"appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"}
                                label="Password:"
                                type="password"
                                value={password}
                                onChange={handlePasswordChange}
                            />
                            <ErrorMessage messages={errors}/>

                            <Button
                                className={"bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded justify-center"}
                                type="submit" innerHTML={"Envoyer"}></Button>
                        </form>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    );
};

export default Login;

