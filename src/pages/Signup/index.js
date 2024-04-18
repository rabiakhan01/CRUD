import React, { useState } from "react";
import { InputField, Button } from "../../components/Shared";
import Layout from "../../utils/Layout";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const getUser = () => {
        const user = localStorage.getItem("loginUser");
        if (user) {
            return JSON.parse(user);
        }
        else {
            return [];
        }
    }
    // state to set the users detail
    const [signUpUser, setSignUpUser] = useState(getUser());
    const [signUpData, setSignUpData] = useState({
        id: null,
        username: '',
        email: '',
        password: '',
        isLogin: false
    });
    const [existUser, setExistUser] = useState(false);
    //validation errors

    const [error, setError] = useState({
        username: '',
        email: '',
        password: ''
    });
    const [errorMessage, setErrorMessage] = useState();
    const navigate = useNavigate();

    // handel input data from the input fields.

    const handelChange = (event) => {
        const { name, value } = event.target;
        setSignUpData(
            {
                ...signUpData,
                id: Math.floor(Math.random() * 100),
                [name]: value
            });
        setError({
            ...error,
            [name]: false
        })
        setErrorMessage(false);
    }

    //handel the submitted data from the form 

    const handelSubmit = (event) => {

        event.preventDefault();

        if (signUpData.username === '') {
            setError((prevError) => ({ ...prevError, username: "username required" }))
        }
        if (signUpData.email === '') {
            setError((prevError) => ({ ...prevError, email: "email required" }))
        }
        if (signUpData.password === '') {
            setError((prevError) => ({ ...prevError, password: "password required" }))
        }

        // check if the fields are not empty then submit it and update the user array

        if (signUpData.username !== '' && signUpData.email !== '' && signUpData.password !== '') {

            const updateData = [...signUpUser, signUpData];
            setSignUpUser(updateData);

            const newArray = signUpUser.find(user => user.username === signUpData.username || user.password === signUpData.password);
            if (signUpUser.length > 0) {
                if (newArray) {
                    setExistUser(true);
                    setErrorMessage("user exists choose another username or password");
                }
                else {
                    const setUser = JSON.stringify(updateData);
                    localStorage.setItem("loginUser", setUser);
                    navigate("/login");
                }
            }
            else {
                const setUser = JSON.stringify(updateData);
                localStorage.setItem("loginUser", setUser);
                navigate("/login");
            }
        }

        // set the input field empty after the values are submitted
        setSignUpData({
            username: "",
            email: "",
            password: ""
        });
    }

    const handelAccount = () => {
        navigate("/login");
    }
    return (
        <Layout>
            <div className="flex flex-col w-full justify-center items-center outline outline-1 outline-outlineColor m-5 p-10 gap-5">
                {existUser && <span className="text-base font-medium text-errorColor">{errorMessage}</span>}
                <div>
                    <h1 className="text-primaryColor text-3xl font-bold pb-8">SignUp Form</h1>
                </div>
                <div>
                    <form className="flex flex-col">
                        <InputField
                            name="username"
                            type="text"
                            placeholder="Username"
                            value={signUpData.username}
                            onChange={handelChange}
                            error={error.username}

                        />
                        <InputField
                            name="email"
                            type="email"
                            placeholder="email"
                            value={signUpData.email}
                            onChange={handelChange}
                            error={error.email}
                        />
                        <InputField
                            name="password"
                            type="password"
                            placeholder="password"
                            value={signUpData.password}
                            onChange={handelChange}
                            error={error.password}
                        />
                    </form>
                </div>
                <Button
                    name="Sign Up"
                    onClick={handelSubmit}
                />
                <button className='bg-white text-primaryColor font-medium flex px-10 py-1.5 rounded-full outline outline-1 outline-outlineColor' onClick={handelAccount}>Already have an account</button>
            </div>
        </Layout>
    );
}

export default SignUp;