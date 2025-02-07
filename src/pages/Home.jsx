import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import TagsSidebar from "../component/TagsSidebar";
import Notes from "../component/Notes";
import { menuContext } from "../context/MenuContext";

const Home = () => {
    const { isOpen, setIsOpen } = useContext(menuContext);
    
    useEffect(() => {
        let prevHeight = window.innerHeight; // Store initial height

        const handleResize = () => {
            const newWidth = window.innerWidth;
            const isMobileSize = newWidth <= 768;
            const heightChange = Math.abs(window.innerHeight - prevHeight); // Detect height changes

            if (heightChange < 100) { // Ignore minor changes (keyboard opening)
                if (isMobileSize && isOpen) {
                    setIsOpen(false); // Collapse only when switching to mobile
                } else if (!isMobileSize && !isOpen) {
                    setIsOpen(true); // Expand only when switching to desktop
                }
            }

            prevHeight = window.innerHeight; // Update for next check
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [isOpen, setIsOpen]);

    return (
        <div className="flex overflow-hidden">
            <motion.div
                initial={{ x: 0, opacity: 1 }}
                animate={{ x: isOpen ? 0 : -200, opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className={`sidebar bg-[#FAD0C4] min-h-[100dvh] ${isOpen ? 'w-9/12 md:w-2/9' : 'w-0'}`}
            >
                <TagsSidebar />
            </motion.div>
            <Notes />
        </div>
    );
};

export default Home;
