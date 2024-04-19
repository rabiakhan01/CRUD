import React from 'react';

const Button = ({ name, onClick }) => {
    return (
        <button type='button' className={`bg-primaryColor text-sm sm:text-base text-white flex px-4 sm:px-6 py-2 rounded-xl`} onClick={onClick}>{name}</button>
    );
}

export default Button;