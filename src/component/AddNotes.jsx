import { FaPlus } from "react-icons/fa";

const AddNotes = () => {
    return ( 
        <div className="flex flex-col items-center my-20 cursor-pointer gap-2">
            <FaPlus className="text-2xl" />
            <h2 className="text-sm text-gray-800">Add New Notes</h2>
        </div>
    );
};

export default AddNotes;