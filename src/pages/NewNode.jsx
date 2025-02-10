import React from 'react';
import Buttton from '../component/Buttton';
import { ImCross } from "react-icons/im";
import { useNavigate } from 'react-router-dom';
import { createPortal } from 'react-dom';

const NewNode = () => {

    const navigate = useNavigate()


    return createPortal(
        <div 
          className="flex inset-0 fixed items-center justify-center bg-[#000000ee] bg-opacity-50 z-50"
        >
          <div 
            className="relative bg-amber-100 p-6 rounded-lg w-full max-w-lg mx-4 sm:mx-8 lg:max-w-2xl"
            onClick={() => navigate(-1)}
          >
            <button
              className="absolute cursor-pointer top-4 right-4 text-black hover:text-gray-700 focus:outline-none"
            >
              <ImCross />
            </button>
            <h2 className="text-center text-2xl">Add New Note</h2>
            <form className="flex flex-col">
              <input 
                placeholder="Enter the note topic..." 
                className="w-full border focus:outline-0 rounded-lg border-[#FF9A8B] my-2 p-3"
              />
              <textarea 
                placeholder="Write something..." 
                rows="10" 
                className="w-full border rounded-lg border-[#FF9A8B] focus:outline-0 my-2 p-3"
              ></textarea>
              <Buttton buttonType="Add Note" />
            </form>
          </div>
        </div>,
        document.getElementById("modal-root")
    );
};

export default NewNode;