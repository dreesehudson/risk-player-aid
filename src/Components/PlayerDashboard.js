import React, { useState } from 'react'
import { Card, CardTitle, Row, Col, Container } from 'reactstrap';
import RedStarTracker from './RedStarTracker'
import Recruitment from './Recruitment'
import MapTabs from './MapTabs';

const PlayerDashboard = (props) => {
    {/* players will need to be moved to a useContext helper that is populated from Austin's new game modal */ }
    const [players, setPlayers] = useState([{ id: 1, name: "Player 1" }, { id: 2, name: "Player 2" }, { id: 3, name: 'Player 3' }]);

    //map through each continent within the territories JSON
    //return array of territories objects

    return (
        <Container className='mt-3'>
            <Card>
                <Row className="my-3 justify-content-center">
                    {/* players will need to be moved to a useContext helper that is populated from Austin's new game modal */}
                    {players.map((item, idx) => {
                        return (
                            <Col key={idx} className='my-2'>
                                <RedStarTracker player={item} />
                            </Col>
                        )
                    })
                    }
                </Row>
            </Card>
            <Row className="mt-3">
                <Col sm="6">
                    {/* Territory Pane */}
                    <Card body>
                        <CardTitle tag="h5">Territories</CardTitle>
                        <MapTabs
                            players={players}
                        />
                    </Card>
                </Col>
                <Col sm="6">
                    <Row>
                        <Col>
                            <Recruitment
                                players={players}
                            />
                        </Col>
                        
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default PlayerDashboard;