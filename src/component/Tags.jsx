import React from 'react';
import { useNavigate } from "react-router-dom";
import { FaTags } from "react-icons/fa";
import { IoMdPricetag } from "react-icons/io";
import {useQuery} from '@tanstack/react-query'
import {notes} from '../utils/notes'

const fetchTags = async () => {
    const response = await notes.get('api/tags/')
    return response.data
}


const Tags = () => {
    const navigate = useNavigate()
    const {isFetching, data, error} = useQuery({
        queryKey: ['tags'],
        queryFn: fetchTags
    })


    return (
        <div className='my-8'>
            <div className='ml-1 my-2 flex items-center gap-2'>
                <FaTags />
                <b className='text-lg'>All Tags</b>
            </div>
            <hr className='border'/>
            <div className='flex flex-wrap gap-2 my-2'>
               {data?.map((tag) => (
                    <div key={tag.id} className='flex items-center gap-2 cursor-pointer'>
                        <IoMdPricetag />
                        <span onClick={() => navigate(`?tag=${tag.name}`)} className='text-green-800 hover:text-black'>{tag.name}</span>
                    </div>
               ))}
              
            </div>
        </div>
    );
};

export default Tags;