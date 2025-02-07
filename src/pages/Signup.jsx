import { useRef, useState } from "react";
import Buttton from "../component/Buttton";
import EmailField from "../component/EmailField";
import NameField from "../component/NameField";
import PasswordField from "../component/PasswordField";
import { MdError } from "react-icons/md";

const Signup = () => {

    const firstName = useRef(null)
    const lastName = useRef(null)
    const email = useRef(null)
    const password = useRef(null)
    const confirmPassword = useRef(null)
    
    const [error, setError] = useState('')

    const handleForm = (e) => {
        e.preventDefault()
        handleFormInput()
    }

    const handleFormInput = () => {
        if (!firstName.current.value) return setError("Enter First Name!");
        if (!lastName.current.value) return setError("Enter Last Name!");

        if (!email.current.value){
            return setError("Enter email address!");
        }else{
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if(!emailRegex.test(email.current.value)) return setError('Enter A Valid Email Address!')
        }

        if(!password.current.value){
            return setError('Enter A Strong Password!')
        }else{
            const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
            if(!passwordRegex.test(password.current.value)) return setError('Password too Weak!')
        }

        if(!confirmPassword.current.value){
            return setError('Enter Confirm Password')
        }else{
            if(password.current.value != confirmPassword.current.value) return setError('Password Does Not Matched!')
        }
        setError("");
    }

    return (
    <div className="flex justify-center items-center min-h-[calc(100vh-100px)] p-4">
      <div className="flex flex-col sm:flex-row justify-center items-center w-full max-w-md">
        <div className="bg-amber-100 p-8 sm:p-10 rounded-3xl w-full max-w-lg shadow-lg">
          <h2 className="text-2xl text-center font-semibold">Sign Up</h2>
            <form onSubmit={handleForm} onChange={handleFormInput} className="mt-6 sm:mt-8 space-y-4">
              <NameField firstNameRef={firstName} lastNameRef={lastName} />
              <EmailField emailRef={email} />
              <PasswordField passwordRef={password} fieldType="Password" />
              <PasswordField passwordRef={confirmPassword} fieldType="Confirm Password" />
      
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

export default Signup;