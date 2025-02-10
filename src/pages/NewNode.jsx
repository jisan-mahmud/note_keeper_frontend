import React from 'react';
import Buttton from '../component/Buttton';
import { ImCross } from "react-icons/im";
import { useNavigate } from 'react-router-dom';

const NewNode = () => {

    const navigate = useNavigate()

    const handleNewNode = () => {
        navigate(-1)
    }


    return (
        <div className='w-2xl bg-amber-100 p-8 rounded-3xl'>
            <button
                onClick= {handleNewNode}
                className="absolute cursor-pointer top-10 right-10 text-white hover:text-gray-700 focus:outline-none"
            >
                <ImCross />
            </button>
            <h2 className='text-center text-2xl'>Add New Note</h2>
            <form className='flex-col'>
                <input placeholder='Enter the note topic...' className='w-full border focus:outline-0 rounded-lg border-[#FF9A8B] my-2 p-3'/>
                <textarea placeholder='Write something...' rows='10' className='w-full border rounded-lg border-[#FF9A8B] focus:outline-0 my-2 p-3'></textarea>
                <Buttton buttonType='Add Note'/>
            </form>
        </div>
    );
};

export default NewNode;