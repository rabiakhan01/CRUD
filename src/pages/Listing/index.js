import React, { useEffect } from "react";
import { useState } from "react";
import Layout from "../../utils/Layout";
import { Navigate, useNavigate } from "react-router-dom";
import { Button, OutlinedButton } from "../../components/Shared";

const Listing = () => {

    const navigate = useNavigate();

    //get the user from the local storage and return empty array if key not exists
    const getUser = () => {
        const user = localStorage.getItem("users");
        if (user) {
            return JSON.parse(user);
        }
        else {
            return [];
        }
    }

    //check if user logged in
    const isLoginUser = () => {

        const getUser = JSON.parse(localStorage.getItem("loginUser"));
        if (getUser) {
            const user = getUser.find(user => user.isLogin === true);
            if (user) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }

    }

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

    //handel logout functionality on button cliked 
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
                        <div className="flex gap-5 float-right">
                            <OutlinedButton
                                name="Add New User"
                                onClick={handelAddUser}
                            />
                            <Button
                                name="Log out"
                                onClick={handelLogOut}
                            />
                        </div>
                        <div className='mt-20'>
                            <h1 className='text-primaryColor text-3xl font-bold pb-8'>User Listing</h1>
                        </div>
                        <div className='flex flex-col relative overflow-x-auto'>
                            <table className="table-fixed border border-primaryColor">
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
                                                    <td className='border border-primaryColor px-6 text-nowrap'>{index + 1}</td>
                                                    <td className='border border-primaryColor px-6 text-nowrap'>{user.username}</td>
                                                    <td className='border border-primaryColor px-6 text-nowrap'>{user.email}</td>
                                                    <td className='border border-primaryColor px-6 text-nowrap'>{user.age}</td>
                                                    <td className='border border-primaryColor px-6 text-nowrap'>{user.address}</td>
                                                    <td className='border border-primaryColor px-6 text-nowrap'>{user.gender}</td>
                                                    <td className='flex justify-center items-center gap-2  px-6 text-textColor my-1'>
                                                        <button className='bg-dangerColor w-14 h-8 rounded-sm' onClick={() => deleteUser(index)}>Delete</button>
                                                        <button className='bg-successColor w-14 h-8 rounded-sm' onClick={() => editUser(user)}>Edit</button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>

                    </div>
                    :
                    <Navigate to="/login" />
            }
        </Layout>
    );
}

export default Listing;