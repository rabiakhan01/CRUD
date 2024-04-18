import React, { useState } from "react";
import { Button, InputField } from "../../components/Shared";
import Layout from "../../utils/Layout";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {

    //hook used for navigation from one page to another
    const navigate = useNavigate();
    let login;

    //check if user already logged in
    const isLoginUser = () => {

        const getUser = JSON.parse(localStorage.getItem("loginUser"));
        if (getUser) {
            const user = getUser.find(user => user.isLogin === true);
            if (user) {
                return false;
            }
            else {
                return true;
            }
        }
        else {
            return true;
        }

    }

    const [isLoggedIn, setisLoggedIn] = useState(isLoginUser());
    //handel state of input fields of login screen
    const [loginUser, setLoginUser] = useState({
        username: '',
        password: ''
    });

    //handel state of validation errors
    const [validationError, setValidationError] = useState(false);

    // handel the validation error message
    const [validationMessage, setValidationMessage] = useState('');

    //handel the empty input fields errors
    const [error, setError] = useState({
        username: "",
        password: ""
    })

    // handel values of input fields of login form
    const handelChange = (event) => {
        const { name, value } = event.target;
        setLoginUser({
            ...loginUser,
            [name]: value
        })
        setError({
            ...error,
            [name]: false
        })
        setValidationMessage(false)

    }

    //handel login user
    const handelLogin = () => {

        // get the data of users which are stored in local storage
        const getUser = JSON.parse(localStorage.getItem("loginUser"));

        //handel if atleast one user exists
        if (getUser) {
            //check if the user matches
            getUser.map((user) => {

                //if the users matches the cred then navigate to the Listing page
                if (user.username === loginUser.username && user.password === loginUser.password) {
                    user.isLogin = true;
                    login = user.isLogin;
                    const setUser = JSON.stringify(getUser);
                    console.log("getUser", setUser)
                    localStorage.setItem("loginUser", setUser);
                    navigate("/user-listing", { state: login });
                }

                // activate validations  
                else {
                    if (loginUser.username !== "" && loginUser.password !== "") {
                        setValidationError(true);
                        setValidationMessage("Please enter a valid username and password");
                    }
                    else {
                        if (loginUser.username === '') {
                            setError((prevError) => ({ ...prevError, username: "username required" }))
                        }
                        if (loginUser.password === '') {
                            setError((prevError) => ({ ...prevError, password: "password required" }))
                        }
                    }
                }
            })
        }
        //handel if no user exists 
        else {
            if (loginUser.username !== "" && loginUser.password !== "") {
                setValidationError(true);
                setValidationMessage("Account not exists please first create an account");
                setLoginUser({
                    username: "",
                    password: ""
                })
            }
            else {
                if (loginUser.username === '') {
                    setError((prevError) => ({ ...prevError, username: "username required" }))
                }
                if (loginUser.password === '') {
                    setError((prevError) => ({ ...prevError, password: "password required" }))
                }
            }
        }
    }

    // if user is not have account than navigate through this button to the signup page
    const createAccount = () => {
        navigate("/");
    }

    return (
        <Layout>
            {
                isLoggedIn
                    ?
                    <div className="flex flex-col justify-center items-center outline outline-1 outline-outlineColor m-5 p-10 gap-5">
                        <div>
                            <h1 className="text-primaryColor text-3xl font-bold pb-8">Login Form</h1>
                        </div>
                        {validationError && <span className="text-errorColor">{validationMessage}</span>}
                        <div>
                            <form className="flex flex-col">
                                <InputField
                                    name="username"
                                    type="text"
                                    placeholder="Username"
                                    value={loginUser.username}
                                    onChange={handelChange}
                                    error={error.username}
                                />
                                <InputField
                                    name="password"
                                    type="password"
                                    placeholder="password"
                                    value={loginUser.password}
                                    onChange={handelChange}
                                    error={error.password}
                                />
                            </form>
                        </div>
                        <Button
                            name="Sign In"
                            onClick={handelLogin}
                        />
                        <button className='bg-white text-primaryColor font-medium flex px-10 py-1.5 rounded-full outline outline-1 outline-outlineColor' onClick={createAccount}>Create New Account</button>
                    </div>
                    :
                    <Navigate to="/user-listing" />
            }
        </Layout>
    );
}

export default Login;