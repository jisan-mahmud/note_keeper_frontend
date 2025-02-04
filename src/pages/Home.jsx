import React, { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const Home = () => {
    const [page, setPage] = useState(0)

    const handleChange = (_, value) => {
        // setPage(value)
        console.log(value)
      };

    return (
        <div>
            <h1>Home</h1>
        </div>
    );
};

export default Home