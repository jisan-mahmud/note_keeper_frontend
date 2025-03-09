import { FaPlus } from "react-icons/fa";
import { useNavigate, useNavigation } from "react-router-dom";

const AddNotes = () => {

    const navigate = useNavigate()
    const handleAddNote = () => {
        navigate('?page=add-newnote')
    }

    return ( 
        <div onClick={handleAddNote} className="flex flex-col items-center my-20 cursor-pointer gap-2">
            <FaPlus className="text-2xl" />
            <h2 className="text-sm text-gray-800">Add New Notes</h2>
        </div>
    );
};

export default AddNotes;