import Buttton from "../component/Buttton";
import EmailField from "../component/EmailField";
import NameField from "../component/NameField";
import PasswordField from "../component/PasswordField";

const Signup = () => {
    return (
        <div className="flex justify-center items-center overflow-hidden w-full min-h-screen p-4">
            <div className="flex flex-col sm:flex-row w-full sm:w-fit justify-center items-center">
                <div className="bg-amber-200 p-6 sm:p-10 mx-4 sm:mx-10 rounded-3xl w-full max-w-md">
                    <h2 className="text-2xl text-center">Sign Up</h2>
                    <form className="mt-6 sm:mt-10">
                        <NameField />
                        <EmailField />
                        <PasswordField fieldType={'Password'} />
                        <PasswordField fieldType={'Confirm Password'} />
                        <Buttton />
                    </form>
                </div>
            </div>
        </div>

    );
};

export default Signup;