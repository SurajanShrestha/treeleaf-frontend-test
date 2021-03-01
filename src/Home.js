import React from 'react';
import {Link} from 'react-router-dom';
import {Container,Row,Col} from 'react-bootstrap';
import {FormContainer} from './components/Forms/Form';
import {TableContainer} from './components/Tables/Table';
import CreatorImg from './creator-img.jpg';

function Home() {
    return (
        <div className="home">
            <h2 className="text-center mb-3 font-large">Welcome to InstaProfiles</h2>
            <Container>
                <Row className="mt-4">
                    <Col lg={{span: 6,offset: 6}} className="text-right">
                        <h4 className="font-xsmall mb-3">Follow me on: <a className="custom-link" href="https://github.com/SurajanShrestha" target="_blank"><i className="fab fa-github" style={{color: '#17C2D7',fontSize: '24px'}}></i></a></h4>
                        <h4 className="font-xsmall mb-3">Created with <i className="far fa-heart" style={{color: '#17C2D7'}}></i> by <img src={CreatorImg} alt="Creator" style={{height: '32px', width: '32px', border: '1px solid transparent', borderRadius: '50%'}} /><a className="custom-link" href="https://surajanshrestha.github.io/" target="_blank"><em>Surajan Shrestha</em></a></h4>
                    </Col>
                </Row>
            </Container>
            <FormContainer />
            <TableContainer />
            <div className="text-center">
                <Link to="/profiles"><button className="custom-primary-btn" type="button"><i className="fas fa-users"></i> View Profiles</button></Link>
            </div>
        </div>
    );
}

export default Home;
