import React from 'react';

const EmailField = ({emailRef}) => {
    return (
        <div className="relative w-full my-5">
            <input
                ref={emailRef}
                type='email' 
                placeholder="Email" 
                className="border p-2 rounded-md w-full"
            />
            <span className="absolute -top-2 left-2 bg-amber-100 text-red-900 text-sm px-1">
                Required *
            </span>
        </div>
    );
};

export default EmailField;