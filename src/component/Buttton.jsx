import React from 'react';
import { Spinner } from "@material-tailwind/react";

const Buttton = ({buttonType, isLoading}) => {
    console.log(isLoading)
    return (
        <div className='flex justify-center rounded-full bg-[#FF9A8B]'>
            {isLoading ? (
                    <Spinner className="h-7 w-7 text-[#fef3c6] my-2" />
                ) : (
                    <input style={{fontFamily: "Permanent Marker"}} className='font-bold text-lg px-6 py-2 cursor-pointer' type='submit' value={buttonType}/>
                )
            }
        </div>
    );
};

export default Buttton;