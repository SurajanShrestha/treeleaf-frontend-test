import React from 'react';
import {Link} from 'react-router-dom';
import {FormContainer} from './components/Forms/Form';
import {TableContainer} from './components/Tables/Table';

function Home() {
    return (
        <div className="home">
            <h2>My Profiles</h2>
            <FormContainer />
            <TableContainer />
            <Link to="/profiles">Profiles</Link>
        </div>
    );
}

export default Home;
