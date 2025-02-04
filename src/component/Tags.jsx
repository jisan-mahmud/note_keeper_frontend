import React from 'react';
import { FaTags } from "react-icons/fa";
import { IoMdPricetag } from "react-icons/io";

const Tags = () => {
    return (
        <div className='my-8'>
            <div className='ml-1 my-2 flex items-center gap-2'>
                <FaTags />
                <b className='text-lg'>All Tags</b>
            </div>
            <hr className='border'/>
            <div className='flex flex-wrap gap-2 my-2'>
               <div className='flex items-center gap-2 cursor-pointer'>
                <IoMdPricetag />
                <span className='text-green-800 hover:text-black'>All Notes</span>
               </div>
               <div className='flex items-center gap-2 cursor-pointer'>
                <IoMdPricetag />
                <span className='text-green-800 hover:text-black'>Important Notes</span>
               </div>
               <div className='flex items-center gap-2 cursor-pointer'>
                <IoMdPricetag />
                <span className='text-green-800 hover:text-black'>Important Notes</span>
               </div>
            </div>
        </div>
    );
};

export default Tags;