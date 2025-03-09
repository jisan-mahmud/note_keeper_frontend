import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import TagsSidebar from "../component/TagsSidebar";
import Notes from "../component/Notes";
import { menuContext } from "../context/MenuContext";
import NewNode from "./NewNode";
import { useLocation, useParams } from "react-router-dom";
import NoteDetails from "../component/NoteDetails";

const Home = () => {
    const { isOpen, setIsOpen } = useContext(menuContext);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const location = useLocation();
    const { id: noteId } = useParams();

    // Parsing query string correctly
    const queryParams = new URLSearchParams(location.search);
    const newNodePath = queryParams.get("page");
    console.log(newNodePath)

    useEffect(() => {
        const handleResize = () => setScreenWidth(window.innerWidth);

        // Set screen width on resize
        window.addEventListener("resize", handleResize);

        if (screenWidth <= 768) {
            setIsOpen(false);
        }

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [screenWidth, setIsOpen]);

    return (
        <div className="flex gap-4 overflow-hidden">
            {/* Sidebar */}
            <motion.div
                initial={{ x: 0, opacity: 1 }}
                animate={{ x: isOpen ? 0 : -200, opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className={`fixed md:relative top-4 left-0 md:top-0 px-4 z-10 bg-[#FAD0C4] ${
                    isOpen ? "w-3/4 md:w-2/9" : "w-0"
                }`}
            >
                <TagsSidebar />
            </motion.div>

            {/* Notes Content */}
            <div
                className={`flex-1 mt-10 md:mt-4 transition-all duration-300 ${
                    isOpen ? "ml-3/4 md:ml-2/9" : "ml-0"
                }`}
            >
                <Notes />
            </div>

            {/* New note */}
            {newNodePath && newNodePath === "add-newnote" && <NewNode />}

            {/* Display note details if a note ID is present */}
            {noteId && <NoteDetails/>}
        </div>
    );
};

export default Home;
