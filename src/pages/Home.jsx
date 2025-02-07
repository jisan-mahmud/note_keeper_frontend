import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import TagsSidebar from "../component/TagsSidebar";
import Notes from "../component/Notes";
import { menuContext } from "../context/MenuContext";

const Home = () => {
    const { isOpen, setIsOpen } = useContext(menuContext);

    useEffect(() => {
        const handleResize = () => {
            const newWidth = window.innerWidth;
            const isMobileSize = newWidth <= 768;
    
            // Only update `isOpen` if the width crosses the mobile breakpoint
            if (isMobileSize && isOpen) {
                setIsOpen(false); // Collapse sidebar on mobile by default
            } else if (!isMobileSize && !isOpen) {
                setIsOpen(true); // Open sidebar on larger screens by default
            }
        };
    
        window.addEventListener("resize", handleResize);
    
        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [isOpen, setIsOpen]);

    return (
        <div className="flex relative">
            <motion.div
                initial={{ x: 0, opacity: 1 }}
                animate={{ x: isOpen ? 0 : -200, opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className= {`sm:flex px-6 lg:px-10 flex-col justify-between bg-[#FAD0C4] min-h-[calc(100dvh-100px)] ${isOpen ? 'w-9/12 md:w-2/9' : 'w-0 pl-0 pr-0 none'}`}
            >
                <TagsSidebar />
            </motion.div>
            <Notes/>
        </div>
    );
};

export default Home;
