import React, { useState } from "react";
import { Button, InputField } from "../../components/Shared";
import Layout from "../../utils/Layout";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const [loginUser, setLoginUser] = useState({
        username: '',
        password: ''
    });
    const [loggedIn, setLoggedIn] = useState(false);
    const [loginMessage, setLoginMessage] = useState('');
    const handelChange = (event) => {
        const { name, value } = event.target;
        setLoginUser({
            ...loginUser,
            [name]: value
        })
    }
    const navigate = useNavigate();

    const handelLogin = () => {
        const getUser = JSON.parse(localStorage.getItem("loginUser"));
        getUser.map((user) => {
            if (user.username === loginUser.username && user.password === loginUser.password) {
                navigate("/user-listing");
            }
            else {
                setLoggedIn(true);
                setLoginMessage('username or password incorrect');
            }
        })
        setLoginUser({
            username: '',
            password: ''
        })
    }

    const createAccount = () => {
        navigate("/signup");
    }
    return (
        <Layout>
            <div className="flex flex-col justify-center items-center outline outline-1 outline-outlineColor m-5 p-10 gap-5">
                <div>
                    <h1 className="text-primaryColor text-3xl font-bold pb-8">Login Form</h1>
                </div>
                <div>
                    <form className="flex flex-col">
                        <InputField
                            name="username"
                            type="text"
                            placeholder="Username"
                            value={loginUser.username}
                            onChange={handelChange}
                        />
                        <InputField
                            name="password"
                            type="password"
                            placeholder="password"
                            value={loginUser.password}
                            onChange={handelChange}
                        />
                        {loggedIn && <span>{loginMessage}</span>}
                    </form>
                </div>
                <Button
                    name="Sign In"
                    onClick={handelLogin}
                />
                <button className='bg-white text-primaryColor font-medium flex px-10 py-1.5 rounded-full outline outline-1 outline-outlineColor' onClick={createAccount}>Create New Account</button>
            </div>
        </Layout>
    );
}

export default Login;