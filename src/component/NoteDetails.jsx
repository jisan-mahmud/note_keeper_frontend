import { useState } from "react";
import Buttton from "./Buttton"; 
import { ImCross } from "react-icons/im";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";

const NoteDetails = () => {
  const [title, setTitle] = useState("Lorem ipsum dolor sit amet consectetur adipisicing elit.");
  const [note, setNote] = useState("Lorem ipsum dolor, sit amet consectetur adipisicing elit...");
  const [isEditMode, setIsEditMode] = useState(false);
  const navigate = useNavigate();

  return createPortal(
    <div className="fixed inset-0 bg-[#000000e8] flex justify-center items-center z-50">
      <div className="relative bg-amber-100 p-6 rounded-lg w-full max-w-lg mx-4 sm:mx-8 lg:max-w-2xl">
        {/* Close Button */}
        <button 
          className="absolute top-4 right-4 text-black hover:text-gray-700 focus:outline-none"
          onClick={() => isEditMode ? setIsEditMode(false) : navigate('/')}
        >
          <ImCross />
        </button>

        {isEditMode ? (
          <form onSubmit={(e) => e.preventDefault()}>
            <textarea 
              className="w-full resize-none focus:outline-0 text-2xl my-4 overflow-hidden"
              value={title} 
              onChange={(e) => {
                setTitle(e.target.value);
                e.target.style.height = "auto";
                e.target.style.height = `${e.target.scrollHeight}px`;
              }} 
              style={{ fontFamily: '"Permanent Marker", serif'}}
            />
            <hr/>
            <textarea 
              cols="30" 
              rows="8"
              className="w-full resize-none focus:outline-0 text-gray-700 text-lg my-4 p-2"
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
            <Buttton buttonType="Save"/>
          </form>
        ) : (
          <>
            <h2 className="text-2xl">{title}</h2>
            <hr/>
            <p className="text-gray-700 text-lg my-4">{note}</p>
            <div onClick={() => setIsEditMode(true)}>
              <Buttton buttonType="Edit"/>
            </div>
          </>
        )}
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

export default NoteDetails;
