import React from 'react';

const PasswordField = ({fieldType, passwordRef}) => {
    
    return (
        <div className="relative w-full my-5">
            <input
                ref={passwordRef}
                type='password' 
                placeholder= {fieldType}
                className="border p-2 rounded-md w-full"
            />
            <span className="absolute -top-2 left-2 bg-amber-200 text-red-900 text-sm px-1">
                Required *
            </span>
        </div>
    );
};

export default PasswordField;