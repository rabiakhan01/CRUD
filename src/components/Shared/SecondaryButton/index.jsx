import React from "react";

const SecondaryButton = ({
    btn_name,
    onClick,
}) => {
    return (
        <button className='bg-successColor w-14 h-8 rounded-sm' onClick={onClick}>{btn_name}</button>
    )
}

export default SecondaryButton;