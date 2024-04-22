import React, { useEffect } from "react";
import { useState } from "react";
import Layout from "../../utils/Layout";
import { Navigate, useNavigate } from "react-router-dom";
import { Button, OutlinedButton } from "../../components/Shared";
import { isLoginUser, getUser } from "../../utils/utils";
const Listing = () => {

    const navigate = useNavigate();

    //set the array of users
    const [userData, setUserData] = useState(getUser());

    //set if user login
    const [isLoggedIn, setsLoggedIn] = useState(isLoginUser());

    // delete the user on delete button's click
    const deleteUser = (index) => {
        userData.splice(index, 1);
        const updateData = userData;
        const setUser = JSON.stringify(updateData);
        localStorage.setItem("users", setUser);

        setUserData([...updateData]);

    }
    // navigate to the form where we populate data of the user clicked for editing
    const editUser = (user) => {
        navigate(`/update-user/${user.id}`);
    }

    //handel logout functionality on button clicked 
    const handelLogOut = () => {
        const getUser = JSON.parse(localStorage.getItem("loginUser"));
        getUser.map((user) => {
            if (user.isLogin) {
                user.isLogin = false;
                const updateUser = JSON.stringify(getUser);
                localStorage.setItem("loginUser", updateUser);
                navigate("/login")
            }
        })
    }

    //handel adding of new user
    const handelAddUser = () => {
        navigate("/add-new-user")
    }

    return (
        <Layout>
            {
                isLoggedIn
                    ?
                    <div className='w-full'>
                        <div className="flex float-left">
                            <OutlinedButton
                                name="Add User"
                                onClick={handelAddUser}
                                smWidth="16"
                            />
                        </div>
                        <div className="flex gap-5 float-right">
                            <Button
                                name="Log out"
                                onClick={handelLogOut}
                                smWidth="16"
                            />
                        </div>
                        <div className='mt-20 text-center'>
                            <h1 className='text-primaryColor text-xl sm:text-2xl md:text-3xl font-bold pb-8 text-nowrap'>Student Listing</h1>
                        </div>
                        <div className='flex flex-col relative overflow-x-auto'>
                            <table className="table-fixed border border-primaryColor">
                                <thead className='bg-primaryColor'>
                                    <tr className='text-textColor text-medium text-sm sm:text-base'>
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
                                                    <td className='border border-primaryColor px-6 text-nowrap'>{index + 1}</td>
                                                    <td className='border border-primaryColor px-6 text-nowrap'>{user.username}</td>
                                                    <td className='border border-primaryColor px-6 text-nowrap'>{user.email}</td>
                                                    <td className='border border-primaryColor px-6 text-nowrap'>{user.age}</td>
                                                    <td className='border border-primaryColor px-6 text-nowrap'>{user.address}</td>
                                                    <td className='border border-primaryColor px-6 text-nowrap'>{user.gender}</td>
                                                    <td className='flex justify-center items-center gap-2  px-6 text-textColor border border-primaryColor'>
                                                        <button className='bg-dangerColor w-14 h-8 rounded-sm' onClick={() => deleteUser(index)}>Delete</button>
                                                        <button className='bg-successColor w-14 h-8 rounded-sm' onClick={() => editUser(user)}>Edit</button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                            {
                                userData.length < 1 && <span className="text-xl text-center font-bold text-primaryColor pt-96">No Record</span>
                            }
                        </div>

                    </div>
                    :
                    <Navigate to="/login" />
            }
        </Layout>
    );
}

export default Listing;