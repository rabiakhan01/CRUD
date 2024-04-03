import React from 'react';

const InputField = ({
    name,
    type,
    placeholder,
    value,
    onChange,
    min,
    max,
}) => {
    return (
        <React.Fragment>
            <input
                name={name}
                type={type}
                placeholder={placeholder}
                value={value}
                min={min}
                max={max}
                onChange={onChange}
                className='form flex outline outline-1 outline-outlineColor rounded-md h-12 w-80 pl-5 focus:outline-primaryColor'
            />
        </React.Fragment>
    );
}

export default InputField;