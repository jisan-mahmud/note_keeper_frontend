import { BsFillPinAngleFill } from "react-icons/bs";


const Note = () => {
    return (
        <div className='bg-amber-100 rounded-lg p-4'>
            <div className="flex items-center gap-3 mb-2">
                <BsFillPinAngleFill className="text-3xl text-yellow-900" />
                <h2 className="leading-none font-bold text-xl text-gray-900">onsectetur adipisicing elit.</h2>
            </div>
            <hr className="my-3 text-gray-300"/>
            <div className="flex">
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis ducimus quo cum quisquam error? Culpa porro, modi, alias soluta amet eveniet incidunt accusantium dolores facilis ea consectetur mollitia molestiae obcaecati.
                </p>
            </div>
        </div>
    );
};

export default Note;