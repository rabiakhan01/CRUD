import React from "react";

const OutlinedButton = ({ name, onClick }) => {
    return (
        <button className='bg-white text-primaryColor text-sm text-nowrap sm:text-base font-medium flex px-6 sm:px-10 py-1.5 rounded-full outline outline-1 outline-outlineColor' onClick={onClick}>{name}</button>
    );
}

export default OutlinedButton;