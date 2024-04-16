import React, { useState } from "react";
import { InputField } from "../../components/Shared";
import Layout from "../../utils/Layout";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const [user, setUser] = useState([]);
    const [formData, setFormData] = useState({
        id: null,
        username: '',
        email: '',
        password: ''
    });
    const [error, setError] = useState({
        username: '',
        email: '',
        password: ''
    });
    const navigate = useNavigate();

    const handelChange = (event) => {
        const { name, value } = event.target;
        setFormData(
            {
                ...formData,
                id: crypto.randomUUID(),
                [name]: value
            });
        setError({
            ...error,
            [name]: false
        })
    }

    const handelSubmit = (event) => {

        event.preventDefault();
        if (formData.username === '') {
            setError((prevError) => ({ ...prevError, username: "username required" }))
        }
        if (formData.email === '') {
            setError((prevError) => ({ ...prevError, email: "email required" }))
        }
        if (formData.password === '') {
            setError((prevError) => ({ ...prevError, password: "password required" }))
        }

        if (formData.username !== '' && formData.email !== '' && formData.password !== '') {

            const updateData = [...user, formData];
            const setData = JSON.stringify(updateData);
            localStorage.setItem("loginUser", setData);
            console.log(updateData)
            setUser([...updateData]);
            setFormData({
                username: "",
                email: "",
                password: ""
            });
            navigate("/login");
        }


    }

    return (
        <Layout>
            <div className="flex flex-col w-full justify-center items-center outline outline-1 outline-outlineColor m-5 p-10 gap-5">
                <div>
                    <h1 className="text-primaryColor text-3xl font-bold pb-8">SignUp Form</h1>
                </div>
                <div>
                    <form className="flex flex-col">
                        <InputField
                            name="username"
                            type="text"
                            placeholder="Username"
                            value={formData.username}
                            onChange={handelChange}
                            error={error.username}

                        />
                        <InputField
                            name="email"
                            type="email"
                            placeholder="email"
                            value={formData.email}
                            onChange={handelChange}
                            error={error.email}
                        />
                        <InputField
                            name="password"
                            type="password"
                            placeholder="password"
                            value={formData.password}
                            onChange={handelChange}
                            error={error.password}
                        />
                    </form>
                </div>
                <button className='bg-primaryColor text-white flex px-6 py-2 rounded-xl' onClick={handelSubmit}>SignUp</button>
            </div>
        </Layout>
    );
}

export default SignUp;