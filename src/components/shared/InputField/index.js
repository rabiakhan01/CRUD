import React from 'react';

const InputField = ({
    name,
    type,
    placeholder,
    value,
    onChange,
}) => {
    return (
        <React.Fragment>
            <input
                name={name}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className='flex outline outline-1 outline-outlineColor rounded-md h-12 w-80 pl-5 focus:outline-primaryColor hover:appearance-none'
            />
        </React.Fragment>
    );
}

export default InputField;