import React, { useEffect, useState } from 'react';
import { Button, InputField } from '../../components/Shared';
import Layout from '../../utils/Layout';
import { useParams, useNavigate } from 'react-router-dom';

const AddUser = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [userData, setUserData] = useState(JSON.parse(localStorage.getItem("user")))

    const [error, setError] = useState({
        username: '',
        email: '',
        age: '',
        address: ''
    });
    const [formData, setFormData] = useState({
        id: null,
        username: '',
        email: '',
        age: '',
        address: '',
        gender: 'male',
        languages: [],
    })
    const [buttonChanged, setButtonChanged] = useState(false);
    useEffect(() => {
        const getUser = JSON.parse(localStorage.getItem("user"));
        getUser.map((user) => {
            if (user.id == id) {
                setFormData({ ...user })
                setButtonChanged(true);
            }
        })
    }, [])

    const handelChange = (event) => {


        const { name, value, checked } = event.target;

        if (name === "languages") {

            if (checked) {
                setFormData(prevState => ({
                    ...prevState,
                    languages: [...prevState.languages, value]
                }));
            }
            else {
                setFormData(prevState => ({
                    ...prevState,
                    languages: prevState.languages.filter(lang => lang !== value)
                }));
            }
        }
        else {
            setFormData({
                ...formData,
                id: Math.floor(Math.random() * 100),
                [name]: value,
            });
            setError(
                {
                    ...error,
                    [name]: false,
                }
            )
        }

    }

    const handelSubmit = (event) => {

        event.preventDefault();

        if (formData.username === '') {
            setError((prevError) => ({ ...prevError, username: "username required" }))
        }
        if (formData.email === '') {
            setError((prevError) => ({ ...prevError, email: "email required" }))
        }
        if (formData.age === '') {
            setError((prevError) => ({ ...prevError, age: "age required" }))
        }
        if (formData.address === '') {
            setError((prevError) => ({ ...prevError, address: "address required" }))
        }
        if (formData.username !== '' && formData.email !== '' && formData.age !== '' && formData.address !== '') {

            const updateData = [...userData, formData];
            const setUser = JSON.stringify(updateData);
            localStorage.setItem("user", setUser);
            setUserData(updateData);
            navigate("/user-listing")
            setFormData({
                username: "",
                email: "",
                age: "",
                address: "",
                gender: "female",
                languages: []
            });
        }

    }

    const updateUser = () => {
        let newData;
        setUserData(prevState => {
            newData = prevState.map(user => {
                if (user.id == id) {
                    return { ...formData };

                }
                return user;
            });

            const updateUser = JSON.stringify(newData);
            localStorage.setItem("user", updateUser);

            navigate("/user-listing")

            return newData;

        })
        setButtonChanged(false);
        setFormData({
            username: "",
            email: "",
            age: "",
            address: "",
            gender: "female",
            languages: []
        });
    }

    return (
        <Layout>
            <div className='w-full flex flex-col justify-center items-center'>
                <div className='w-full lg:w-1/2 '>
                    <div className='flex flex-col gap-3 outline outline-1 outline-outlineColor mt-5 justify-center items-center py-5'>
                        {
                            buttonChanged ?
                                <h1 className='text-primaryColor text-3xl font-bold pb-8'>Update User</h1>
                                :
                                <h1 className='text-primaryColor text-3xl font-bold pb-8'>Add User</h1>
                        }
                        <div className='flex flex-col items-center'>
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
                                placeholder="Email"
                                value={formData.email}
                                onChange={handelChange}
                                error={error.email}
                            />
                            <InputField
                                name="age"
                                type="number"
                                min={1}
                                max={80}
                                placeholder="Age"
                                value={formData.age}
                                onChange={handelChange}
                                error={error.age}
                            />
                            <InputField
                                name="address"
                                type="text"
                                placeholder="Address"
                                value={formData.address}
                                onChange={handelChange}
                                error={error.address}
                            />
                        </div>
                        <div className='flex flex-col gap-1 w-72'>
                            <div>
                                <label>Gender</label>
                            </div>
                            <div className='flex gap-5'>
                                <div className='flex gap-2'>
                                    <input
                                        type='radio'
                                        name='gender'
                                        value="male"
                                        checked={formData.gender === 'male'}
                                        className='cursor-pointer'
                                        onChange={handelChange}
                                    />
                                    <label className=''>
                                        Male
                                    </label>
                                </div>
                                <div className='flex gap-2'>
                                    <input
                                        type='radio'
                                        name='gender'
                                        value="female"
                                        checked={formData.gender === "female"}
                                        className='cursor-pointer'
                                        onChange={handelChange}
                                    />
                                    <label className='flex gap-2'>
                                        Female
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-1 w-72'>
                            <div>
                                <label>
                                    Favourit Languages
                                </label>
                            </div>
                            <div className='flex gap-5 '>
                                <div className='flex gap-2'>
                                    <input
                                        type='checkbox'
                                        name='languages'
                                        value='JavaScript'
                                        checked={formData.languages.includes('JavaScript')}
                                        onChange={handelChange}
                                    />
                                    <label>
                                        JavaScript
                                    </label>
                                </div>
                                <div className='flex gap-2'>
                                    <input
                                        type='checkbox'
                                        name='languages'
                                        value="HTML"
                                        checked={formData.languages.includes("HTML")}
                                        onChange={handelChange}
                                    />
                                    <label>
                                        HTML
                                    </label>
                                </div>
                                <div className='flex gap-2'>
                                    <input
                                        type='checkbox'
                                        name='languages'
                                        value="CSS"
                                        checked={formData.languages.includes("CSS")}
                                        onChange={handelChange}
                                    />
                                    <label>
                                        CSS
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className='flex w-full justify-center items-center mt-6'>
                            {
                                buttonChanged ?
                                    <Button
                                        name="Update User"
                                        onClick={updateUser}
                                    />
                                    :
                                    <Button
                                        name="Add User"
                                        onClick={handelSubmit}
                                    />
                            }
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}


export default AddUser;