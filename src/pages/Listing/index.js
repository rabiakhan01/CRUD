import React from "react";
import { useState } from "react";
import Layout from "../../utils/Layout";
import { useNavigate } from "react-router-dom";


const Listing = () => {
    const [userData, setUserData] = useState(JSON.parse(localStorage.getItem("user")))
    const navigate = useNavigate();
    const deleteUser = (index) => {

        userData.splice(index, 1);

        const updateData = userData;
        const setUser = JSON.stringify(updateData);
        localStorage.setItem("user", setUser);

        setUserData([...updateData]);

    }

    const editUser = (user) => {
        navigate(`/update-user/${user.id}`);
    }


    return (
        <Layout>
            <div className='w-full'>
                <div className='mt-20 text-center'>
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
                                            <td className='flex justify-center items-center gap-2 border border-primaryColor px-6 text-textColor'>
                                                <button className='bg-dangerColor w-14 h-8 rounded-sm' onClick={() => deleteUser(index)}>Delete</button>
                                                <button className='bg-successColor w-14 rounded-sm' onClick={() => editUser(user)}>Edit</button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </Layout>
    );
}

export default Listing;