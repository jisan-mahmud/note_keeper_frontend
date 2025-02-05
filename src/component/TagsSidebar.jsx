import React from 'react';
import SearchSection from './SearchSection';
import Filter from './Filter';
import Tags from './Tags';
import AddNotes from './AddNotes';

const TagsSidebar = () => {
    return (
        <div className='flex flex-col justify-between w-2/9 bg-[#FAD0C4] pl-10 pr-10 min-h-[calc(100vh-100px)]'>
            <div>
                <SearchSection/>
                <Filter/>
                <Tags/>
            </div>
            <div>
                <AddNotes/>
            </div>
        </div>
    );
};

export default TagsSidebar;