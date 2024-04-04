import React, { useState } from 'react';
import { InputField } from '../../Shared';
const AddUser = () => {
    const [error, setError] = useState({
        username: '',
        email: '',
        age: '',
        address: ''
    });
    const [userData, setUserData] = useState([])
    const [formData, setFormData] = useState({
        id: '',
        username: '',
        email: '',
        age: '',
        address: '',
        gender: 'male',
        languages: [],
    })
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
                [name]: value,
                id: Math.random() * 9
            });
        }
        removeError();
    }

    const removeError = () => {
        if (formData.username !== "") {
            setError((prevError) => ({ ...prevError, username: "" }))
        }
        if (formData.email !== "") {
            setError((prevError) => ({ ...prevError, email: "" }))
        }
        if (formData.age !== "") {
            setError((prevError) => ({ ...prevError, age: "" }))
        }
        if (formData.address !== "") {
            setError((prevError) => ({ ...prevError, address: "" }))
        }
    }
    const handelSubmit = (event) => {
        event.preventDefault();

        if (!formData.username) {
            setError((prevError) => ({ ...prevError, username: "username required" }))
        }
        if (!formData.email) {
            setError((prevError) => ({ ...prevError, email: "email required" }))
        }
        if (!formData.age) {
            setError((prevError) => ({ ...prevError, age: "age required" }))
        }
        if (!formData.address) {
            setError((prevError) => ({ ...prevError, address: "address required" }))
        }

        if (Object.keys(error).length === 0) {
            alert("Form submited successfully")
            setUserData((prevState) => ([...prevState, formData]));
            setFormData({
                username: "",
                email: "",
                age: "",
                address: "",
                languages: []
            });
        }

    }

    return (
        <React.Fragment>
            <div className='flex flex-col justify-center items-center py-5 w-[30rem] outline outline-1 outline-outlineColor mt-5'>
                <h1 className='text-primaryColor text-3xl font-bold pb-8'>Add User</h1>
                <form className='form flex flex-col gap-3' onSubmit={handelSubmit}>
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
                    <div className='flex flex-col gap-1'>
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
                    <div className='flex flex-col gap-1'>
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
                        <button className='bg-primaryColor text-white flex px-6 py-2 rounded-xl'>Add User</button>
                    </div>
                </form>
            </div>
            <div>
                <div>
                    <h1>User Detail</h1>
                </div>
                <div>
                    <table className="table-auto">
                        <thead>
                            <tr>
                                <th>username</th>
                                <th>email</th>
                                <th>age</th>
                                <th>address</th>
                                <th>gender</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                userData.map((user) => {
                                    return (
                                        <tr>
                                            <td>{user.username}</td>
                                            <td>{user.email}</td>
                                            <td>{user.age}</td>
                                            <td>{user.address}</td>
                                            <td>{user.gender}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </React.Fragment>
    );
}


export default AddUser;