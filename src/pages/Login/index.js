import React from "react";
import { InputField } from "../../components/Shared";

const Login = () => {

    return (
        <div className="flex flex-col w-full justify-center items-center outline outline-1 outline-outlineColor m-5 p-10 gap-3">
            <div>
                <h1 className="text-primaryColor text-3xl font-bold pb-8">Login Form</h1>
            </div>
            <div>
                <form className="flex flex-col">
                    <InputField
                        name="username"
                        type="text"
                        placeholder="Username"

                    />
                    <InputField
                        name="password"
                        type="password"
                        placeholder="password"

                    />
                </form>
            </div>
            <button className='bg-primaryColor text-white flex px-6 py-2 rounded-xl'>Login</button>
        </div>
    );
}

export default Login;