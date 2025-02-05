import React from 'react';

const NameField = ({firstNameRef, lastNameRef}) => {
    return (
        <div className="flex flex-wrap sm:flex-nowrap gap-5">
            {/* First Name Field */}
            <div className="relative w-full sm:w-1/2">
                <input 
                    ref={firstNameRef}
                    placeholder="First Name" 
                    className="border p-2 rounded-md w-full"
                />
                <span className="absolute -top-2 left-3 bg-amber-200 text-red-900 text-xs px-1">
                    Required *
                </span>
            </div>

            {/* Last Name Field */}
            <div className="relative w-full sm:w-1/2">
                <input 
                    ref={lastNameRef}
                    placeholder="Last Name" 
                    className="border p-2 rounded-md w-full"
                />
                <span className="absolute -top-2 left-3 bg-amber-200 text-red-900 text-xs px-1">
                    Required *
                </span>
            </div>
        </div>
    );
};

export default NameField;
