import React from "react";


const PrimaryButton = ({
    btn_name,
    onClick,
}) => {
    return (
        <button className='bg-dangerColor w-14 h-8 rounded-sm' onClick={onClick}>{btn_name}</button>
    )
}

export default PrimaryButton;