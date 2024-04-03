import React, { useState } from 'react';
import Layout from '../../utils/Layout';
import InputField from '../../components/shared/InputField';


const Home = () => {
    const [userData, setUserData] = useState({
        username: "",
        email: "",
        age: "",
        address: "",
        gender: "",
        languages: [],
    })


    const handelChange = (event) => {
        const { name, value, checked } = event.target;
        console.log(userData.languages);
        if (name === "languages") {
            if (checked) {
                setUserData(prevState => ({
                    ...prevState,
                    languages: [...prevState.languages, value]
                }));
            }
            else {
                setUserData(prevState => ({
                    ...prevState,
                    languages: prevState.languages.filter(lang => lang !== value)
                }));
            }
        }
        else {
            setUserData({
                ...userData,
                [name]: value,
            });
        }
    }

    const handelSubmit = (event) => {
        console.log(userData);
        event.preventDefault();

    }
    return (
        <Layout>
            <div className='flex flex-col justify-center items-center gap-16 h-[44rem] w-[35rem] outline outline-1 outline-outlineColor'>
                <h1 className='text-primaryColor text-3xl font-bold'>User Detail</h1>
                <form className='flex flex-col justify-center items-center gap-7' onSubmit={handelSubmit}>
                    <div className='flex flex-col items-center gap-6'>
                        <InputField
                            name="username"
                            type="text"
                            placeholder="Username"
                            value={userData.username}
                            onChange={handelChange}
                        />
                        <InputField
                            name="email"
                            type="email"
                            placeholder="Email"
                            value={userData.email}
                            onChange={handelChange}
                        />
                        <InputField
                            name="age"
                            type="number"
                            placeholder="Age"
                            value={userData.age}
                            onChange={handelChange}
                        />
                        <InputField
                            name="address"
                            type="text"
                            placeholder="Address"
                            value={userData.address}
                            onChange={handelChange}
                        />
                    </div>
                    <div className='flex flex-col items-center gap-2'>
                        <div>
                            <label>Gender</label>
                        </div>
                        <div className='flex gap-2'>
                            <input
                                type='radio'
                                name='gender'
                                value="male"
                                checked={userData.gender === 'male'}
                                className='cursor-pointer'
                                onChange={handelChange}
                            />
                            <label className='flex gap-2'>
                                Male
                            </label>
                            <input
                                type='radio'
                                name='gender'
                                value="female"
                                checked={userData.gender === "female"}
                                className='cursor-pointer'
                                onChange={handelChange}
                            />
                            <label className='flex gap-2'>
                                Female
                            </label>
                        </div>
                    </div>
                    <div className='flex flex-col items-center gap-2'>
                        <div>
                            <label className='mb-2'>
                                Favourit Languages
                            </label>
                        </div>
                        <div className='flex gap-2'>
                            <input
                                type='checkbox'
                                name='languages'
                                value='JavaScript'
                                checked={userData.languages.includes('JavaScript')}
                                onChange={handelChange}
                            />
                            <label>
                                JavaScript
                            </label>
                            <input
                                type='checkbox'
                                name='languages'
                                value="HTML"
                                checked={userData.languages.includes("HTML")}
                                onChange={handelChange}
                            />
                            <label>
                                HTML
                            </label>
                            <input
                                type='checkbox'
                                name='languages'
                                value="CSS"
                                checked={userData.languages.includes("CSS")}
                                onChange={handelChange}
                            />
                            <label>
                                CSS
                            </label>
                        </div>
                    </div>
                    <div>
                        <button className='bg-primaryColor text-white flex justify-center items-center px-6 py-3 rounded-xl '>Add User</button>
                    </div>
                </form>
            </div>
        </Layout>
    );
}


export default Home;