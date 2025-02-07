import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import TagsSidebar from "../component/TagsSidebar";
import Notes from "../component/Notes";
import { menuContext } from "../context/MenuContext";

const Home = () => {
    const { isOpen, setIsOpen } = useContext(menuContext);
    const [screenSize, setScreenSize] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setScreenSize(window.innerWidth);
        };
    
        window.addEventListener("resize", handleResize);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [])


    useEffect(() => {
        if (screenSize <= 768) {
            setIsOpen(false); 
        } else {
            setIsOpen(true); 
        }
    }, [screenSize, setIsOpen]);

    return (
        <div className="flex relative">
            <motion.div
                initial={{ x: 0, opacity: 1 }}
                animate={{ x: isOpen ? 0 : -200, opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className= {`sm:flex px-6 lg:px-10 flex-col justify-between bg-[#FAD0C4] min-h-[calc(100dvh-100px)] ${isOpen ? 'fixed md:relative w-9/12 md:w-2/9' : 'w-0 pl-0 pr-0 none'}`}
            >
                <TagsSidebar />
            </motion.div>
            <Notes/>
        </div>
    );
};

export default Home;
