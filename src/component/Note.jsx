import { BsFillPinAngleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Note = ({ id, title, note }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/note/${id}`);  // Use dynamic note ID
    };

    return (
        <div 
            onClick={handleClick} 
            className="bg-amber-100 rounded-lg p-4 flex flex-col justify-between transition-all duration-300 hover:shadow-lg cursor-pointer min-h-[250px] h-full"
        >
            <div className="flex items-center gap-3 mb-2">
                <BsFillPinAngleFill className="text-3xl text-yellow-900" />
                <h2 className="leading-none cursor-pointer font-bold text-xl text-gray-900">{title}</h2>
            </div>
            <hr className="my-3 text-gray-300" />
            <div className="flex-1">
                <p className="text-gray-700 text-sm">{note}</p>
            </div>
        </div>
    );
};

export default Note;