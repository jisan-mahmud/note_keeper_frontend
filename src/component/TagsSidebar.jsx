import React, { useContext } from 'react';
import SearchSection from './SearchSection';
import Filter from './Filter';
import Tags from './Tags';
import AddNotes from './AddNotes';
import { menuContext } from '../context/MenuContext';

const TagsSidebar = () => {
    
    return (
        <div>
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