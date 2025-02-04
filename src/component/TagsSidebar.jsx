import React from 'react';
import SearchSection from './SearchSection';
import Filter from './Filter';
import Tags from './Tags';

const TagsSidebar = () => {
    return (
        <div className='w-2/9 bg-[#FAD0C4] pl-10 pr-10 min-h-[calc(100vh-100px)]'>
            <SearchSection/>
            <Filter/>
            <Tags/>
        </div>
    );
};

export default TagsSidebar;