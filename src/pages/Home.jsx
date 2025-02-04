import TagsSidebar from '../component/TagsSidebar';
import Notes from '../component/Notes';

const Home = () => {
    return (
        <div className='flex'>
            <TagsSidebar/>
            <Notes/>
        </div>
    );
};

export default Home