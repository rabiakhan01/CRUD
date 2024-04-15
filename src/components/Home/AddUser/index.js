import React, { forwardRef, useState } from 'react';
import { InputField } from '../../Shared';
const AddUser = () => {


    const [error, setError] = useState({
        username: '',
        email: '',
        age: '',
        address: ''
    });
    const [userData, setUserData] = useState([
        {
            id: 0,
            username: 'Rabia',
            email: 'Khan@gmail.com',
            age: '22',
            address: '21 lahore',
            gender: 'female',
            languages: [],
        }, {
            id: 1,
            username: 'aqsa',
            email: 'Khan@gmail.com',
            age: '18',
            address: 'thokar',
            gender: 'female',
            languages: [],
        },

    ])
    const [formData, setFormData] = useState({
        id: 0,
        username: '',
        email: '',
        age: '',
        address: '',
        gender: 'male',
        languages: [],
    })

    const [buttonChanged, setButtonChanged] = useState(false);

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
            });
            setError(
                {
                    ...error,
                    [name]: false,
                }
            )
        }
    }

    const handelClick = (event) => {

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
            setUserData((prevState) => ([...prevState, formData]));

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

    const deleteUser = (index) => {
        userData.splice(index, 1);
        setUserData([...userData])
    }

    const editUser = (user, index) => {
        setError({
            [index]: false,
        })
        setFormData({ ...user })
        setButtonChanged(true);

    }

    const updateUser = (id) => {
        setUserData(prevState => {
            const newState = prevState.map(obj => {
                if (obj.id === id) {
                    return { ...formData };
                }
                return obj;
            });

            return newState;
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
        <div className='w-full flex flex-col justify-center items-center'>
            <div className='w-full lg:w-1/2'>
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
                        {
                            buttonChanged ?
                                <button type='button' className='bg-primaryColor text-white flex px-6 py-2 rounded-xl' onClick={() => updateUser(formData.id)}>Update User</button>
                                :
                                <button className='bg-primaryColor text-white flex px-6 py-2 rounded-xl' onClick={handelClick}>Add User</button>
                        }
                    </div>
                </div>
            </div>
            <div>
                <div className='mt-20 text-center'>
                    <h1 className='text-primaryColor text-3xl font-bold pb-8'>User Listing</h1>
                </div>
                <div className='flex flex-col w-4/5'>
                    <table className="table-auto border border-primaryColor">
                        <thead className='bg-primaryColor'>
                            <tr className='text-textColor text-medium text-base'>
                                <th className='px-6 py-2'>Sr#</th>
                                <th className='px-6'>Username</th>
                                <th className='px-6'>Email</th>
                                <th className='px-6'>Age</th>
                                <th className='px-6'>Address</th>
                                <th className='px-6'>Gender</th>
                                <th className='px-6'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                userData.map((user, index) => {
                                    return (
                                        <tr key={index} className='py-2'>
                                            <td className='border border-primaryColor px-6 text-nowrap'>{user.id = index + 1}</td>
                                            <td className='border border-primaryColor px-6 text-nowrap'>{user.username}</td>
                                            <td className='border border-primaryColor px-6 text-nowrap'>{user.email}</td>
                                            <td className='border border-primaryColor px-6 text-nowrap'>{user.age}</td>
                                            <td className='border border-primaryColor px-6 text-nowrap'>{user.address}</td>
                                            <td className='border border-primaryColor px-6 text-nowrap'>{user.gender}</td>
                                            <td className='flex gap-2 border border-primaryColor px-6 text-textColor'>
                                                <button className='bg-dangerColor w-14 h-8 rounded-sm' onClick={() => deleteUser(index)}>Delete</button>
                                                <button className='bg-successColor w-14 rounded-sm' onClick={() => editUser(user, index)}>Edit</button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div >
    );
}


export default AddUser;