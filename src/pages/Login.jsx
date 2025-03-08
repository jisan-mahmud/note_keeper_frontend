import { useContext, useEffect, useRef, useState } from "react";
import Buttton from "../component/Buttton";
import EmailField from "../component/EmailField";
import NameField from "../component/NameField";
import PasswordField from "../component/PasswordField";
import { MdError } from "react-icons/md";
import { useNavigate, useNavigation, useParams } from "react-router-dom";
import { auth } from "../utils/auth";
import { ToastContainer, toast } from 'react-toastify';
import { AuthContext } from '../context/AuthContext'

const Login = () => {
    const {token: authToken, setToken} = useContext(AuthContext)
    const {uid, token} = useParams()
    const [status, setStatus] = useState(false)
    const navigate = useNavigate()
    
    useEffect(() => {
        if (authToken) {
            navigate("/");
        }
    }, [authToken, navigate]);

   useEffect(() => {
    if(uid && token) {
        ;(async () => {
            try{
                const data = {
                    uid: uid,
                    token: token
                }
                const response = await auth.post('users/activation/', data)
                if(response.status == 204){
                    setStatus(true)
                    toast.success('Account active successfully!')
                }
            }catch(e){
                setStatus(true)
                toast.error('Link are invalid!')
            }

        })()
    }
   }, [])

    const email = useRef(null)
    const password = useRef(null)
    
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const handleForm = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        setStatus(true)
        const data = {
            email: email.current.value,
            password: password.current.value
        }
        try{
            const response = await auth.post('jwt/create/', data)
            setIsLoading(false)
            if(response.status == 200){
                const data = response.data
                toast.success('Login Successfully!')
                
                setToken(data.access)
            }
           
        }catch (e){
            setIsLoading(false)
            if(e.response.status == 401){
                toast.error('Password or email are wrong!')
            }else{
                toast.warning('Something Went Wrong!')
            }
        }
    }

    return (
        <div className="flex justify-center items-center min-h-[calc(100vh-84px)] p-4">
            <div className="flex flex-col sm:flex-row justify-center items-center w-full max-w-sm">
                <div className="bg-amber-100 p-6 sm:p-10 rounded-3xl w-full sm:max-w-md shadow-lg">
                <h2 className="text-2xl text-center font-semibold">Login</h2>
                <form onSubmit={handleForm} className="mt-6 sm:mt-8 space-y-4">
                    <EmailField emailRef={email} />
                    <PasswordField passwordRef={password} fieldType="Password" />

                    {error && (
                    <div className="flex items-center gap-2 text-red-600 text-sm">
                        <MdError />
                        <span>{error}</span>
                    </div>
                    )}

                    <Buttton buttonType="Signup" isLoading={isLoading} />
                </form>
                </div>
            </div>

            {status && (
                <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick={false}
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