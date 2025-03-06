import { useEffect, useRef, useState } from "react";
import Buttton from "../component/Buttton";
import EmailField from "../component/EmailField";
import NameField from "../component/NameField";
import PasswordField from "../component/PasswordField";
import { MdError } from "react-icons/md";
import { useParams } from "react-router-dom";
import { auth } from "../utils/auth";
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {

    const {uid, token} = useParams()
    const [activate, setActivate] = useState(false)

   useEffect(() => {
    if(uid && token) {
        setActivate(true)
        ;(async () => {
            try{
                const data = {
                    uid: uid,
                    token: token
                }
                console.log(data)
                const response = await auth.post('users/activation/', data)
                if(response.status == 204){
                    setActivate(true)
                    toast.success('Account active successfully!', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                }
            }catch(e){
                toast.error('Link are invalid!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }

        })()
    }
   }, [])

    const email = useRef(null)
    const password = useRef(null)
    
    const [error, setError] = useState('')

    const handleForm = (e) => {
        e.preventDefault()
        const data = {
            email: email.current.value,
            password: password.current.value
        }
       console.log(data)
    }

    return (
        <div className="flex justify-center items-center min-h-[calc(100vh-84px)] p-4">
            <div className="flex flex-col sm:flex-row justify-center items-center w-full max-w-sm">
                <div className="bg-amber-100 p-6 sm:p-10 rounded-3xl w-full sm:max-w-md shadow-lg">
                <h2 className="text-2xl text-center font-semibold">Sign Up</h2>
                <form onSubmit={handleForm} className="mt-6 sm:mt-8 space-y-4">
                    <EmailField emailRef={email} />
                    <PasswordField passwordRef={password} fieldType="Password" />

                    {error && (
                    <div className="flex items-center gap-2 text-red-600 text-sm">
                        <MdError />
                        <span>{error}</span>
                    </div>
                    )}

                    <Buttton buttonType="Signup" />
                </form>
                </div>
            </div>

            {activate && (
                <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick={false}
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
            )}
        </div>

    );
};

export default Login;