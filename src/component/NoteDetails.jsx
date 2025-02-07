import { useState } from "react";
import Buttton from "./Buttton";
import { ImCross } from "react-icons/im";

const NoteDetails = ({title, note, setIsOpen }) => {
  const [inputValue, setInputValue] = useState(title);

  // Handle change event to update the input field value
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const [isEditMode, SetIsEditMode] = useState(false)

  return (
    <div className="fixed inset-0 bg-[#000000e8] flex justify-center items-center z-50">
      {isEditMode ? (
        <form className="bg-amber-100 p-6 rounded-lg w-full max-w-lg mx-4 sm:mx-8 lg:max-w-2xl">
        <button 
          onClick={() => setIsOpen(false)} 
          className="absolute top-10 right-10 text-white hover:text-gray-700 focus:outline-none"
        >
          <ImCross />
        </button>
        <input 
          type="text" 
          className="text-2xl w-full focus:outline-0" 
          value={inputValue} // bind input value to state
          onChange={handleInputChange} 
          style={{ fontFamily: '"Permanent Marker", serif' }}
        />
        <hr/>
        <textarea 
          cols="30" 
          rows="8"
          className="w-full resize-none focus:outline-0 text-gray-700 text-lg my-4 p-2"
        >
          {note}
        </textarea>
        <Buttton buttonType='Save'/>
      </form>
      ) 
      
      : (
        <div className="bg-amber-100 p-6 rounded-lg w-full max-w-lg mx-4 sm:mx-8 lg:max-w-2xl">
        <button 
          onClick={() => setIsOpen(false)} 
          className="absolute top-10 right-10 text-white hover:text-gray-700 focus:outline-none"
        >
          <ImCross />
        </button>
        <h2 className="text-2xl">onsectetur adipisicing elit.</h2>
        <hr/>
        <p className="text-gray-700 text-lg my-4">{note}</p>
        <div onClick={() => SetIsEditMode(true)}>
          <Buttton buttonType='Edit'/>
        </div>
      </div>
      )}

    </div>
  );
};

export default NoteDetails;
