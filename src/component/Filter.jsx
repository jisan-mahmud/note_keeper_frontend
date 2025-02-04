import React from 'react';
import { IoFilter } from "react-icons/io5";
import { CiShoppingTag } from "react-icons/ci";

const Filter = () => {
    return (
        <div className='my-8'>
            <div className='ml-1 my-2 flex items-center gap-2'>
                <IoFilter />
                <b className='text-lg'>Filter</b>
            </div>
            <hr className='border'/>
            <div className='grid my-2'>
               <div className='flex items-center gap-2 cursor-pointer'>
                <CiShoppingTag />
                <span className='text-green-800 hover:text-black'>All Notes</span>
               </div>
               <div className='flex items-center gap-2 cursor-pointer'>
                <CiShoppingTag />
                <span className='text-green-800 hover:text-black'>Important Notes</span>
               </div>
            </div>
        </div>
    );
};

export default Filter;