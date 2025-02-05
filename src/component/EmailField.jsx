import React from 'react';

const EmailField = () => {
    return (
        <div className="relative my-5">
            <input
                type='email' 
                placeholder="Email" 
                className="border placeholder:text-gray-500 p-2 rounded-md w-full"
            />
            <span className="absolute -top-2 left-2 bg-amber-200 text-red-900 text-sm px-1">
                Required *
            </span>
        </div>
    );
};

export default EmailField;