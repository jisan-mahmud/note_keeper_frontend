import React from 'react';
import SearchSection from './SearchSection';
import Filter from './Filter';
import Tags from './Tags';
import AddNotes from './AddNotes';

const TagsSidebar = () => {
    return (
        <div className="flex flex-col justify-between min-h-screen p-10">
            <div>
                <SearchSection />
                <Tags />
            </div>
            <div>
                <AddNotes />
            </div>
        </div>
    );
};

export default TagsSidebar;
