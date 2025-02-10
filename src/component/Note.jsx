import { BsFillPinAngleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";


const Note = () => {
    const navigate = useNavigate()

    const title = 'onsectetur adipisicing elit.'
    const note = `
    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
    Debitis ducimus quo cum quisquam error? 
    Culpa porro, modi, alias soluta amet eveniet incidunt accusantium dolores facilis ea consectetur mollitia molestiae obcaecati.
    klasnfkdghadfku slk oief oie wj oapojaeo ajpeoh ods ihoasfh.
    `
    const truncateText = (text, limit = 50) => {
        return text.length > limit ? text.slice(0, limit).trim() + "..." : text;
    };

    return (
        <div onClick={ () => navigate(`/note/${1}`) } className='bg-amber-100 rounded-lg p-4 !h-fit'>
            <div className="flex items-center gap-3 mb-2">
                <BsFillPinAngleFill className="text-3xl text-yellow-900" />
                <h2 className="leading-none cursor-pointer font-bold text-xl text-gray-900">{title}</h2>
            </div>
            <hr className="my-3 text-gray-300"/>
            <div className="flex">
                <p>
                    {truncateText(note, 200)}
                </p>
            </div>
        </div>
    );
};

export default Note;