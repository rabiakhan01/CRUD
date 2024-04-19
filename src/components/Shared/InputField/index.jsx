import React from 'react';

const InputField = ({
    name,
    type,
    placeholder,
    value,
    onChange,
    min,
    max,
    error
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
                className={`outline outline-1 outline-outlineColor rounded-md h-10 sm:h-12 w-56 sm:w-72 pl-5 mt-5 ${error ? 'outline-red-600' : ''} `}
            />
            {error && <span className='text-errorColor w-full text-sm'>{error}</span>}
        </React.Fragment>
    );
}

export default InputField;