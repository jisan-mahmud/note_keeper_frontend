import React from 'react';

const Buttton = ({buttonValue}) => {
    return (
        <div className='flex justify-center'>
            <input style={{fontFamily: "Permanent Marker"}} className='bg-[#FF9A8B] font-bold rounded-full text-lg px-6 py-2 cursor-pointer' type='submit' value={buttonValue}/>
        </div>
    );
};

export default Buttton;