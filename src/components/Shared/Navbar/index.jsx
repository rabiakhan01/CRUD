import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import images from "../../../assets/images/images";

const Navbar = () => {
    const navigate = useNavigate();
    const handelProfile = () => {
        navigate("/user-profile")
    }

    return (
        <nav className="flex justify-between w-full mb-10 bg-primaryColor py-2">
            <div className="w-full flex gap-14 justify-center items-center text-2xl font-bold">
                <Link to="/add-new-student" className={`text-textColor `}>Add Student</Link>
                <Link to="/student-listing" className={`text-textColor `}>Student Listing</Link>
            </div>
            <div className="pr-20">
                <button onClick={handelProfile}>
                    <img src={images.profileImage} className="h-10 w-10 rounded-full" />
                </button>
            </div>
        </nav>
    );
}

export default Navbar;