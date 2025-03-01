import { useContext } from "react";
import { menuContext } from "../context/MenuContext";
import Note from "../component/Note";

const Notes = () => {
    const { isOpen } = useContext(menuContext);

    return (
        <div
            className={`grid gap-4 p-8 sm:grid-cols-2 transition-all duration-300 h-fit
            ${isOpen ? "lg:grid-cols-3 xl:grid-cols-4 w-[6/9]" : "w-full xl:grid-cols-5 lg:grid-cols-4"}`}
        >
            <Note />
            <Note />
            <Note />
            <Note />
            <Note />
        </div>
    );
};

export default Notes;
