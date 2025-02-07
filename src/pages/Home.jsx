import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import TagsSidebar from "../component/TagsSidebar";
import Notes from "../component/Notes";
import { menuContext } from "../context/MenuContext";

const Home = () => {
    const { isOpen, setIsOpen } = useContext(menuContext);
    const [screenSize, setScreenSize] = useState(window.innerWidth);

    const handleResize = () => {
        setScreenSize(window.innerWidth);
        console.log('called')
    };

    window.addEventListener("resize", handleResize);


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
                className= {`sm:flex flex-col justify-between bg-[#FAD0C4] min-h-[calc(100vh-100px)] ${isOpen ? 'pl-10 md:relative pr-10 w-9/12 md:w-2/9' : 'w-0 pl-0 pr-0 none'}`}
            >
                <TagsSidebar />
            </motion.div>
            <Notes/>
        </div>
    );
};

export default Home;
