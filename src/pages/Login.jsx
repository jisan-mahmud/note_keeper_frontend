import { useRef, useState } from "react";
import Buttton from "../component/Buttton";
import EmailField from "../component/EmailField";
import NameField from "../component/NameField";
import PasswordField from "../component/PasswordField";
import { MdError } from "react-icons/md";

const Login = () => {

    const email = useRef(null)
    const password = useRef(null)
    
    const [error, setError] = useState('')

    return (
        <div className="flex justify-center items-center min-h-[calc(100vh-84px)] p-4">
            <div className="flex flex-col sm:flex-row justify-center items-center w-full max-w-sm">
                <div className="bg-amber-100 p-6 sm:p-10 rounded-3xl w-full sm:max-w-md shadow-lg">
                <h2 className="text-2xl text-center font-semibold">Sign Up</h2>
                <form className="mt-6 sm:mt-8 space-y-4">
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
        </div>

    );
};

export default Login;