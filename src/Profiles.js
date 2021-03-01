import React from 'react';
import {Link} from 'react-router-dom';
import {Container,Row,Col} from 'react-bootstrap';
import {TableContainer} from './components/Tables/Table';

function Profiles() {
    return (
        <div className="profiles">
            <h2 className="text-center mb-3 font-large">Profiles</h2>
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className="text-right">
                            <Link to="/"><button className="custom-primary-btn" type="button"><i class="fas fa-arrow-left"></i> Go Back</button></Link>
                        </div>
                    </Col>
                </Row>
            </Container>
            <TableContainer />
        </div>
    )
}

export default Profiles;
